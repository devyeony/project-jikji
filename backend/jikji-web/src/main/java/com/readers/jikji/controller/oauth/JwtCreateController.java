package com.readers.jikji.controller.oauth;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.readers.jikji.config.WebMvcMapping;
import com.readers.jikji.config.jwt.JwtProperties;
import com.readers.jikji.config.oauth.provider.GoogleUser;
import com.readers.jikji.config.oauth.provider.NaverUser;
import com.readers.jikji.config.oauth.provider.OAuthUserInfo;
import com.readers.jikji.domain.user.*;
import com.readers.jikji.dto.IAmResponse;
import com.readers.jikji.service.user.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RequestMapping(WebMvcMapping.URL.OAUTH)
@RestController
public class JwtCreateController {

    @Autowired
    private UserService userService;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @PostMapping("/jwt/google")
    public ResponseEntity<Map<String, Object>> createGoogleJwt(@RequestBody Map<String, Object> data) {
        OAuthUserInfo googleUser =
                new GoogleUser((Map<String, Object>)data.get("profileObj"));
        User userEntity =
                userService.findByUsername(googleUser.getProvider()+"_"+googleUser.getProviderId());

        if(userEntity == null) {
            return new ResponseEntity<>(handleNewUser(googleUser), HttpStatus.OK);
        } else{
            return new ResponseEntity<>(handleOldUser(googleUser, userEntity), HttpStatus.OK);
        }
    }

    @PostMapping("/jwt/naver")
    public Map<String, Object> createNaverJwt(@RequestBody Map<String, Object> data) {
        OAuthUserInfo naverUser =
                new NaverUser((Map<String, Object>)data.get("profileObj"));
        User userEntity =
                userService.findByUsername(naverUser.getProvider()+"_"+naverUser.getProviderId());

        if(userEntity == null) {
            return handleNewUser(naverUser);
        } else{
            return handleOldUser(naverUser, userEntity);
        }
    }

    public Map<String, Object> handleNewUser(OAuthUserInfo userInfo){
        User userEntity = User.builder()
                .username(userInfo.getProvider()+"_"+userInfo.getProviderId())
                .password(bCryptPasswordEncoder.encode(JwtProperties.SECRET))
                .name(userInfo.getName())
                .email(userInfo.getEmail())
                .profile(userInfo.getProfile())
                .state(UserState.ACTIVATE)
                .build();
        userService.save(userEntity);

        Authority authority = Authority.builder()
                .bookMetadataId(0)
                .user(userEntity)
                .role(Role.USER).build();
        userService.save(authority);

        EmailNotification emailNotification = EmailNotification.builder()
                .translationRequest(true)
                .translationResponse(true)
                .translationUpdate(true)
                .roleAdd(true)
                .user(userEntity).build();
        userService.save(emailNotification);

        userEntity = userService.findByUsername(userEntity.getUsername());
        return createJwt(userEntity);
    }

    public Map<String, Object> handleOldUser(OAuthUserInfo userInfo, User userEntity){
        String name = userInfo.getName();
        String profile = userInfo.getProfile();
        if(!userEntity.getName().equals(name) || !userEntity.getProfile().equals(profile)){
            userEntity.update(name, profile);
            userService.save(userEntity);
        }
        return createJwt(userEntity);
    }

    public Map<String, Object> createJwt(User userEntity) {
        String jwtToken = JWT.create()
                .withSubject(userEntity.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis()+ JwtProperties.EXPIRATION_TIME))
                .sign(Algorithm.HMAC512(JwtProperties.SECRET));
        IAmResponse iAmResponse = new IAmResponse(userEntity);

        Map<String, Object> map = new HashMap<>();
        map.put("jwtToken", jwtToken);
        map.put("userInfo", iAmResponse);
        return map;
    }
}

package com.readers.jikji.config.oauth.provider;

import com.readers.jikji.domain.user.AuthProvider;

import java.util.Map;

public class KakaoUser implements OAuthUserInfo {

    private Map<String, Object> attribute;
    private Map<String, Object> kakaoAccount;
    private Map<String, Object> profile;

    public KakaoUser(Map<String, Object> attribute) {
        this.attribute = attribute;
        this.kakaoAccount = (Map<String, Object>) attribute.get("kakao_account");
        this.profile = (Map<String, Object>) this.kakaoAccount.get("profile");
    }

    @Override
    public String getProviderId() {
        return ((Integer)attribute.get("id")).toString();
    }

    @Override
    public AuthProvider getProvider() {
        return AuthProvider.kakao;
    }

    @Override
    public String getName() {
        return (String)profile.get("nickname");
    }

    @Override
    public String getEmail() {
        boolean agreement = (boolean) kakaoAccount.get("email_needs_agreement");
        return (String)kakaoAccount.get("email");
    }

    @Override
    public String getProfile() {
        return (String)profile.get("profile_image_url");
    }
}

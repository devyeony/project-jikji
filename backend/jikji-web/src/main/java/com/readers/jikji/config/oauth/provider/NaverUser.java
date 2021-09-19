package com.readers.jikji.config.oauth.provider;

import com.readers.jikji.domain.user.AuthProvider;

import java.util.Map;

public class NaverUser implements OAuthUserInfo {

    private Map<String, Object> attribute;

    public NaverUser(Map<String, Object> attribute) {
        this.attribute = attribute;
    }

    @Override
    public String getProviderId() {
        return (String)attribute.get("id");
    }

    @Override
    public AuthProvider getProvider() {
        return AuthProvider.naver;
    }

    @Override
    public String getName() {
        return (String)attribute.get("name");
    }

    @Override
    public String getEmail() {
        return (String)attribute.get("email");
    }

    @Override
    public String getProfile() {
        return (String)attribute.get("profile_image");
    }
}

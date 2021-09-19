package com.readers.jikji.config.oauth.provider;

import com.readers.jikji.domain.user.AuthProvider;

import java.util.Map;

public class GoogleUser implements OAuthUserInfo {

    private Map<String, Object> attribute;

    public GoogleUser(Map<String, Object> attribute) {
        this.attribute = attribute;
    }

    @Override
    public String getProviderId() {
        return (String)attribute.get("googleId");
    }

    @Override
    public AuthProvider getProvider() {
        return AuthProvider.google;
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
        return (String)attribute.get("imageUrl");
    }
}

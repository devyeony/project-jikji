package com.readers.jikji.config.oauth.provider;

import com.readers.jikji.domain.user.AuthProvider;

public interface OAuthUserInfo {
    public String getProviderId();
    public AuthProvider getProvider();
    public String getName();
    public String getEmail();
    public String getProfile();
}

package com.readers.jikji.config.jwt;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class JwtProperties {
    public static String SECRET;
    public static int EXPIRATION_TIME = 864000000; // 10일
    public static String TOKEN_PREFIX = "Bearer ";
    public static String HEADER_STRING = "Authorization";

    @Value("${jwt.secret}")
    public void setSECRET(String value){
        SECRET = value;
    }
}

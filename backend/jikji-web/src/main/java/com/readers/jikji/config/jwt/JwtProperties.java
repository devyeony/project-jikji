package com.readers.jikji.config.jwt;

public class JwtProperties {
    public static String SECRET = "926D96C90030DD58429D2751AC1BDBBC";
    public static int EXPIRATION_TIME = 864000000; // 10일
    public static String TOKEN_PREFIX = "Bearer ";
    public static String HEADER_STRING = "Authorization";
}

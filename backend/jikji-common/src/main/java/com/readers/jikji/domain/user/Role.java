package com.readers.jikji.domain.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * 회원 권한의 종류
 */
@Getter
@RequiredArgsConstructor
public enum Role {

    USER("ROLE_USER", "일반 사용자"),
    ADMIN("ROLE_ADMIN", "관리자");
    
    private final String key;
    private final String title;

}

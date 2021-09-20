package com.readers.jikji.domain.user;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * 회원의 활동 상태를 나타냄
 */
@Getter
@RequiredArgsConstructor
public enum UserState {

    ACTIVATE(0, "회원 활성화"),
    WITHDRAWED(1, "회원 탈퇴");

    private final Integer key;
    private final String title;

}

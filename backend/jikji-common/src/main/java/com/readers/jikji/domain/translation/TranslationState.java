package com.readers.jikji.domain.translation;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

/**
 * 번역 상태를 나타냄
 */
@Getter
@RequiredArgsConstructor
public enum TranslationState {

    REQUEST(0, "번역 반영 요청"),
    APPROVE(1, "번역 반영 승인"),
    DECLINE(2, "번역 반영 반려");

    private final Integer key;
    private final String title;

}

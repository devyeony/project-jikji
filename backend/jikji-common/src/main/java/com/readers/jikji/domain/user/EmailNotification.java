package com.readers.jikji.domain.user;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.readers.jikji.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

/**
 * 회원별 Email 알림 설정 Entity
 */
@ToString
@Getter
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "id")
@Entity
public class EmailNotification extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private boolean translationRequest;

    @Column(nullable = false)
    private boolean translationResponse;

    @Column(nullable = false)
    private boolean translationUpdate;

    @Column(nullable = false)
    private boolean roleAdd;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public EmailNotification(boolean translationRequest, boolean translationResponse, boolean translationUpdate, boolean roleAdd, User user) {
        this.translationRequest = translationRequest;
        this.translationResponse = translationResponse;
        this.translationUpdate = translationUpdate;
        this.roleAdd = roleAdd;
        this.user = user;
    }
}

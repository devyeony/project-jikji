package com.readers.jikji.domain.user;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import com.readers.jikji.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

/**
 * 사용자 정보 Entity
 */
@ToString
@Getter
@NoArgsConstructor
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "id")
@Entity
public class User extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String username;

    @JsonIgnore
    private String password;

    @Column(length = 15, nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column
    private String profile;

    @Column(nullable = false)
    private int points;

    @Enumerated(EnumType.ORDINAL)
    @Column(nullable = false)
    private UserState state;

    @Column
    private LocalDateTime withdrawalDate;

    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private List<Authority> authorities;

    @OneToOne(mappedBy = "user", fetch = FetchType.EAGER)
    private  EmailNotification emailNotification;

    @Builder
    public User(long id, String username, String password, String name, String email, String profile, int points, UserState state, LocalDateTime withdrawalDate, List<Authority> authorities, EmailNotification emailNotification) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
        this.profile = profile;
        this.points = points;
        this.state = state;
        this.withdrawalDate = withdrawalDate;
        this.authorities = authorities;
        this.emailNotification = emailNotification;
    }

    public User update(String name, String profile){
        this.name = name;
        this.profile = profile;
        return this;
    }

    public Integer getStateKey() {
        return this.state.getKey();
    }
}

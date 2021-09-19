package com.readers.jikji.dto;

import com.readers.jikji.domain.user.Authority;
import com.readers.jikji.domain.user.EmailNotification;
import com.readers.jikji.domain.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@Getter
public class IAmResponse {
    private long id;
    private String name;
    private String email;
    private String profile;
    private List<Authority> authorities;
    private int points;
    private EmailNotification emailNotification;

    public IAmResponse(User user) {
        this.id = user.getId();
        this.name = user.getName();
        this.email = user.getEmail();
        this.profile = user.getProfile();
        this.authorities = user.getAuthorities();
        this.points = user.getPoints();
        this.emailNotification = user.getEmailNotification();
    }
}

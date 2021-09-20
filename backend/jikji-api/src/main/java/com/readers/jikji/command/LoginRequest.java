package com.readers.jikji.command;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@NoArgsConstructor
@Getter
public class LoginRequest {

    @NotBlank
    @Email
    private String username;

    @NotBlank
    private String password;

    @Builder
    public LoginRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }
}

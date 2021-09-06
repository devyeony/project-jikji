package com.readers.jikji.user.entity;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class User {
    private int id;
    private String name;
    private String email;
    private String profile;
    private String accessToken;
    private int provider;
    private int points;
    private int state;
    private Date dateSignUp;
    private Date dateWithdraw;
}

package com.readers.jikji.user.entity;

import javax.persistence.Entity;

@Entity
public class EmailNotification {
    private int id;
    private int userId;
    private boolean translationRequest;
    private boolean translationResponse;
    private boolean translationUpdate;
    private boolean roleAdd;
}

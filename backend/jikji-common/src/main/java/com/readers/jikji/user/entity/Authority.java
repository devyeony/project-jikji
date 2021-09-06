package com.readers.jikji.user.entity;

import javax.persistence.Entity;

@Entity
public class Authority {
    private int id;
    private int userId;
    private int bookMetadataId;
    private String role;
}

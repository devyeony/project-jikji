package com.readers.jikji.taste.entity;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class BookReview {
    private int id;
    private int userId;
    private int bookMetadataId;
    private int score;
    private String comment;
    private Date date;
}

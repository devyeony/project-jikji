package com.readers.jikji.taste.entity;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class BookLike {
    private int id;
    private int userId;
    private int bookMetadataId;
    private Date date;
}

package com.readers.jikji.taste.entity;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class BookRead {
    private int id;
    private int userId;
    private int bookMetadataId;
    private long bookTranslationId;
    private Date date;
}

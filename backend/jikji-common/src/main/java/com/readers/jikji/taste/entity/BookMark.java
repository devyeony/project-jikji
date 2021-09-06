package com.readers.jikji.taste.entity;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class BookMark {
    private int id;
    private int userId;
    private long bookTranslationId;
    private Date date;
}

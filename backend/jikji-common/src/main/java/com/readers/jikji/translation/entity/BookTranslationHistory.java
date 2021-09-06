package com.readers.jikji.translation.entity;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class BookTranslationHistory {
    private int id;
    private int bookMetadataId;
    private long bookTranslationId;
    private String content;
    private Date dateRequest;
    private Date dateResponse;
    private int state;
}

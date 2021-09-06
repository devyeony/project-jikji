package com.readers.jikji.translation.entity;

import javax.persistence.Entity;

@Entity
public class BookTranslationContributor {
    private int id;
    private long bookTranslationHistoryId;
    private int userId;
    private String comment;
    private int point;
}

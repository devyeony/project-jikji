package com.readers.jikji.book.entity;

import javax.persistence.Entity;

@Entity
public class BookOriginal {
    private long id;
    private int bookMetadataId;
    private String content;
}

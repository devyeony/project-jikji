package com.readers.jikji.translation.entity;

import javax.persistence.Entity;

@Entity
public class BookTranslation {
    private long id;
    private int bookMetadataId;
    private long bookOriginalId;
    private int page;
    private String content;
}

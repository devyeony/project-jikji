package com.readers.jikji.book.entity;

import javax.persistence.Entity;
import java.util.Date;

@Entity
public class BookMetadata {
    private int id;
    private String type;
    private Date issued;
    private String title;
    private String language;
    private String authors;
    private String cover;
}

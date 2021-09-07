package com.readers.jikji.domain.book;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class BookOriginal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int bookMetadataId;
    private String content;
}

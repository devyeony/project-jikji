package com.readers.jikji.domain.translation;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Getter
@Setter
public class BookTranslationHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int bookMetadataId;
    private long bookTranslationId;
    private String content;
    private Date dateRequest;
    private Date dateResponse;
    private int state;
}

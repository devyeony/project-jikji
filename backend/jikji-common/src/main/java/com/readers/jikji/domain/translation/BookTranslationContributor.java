package com.readers.jikji.domain.translation;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
public class BookTranslationContributor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private long bookTranslationHistoryId;
    private int userId;
    private String comment;
    private int point;
}

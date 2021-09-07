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
public class BookTranslation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int bookMetadataId;
    private long bookOriginalId;
    private int page;
    private String content;
}

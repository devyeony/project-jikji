package com.readers.jikji.domain.book;

import com.readers.jikji.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDate;

@ToString
@Getter
@NoArgsConstructor
@Entity
public class BookMetadata extends BaseTimeEntity {
    @Id
    private int id;

    @Column(length = 5)
    private String type;

    @Column
    private LocalDate issued;

    @Column(nullable = false)
    private String title;

    @Column(length = 5, nullable = false)
    private String language;

    @Column(nullable = false)
    private String authors;

    @Column
    private String cover;

    @Builder
    public BookMetadata(int id, String type, LocalDate issued, String title, String language, String authors, String cover){
        this.id = id;
        this.type = type;
        this.issued = issued;
        this.title = title;
        this.language = language;
        this.authors = authors;
        this.cover = cover;
    }
}

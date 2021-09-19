package com.readers.jikji.domain.book;

import com.readers.jikji.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@ToString
@Getter
@NoArgsConstructor
@Entity
public class BookOriginal extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private int page;

    @Lob
    @Column(nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "book_metadata_id")
    private BookMetadata bookMetadata;

    @Builder
    public BookOriginal(int page, String content, BookMetadata bookMetadata) {
        this.page = page;
        this.content = content;
        this.bookMetadata = bookMetadata;
    }
}

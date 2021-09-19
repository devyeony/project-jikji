package com.readers.jikji.domain.translation;

import com.readers.jikji.domain.BaseTimeEntity;
import com.readers.jikji.domain.book.BookMetadata;
import com.readers.jikji.domain.book.BookOriginal;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@ToString
@Getter
@NoArgsConstructor
@Entity
public class BookTranslation extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private int page;

    @Lob
    @Column
    private String content;

    @ManyToOne
    @JoinColumn(name = "book_metadata_id")
    private BookMetadata bookMetadata;

    @OneToOne
    @JoinColumn(name = "book_original_id")
    private BookOriginal bookOriginal;

    @Builder
    public BookTranslation(int page, String content, BookMetadata bookMetadata, BookOriginal bookOriginal) {
        this.page = page;
        this.content = content;
        this.bookMetadata = bookMetadata;
        this.bookOriginal = bookOriginal;
    }
}

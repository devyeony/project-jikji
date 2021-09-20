package com.readers.jikji.domain.translation;

import com.readers.jikji.domain.BaseTimeEntity;
import com.readers.jikji.domain.book.BookMetadata;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.time.LocalDateTime;

@ToString
@Getter
@NoArgsConstructor
@Entity
public class BookTranslationHistory extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Lob
    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime requestDate;

    @Column
    private LocalDateTime responseDate;

    @Enumerated(EnumType.ORDINAL)
    @Column(length = 2, nullable = false)
    private TranslationState state;

    @ManyToOne
    @JoinColumn(name = "book_metadata_id")
    private BookMetadata bookMetadata;

    @ManyToOne
    @JoinColumn(name = "book_translation_id")
    private BookTranslation bookTranslation;

    @OneToOne(mappedBy = "bookTranslationHistory")
    private BookTranslationAdmin bookTranslationAdmin;

    @OneToOne(mappedBy = "bookTranslationHistory")
    private BookTranslationContributor bookTranslationContributor;

    @Builder
    public BookTranslationHistory(String content, LocalDateTime requestDate, LocalDateTime responseDate, TranslationState state, BookMetadata bookMetadata, BookTranslation bookTranslation, BookTranslationAdmin bookTranslationAdmin, BookTranslationContributor bookTranslationContributor) {
        this.content = content;
        this.requestDate = requestDate;
        this.responseDate = responseDate;
        this.state = state;
        this.bookMetadata = bookMetadata;
        this.bookTranslation = bookTranslation;
        this.bookTranslationAdmin = bookTranslationAdmin;
        this.bookTranslationContributor = bookTranslationContributor;
    }

    public Integer getStateKey() {
        return this.state.getKey();
    }
}

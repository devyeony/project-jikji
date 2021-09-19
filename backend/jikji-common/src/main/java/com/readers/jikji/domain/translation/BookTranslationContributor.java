package com.readers.jikji.domain.translation;

import com.readers.jikji.domain.BaseTimeEntity;
import com.readers.jikji.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;

@ToString
@Getter
@NoArgsConstructor
@Entity
public class BookTranslationContributor extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Lob
    @Column
    private String comment;

    @Column(length = 3)
    private int point;

    @OneToOne
    @JoinColumn(name = "book_translation_history_id")
    private BookTranslationHistory bookTranslationHistory;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public BookTranslationContributor(String comment, int point, BookTranslationHistory bookTranslationHistory, User user) {
        this.comment = comment;
        this.point = point;
        this.bookTranslationHistory = bookTranslationHistory;
        this.user = user;
    }
}

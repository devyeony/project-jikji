package com.readers.jikji.domain.taste;

import com.readers.jikji.domain.BaseTimeEntity;
import com.readers.jikji.domain.translation.BookTranslation;
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
public class BookMark extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "book_translation_id")
    private BookTranslation bookTranslation;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public BookMark(BookTranslation bookTranslation, User user) {
        this.bookTranslation = bookTranslation;
        this.user = user;
    }
}

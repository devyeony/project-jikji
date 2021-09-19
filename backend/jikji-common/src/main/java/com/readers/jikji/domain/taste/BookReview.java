package com.readers.jikji.domain.taste;

import com.readers.jikji.domain.BaseTimeEntity;
import com.readers.jikji.domain.book.BookMetadata;
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
public class BookReview extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(length = 2, nullable = false)
    private int score;

    @Column(length = 400, nullable = false)
    private String comment;

    @ManyToOne
    @JoinColumn(name = "book_metadata_id")
    private BookMetadata bookMetadata;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public BookReview(int score, String comment, BookMetadata bookMetadata, User user) {
        this.score = score;
        this.comment = comment;
        this.bookMetadata = bookMetadata;
        this.user = user;
    }
}

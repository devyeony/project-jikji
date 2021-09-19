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
public class BookLike extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "book_metadata_id")
    private BookMetadata bookMetadata;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public BookLike(BookMetadata bookMetadata, User user) {
        this.bookMetadata = bookMetadata;
        this.user = user;
    }
}

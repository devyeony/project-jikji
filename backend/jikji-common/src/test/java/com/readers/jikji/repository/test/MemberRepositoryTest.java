package com.readers.jikji.repository.test;

import com.readers.jikji.domain.test.Board;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;

@ExtendWith(SpringExtension.class)
@DataJpaTest
public class MemberRepositoryTest {

    @MockBean
    private BoardRepository boardRepository;

    @Test
    public void add(){
        System.out.println("디비 저장 시작");
        Board board = new Board("제목2", "내용2");
        boardRepository.save(board);
        List<Board> list = boardRepository.findAll();
        System.out.println(list);
    }
}

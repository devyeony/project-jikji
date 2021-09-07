package com.readers.jikji.service.test;

import com.readers.jikji.domain.test.Board;
import com.readers.jikji.repository.test.BoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardRepository boardRepository;

    @Transactional
    public String save(Board board){
        boardRepository.save(board);
        return "완료";
    }

    public List<Board> fildAll() {
        return boardRepository.findAll();
    }

}

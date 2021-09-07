package com.readers.jikji.controller.test;

import com.readers.jikji.domain.test.Board;
import com.readers.jikji.service.test.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BoardController {
    @Autowired private BoardService boardService;

    @GetMapping("/test")
    public String test(){
        return "test success";
    }

    @GetMapping(value = "/board_save")
    public void save(Board board){
        Board bd = new Board();
        bd.setContents(board.getContents());
        bd.setTitle(board.getTitle());
        boardService.save(bd);
    }

    @GetMapping("boards")
    public List<Board> boardlist(){
        return boardService.fildAll();
    }
}


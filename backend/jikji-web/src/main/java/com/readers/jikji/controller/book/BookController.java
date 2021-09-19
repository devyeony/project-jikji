package com.readers.jikji.controller.book;

import com.readers.jikji.config.WebMvcMapping;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping(WebMvcMapping.URL.BOOK)
@RestController
public class BookController {

}

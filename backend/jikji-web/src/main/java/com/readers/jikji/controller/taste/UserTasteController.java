package com.readers.jikji.controller.taste;

import com.readers.jikji.config.WebMvcMapping;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping(WebMvcMapping.URL.ROLE_USER + WebMvcMapping.URL.TASTE)
@RestController
public class UserTasteController {
}

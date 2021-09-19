package com.readers.jikji.controller.user;

import com.readers.jikji.config.WebMvcMapping;
import com.readers.jikji.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping(WebMvcMapping.URL.USER)
@RestController
public class UserController {

    private final UserService userService;

}

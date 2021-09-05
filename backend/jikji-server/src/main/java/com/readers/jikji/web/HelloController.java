package com.readers.jikji.web;

import com.readers.jikji.Hello;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello(){
        Hello hello = new Hello();
        System.out.println(hello.getHello());
        return hello.getHello();
    }
}

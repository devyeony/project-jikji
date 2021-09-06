package com.readers.jikji.web;

import com.readers.jikji.Hello;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping(value="/hello", produces="text/plain;charset=UTF-8")
    public String hello(){
        Hello hello = new Hello();
        System.out.println(hello.getHello());
        return hello.getHello();
    }
}

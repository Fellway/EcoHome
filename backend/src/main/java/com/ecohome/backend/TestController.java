package com.ecohome.backend;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/hello-world")
    public String helloWorld() {
        return "Hello world";
    }

}

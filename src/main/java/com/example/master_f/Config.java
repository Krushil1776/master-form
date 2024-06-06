package com.example.master_f;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Config implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String img = "file:" + System.getProperty("user.dir") + "/src/main/resources/static/image/";
        registry.addResourceHandler("/img/**").addResourceLocations(img);
    }

}

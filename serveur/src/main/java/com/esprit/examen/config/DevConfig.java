package com.esprit.examen.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;




@Configuration
@EnableWebMvc
public class DevConfig implements WebMvcConfigurer {
    @Value("${remote.server.url}")
    private String url;

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/**")
                        .allowedOrigins("http://localhost:4200") // Angular dev
                        .allowedOrigins(url) // Angular dev
                        .allowedOrigins("http://app-client:4200") // Angular dev
                         .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS") // All CRUD + OPTIONS
                        .allowedHeaders("*")        // Allow all headers
                        .allowCredentials(true);    // Allow credentials (cookies, auth headers)
    }
}

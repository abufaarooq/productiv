package com.productiv.restfulwebservices.basic.auth;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.configurers.HttpBasicConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebSecurity
public class SpringSecurityBasicAuthConfig {

	   @Bean
	   public WebMvcConfigurer corsConfigurer() {
		   		return new WebMvcConfigurer() {
				@Override
				public void addCorsMappings(CorsRegistry registry) {
					registry.addMapping("/**").allowedOrigins("http://localhost:4200").allowedMethods("*");
				}
			};
			
		}
	   
	   
	   @Bean
	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
	        // ...
	        http.cors().and().csrf().disable();
	        return http.build();
	    }
	   
	   protected void configure(HttpSecurity http) throws Exception {
		   
		    http.authorizeHttpRequests().requestMatchers("/h2-console/**").permitAll()
		        .and().csrf().ignoringRequestMatchers("/h2-console/**")
		        .and().headers().frameOptions().sameOrigin();
		// ... your other configuration
		}


}
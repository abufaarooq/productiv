package com.productiv.authentication;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.core.userdetails.User.UserBuilder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CommonsRequestLoggingFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.productiv.user.User;

@Configuration
@EnableWebSecurity
public class SpringSecurityBasicAuthConfig {
	
	@Autowired
	UserDetailsService user;

//	   @Bean
//	   public WebMvcConfigurer corsConfigurer() {
//		   		return new WebMvcConfigurer() {
//				@Override
//				public void addCorsMappings(CorsRegistry registry) {
//					registry.addMapping("/**").allowedOrigins("http://localhost:4200").allowedMethods("*");
//				}
//			};
//		}

	
	/* The below code block allows access to the H2 console */
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().anyRequest();
    }


	   @Bean
	    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		   
		   http
	    		.authorizeHttpRequests()
//	    		.requestMatchers("/h2/**").permitAll()
	    		.requestMatchers("/api/v1/registration/**").permitAll()
	    		.requestMatchers("/api/v1/login/**").permitAll()
	    		.anyRequest().authenticated()
	    		.and()
	    		.headers().frameOptions().disable()
	    		.and()
//	    		.httpBasic(Customizer.withDefaults())
	    		.userDetailsService(user)
	    	    .csrf().disable();
	    		 return http.build();

		    }

	   @Bean
	   public BCryptPasswordEncoder passwordEncoder()
	   {
		   return new BCryptPasswordEncoder();
	   }

	   @Bean
	   AuthenticationProvider authenticationProvider() 
	   {
		   DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		   provider.setUserDetailsService(user);
		   provider.setPasswordEncoder(new BCryptPasswordEncoder());
		   return provider;
   }
}
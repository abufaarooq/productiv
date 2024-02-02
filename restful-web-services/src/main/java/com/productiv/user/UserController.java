package com.productiv.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.productiv.item.Item;

@RestController
@RequestMapping("/api/v1")
public class UserController {
	
	@Autowired
	private UserService userService;
	
		
	@PostMapping("/login")
	public ResponseEntity<String> getUser(@RequestBody User user, Authentication auth)
	{
		UserDetails end_user =	userService.loadUserByUsername(user.getUserName());	
			
		if (end_user.getUsername().equals(user.getUserName())   &&  end_user.getPassword().equals(user.getPassWord()))
		{
			   return new ResponseEntity <String> ("Welcome, " + end_user.getUsername() + "!", HttpStatus.OK);

		}
		else
		{
			return new ResponseEntity <String> ("Invalid attempt, please confirm your username and/or password", HttpStatus.UNAUTHORIZED);

		}
	}
	
//	@PostMapping("/logout")
//	public ResponseEntity<String> getUser(@RequestBody User user)
//	{
//		UserDetails end_user =	userService.loadUserByUsername(user.getUserName());	
//			
//		if (end_user.getUsername().equals(user.getUserName())   &&  end_user.getPassword().equals(user.getPassWord()))
//		{
//			   return new ResponseEntity <String> ("Welcome, " + end_user.getUsername() + "!", HttpStatus.OK);
//
//		}
//		else
//		{
//			return new ResponseEntity <String> ("Invalid attempt, please confirm your username and/or password", HttpStatus.UNAUTHORIZED);
//
//		}
//	}

}
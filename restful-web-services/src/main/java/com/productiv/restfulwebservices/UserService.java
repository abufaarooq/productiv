package com.productiv.restfulwebservices;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService
{
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername(String eMail) throws UsernameNotFoundException {
        return userRepository.findByEmail(eMail);
    }
}
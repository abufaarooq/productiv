package com.productiv.restfulwebservices;

import java.util.Optional;

import org.apache.catalina.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;


@Repository
public interface UserRepository {

    UserDetails findByEmail(String eMail);
    // Optional <User> findByEmail(String eMail);
}
package com.productiv.restfulwebservices.Registration;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/registration")
public class RegistrationController
{

private RegistrationService registrationService;

public String register (@RequestBody RegistrationReq request)
{
    return registrationService.register(req);
}
}
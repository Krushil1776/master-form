package com.example.master_f.Spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.master_f.Modal.Addadminuser;
import com.example.master_f.Repositry.AddadminuserR;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    private final AddadminuserR addadminuserR;

    @Autowired
    public CustomUserDetailsService(AddadminuserR addadminuserR) {
        this.addadminuserR = addadminuserR;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Addadminuser userEntity = addadminuserR.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        return User.builder()
                .username(userEntity.getEmail())
                .password(userEntity.getPassword())
                .roles(userEntity.getRole()) // Assuming getRole() returns a string
                .build();
    }
}

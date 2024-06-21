package com.example.master_f.Spring;


import com.example.master_f.Modal.Addadminuser;
import com.example.master_f.Repositry.AddadminuserR;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AddUserService {

    private final AddadminuserR addadminuserR;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public AddUserService(AddadminuserR addadminuserR, PasswordEncoder passwordEncoder) {
        this.addadminuserR = addadminuserR;
        this.passwordEncoder = passwordEncoder;
    }

    public Addadminuser saveUser(Addadminuser user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return addadminuserR.save(user);
    }
}

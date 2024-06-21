package com.example.master_f.Spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import com.example.master_f.Modal.Addadminuser;
import com.example.master_f.Repositry.AddadminuserR;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.util.Optional;
import java.util.Set;

@Component
public class CustomAuthenticationSuccessHandle implements AuthenticationSuccessHandler {
	
	@Autowired
    private AddadminuserR addadminuserR;


    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        Set<String> roles = AuthorityUtils.authorityListToSet(authentication.getAuthorities());
        String role = roles.contains("ROLE_Admin") ? "admin" : (roles.contains("ROLE_User") ? "user" : "Guest");
        String redirectUrl = roles.contains("ROLE_Admin") ? "/masterf" : (roles.contains("ROLE_User") ? "/fillf" : "/index");
 
        
        
        // Assuming you want to retrieve email from the authentication object
        String email = authentication.getName();

        // Retrieve the user ID using the email
        Optional<Addadminuser> userEntity = addadminuserR.findByEmail(email);
        int userId = userEntity.map(Addadminuser::getId).orElseThrow(() -> new IllegalStateException("User ID not found"));

        // Set userId in session
        HttpSession session = request.getSession();
        session.setAttribute("userId", userId);
    
                     
        
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write("{\"userId\":\"" + userId + "\", \"role\":\"" + role + "\", \"redirectUrl\":\"" + redirectUrl + "\"}");
   

    
    }

}

package com.example.master_f.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.master_f.Modal.Addadminuser;
import com.example.master_f.Modal.Answersubmit;
import com.example.master_f.Modal.Form;
import com.example.master_f.Repositry.AddadminuserR;
import com.example.master_f.Repositry.AnswersubmitR;
import com.example.master_f.Repositry.FormR;

import jakarta.servlet.http.HttpSession;

@Service
public class Completed_formC {

@Autowired
AddadminuserR addadminuserR;

    @Autowired
    FormR formR;
    
    @Autowired
    AnswersubmitR answersubmitR;
    
    

    @Autowired
    private HttpSession httpSession;
    
    
    
    public List<Object> getData() {
    	Integer a=(Integer)httpSession.getAttribute("userId");
    	
    	Addadminuser addadminuser=addadminuserR.findById(a).orElse(null);
    	
   String u=addadminuser.getRole();
   System.out.println(a);
   System.out.println(u);
   if (u.equals("Admin")) {

       return formR.FindDateAndValue();
}else {
    return formR.FindDateAndValuee(a);

}
   
   
    	
    }

	


	

	

}

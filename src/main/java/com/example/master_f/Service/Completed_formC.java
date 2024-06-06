package com.example.master_f.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.master_f.Modal.Answersubmit;
import com.example.master_f.Modal.Form;
import com.example.master_f.Repositry.AnswersubmitR;
import com.example.master_f.Repositry.FormR;

@Service
public class Completed_formC {



    @Autowired
    FormR formR;
    
    @Autowired
    AnswersubmitR answersubmitR;
    
    public List<Object> getData() {
        return formR.FindDateAndValue();
    }

	


	

	

}

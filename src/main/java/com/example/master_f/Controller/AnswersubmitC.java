package com.example.master_f.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.master_f.Modal.Answersubmit;
import com.example.master_f.Service.AnswersubmitS;

@RestController
public class AnswersubmitC {
	
	@Autowired
	AnswersubmitS answersubmitS;
 
	@PostMapping("/Createanswerr")
	@ResponseBody public void saveans(@RequestBody List<Answersubmit> answersubmit) {
     answersubmitS.saveans(answersubmit);
	}


}
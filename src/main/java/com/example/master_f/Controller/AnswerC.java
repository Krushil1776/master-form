package com.example.master_f.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.master_f.Modal.AnswerM;
import com.example.master_f.Service.AnswerS;

@RestController
	
public class AnswerC {

	@Autowired
	AnswerS answerS;
	
	@PostMapping("/addanswer") 
	public void add(@RequestBody AnswerM answerM) {
		answerS.adde(answerM);
	}
	
	 
	@GetMapping("/GetAnswer")
	public List<AnswerM> getallans(){ 
		return answerS.getans();
	}
}

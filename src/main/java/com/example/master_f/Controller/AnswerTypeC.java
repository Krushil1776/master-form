package com.example.master_f.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.master_f.Modal.AnswerType;
import com.example.master_f.Service.AnswerTypeS;

@RestController
public class AnswerTypeC {
	
	@Autowired
	AnswerTypeS answerTypeS;
	
	@GetMapping("/GetOPtion/{qlaball}")
	public List<AnswerType> getop(@PathVariable String qlaball){
		return answerTypeS.getoption(qlaball); 
	}

}

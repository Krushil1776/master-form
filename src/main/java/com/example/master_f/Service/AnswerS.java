package com.example.master_f.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.master_f.Modal.AnswerM;
import com.example.master_f.Repositry.AnswerR;

@Service
public class AnswerS {

	
	@Autowired
	AnswerR answerR;
	
	public void adde(AnswerM answerM) {
answerR.save(answerM);
		
	}

	public List<AnswerM> getans() {
		
		return answerR.findAll();
	}

}

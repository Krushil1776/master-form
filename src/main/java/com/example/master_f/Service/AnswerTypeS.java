package com.example.master_f.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.master_f.Modal.AnswerType;
import com.example.master_f.Repositry.AnswerTypeR;

@Service
public class AnswerTypeS {

	
	@Autowired
	AnswerTypeR answerTypeR;
	
	public List<AnswerType> getoption(String Qlaball) {
		return answerTypeR.findByQlabel(Qlaball);
	}
 
}

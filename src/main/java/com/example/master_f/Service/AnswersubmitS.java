package com.example.master_f.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.master_f.Modal.Answersubmit;
import com.example.master_f.Repositry.AnswersubmitR;

@Service
public class AnswersubmitS {
	
	@Autowired
	AnswersubmitR answersubmitR;

	public void saveans(List<Answersubmit> answersubmit) {
		answersubmitR.saveAll(answersubmit);
	}


	

	
}

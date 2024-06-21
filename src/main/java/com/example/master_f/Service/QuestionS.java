package com.example.master_f.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.master_f.Modal.Question;
import com.example.master_f.Repositry.QuestionR;

@Service
public class QuestionS{

	@Autowired
	QuestionR questionR;

	public List<Question> getqdata(int fromid) {
		return questionR.formid(fromid);
	}

	public void deleteqe(int id) {

		Question question=questionR.findById(id).orElse(null);
		
		question.setRequiree(9);
		
		questionR.save(question);
	}

	public Optional<Question> nameq(int id) {
		
		Question question=questionR.findById(id).orElse(null);
		System.out.println(" cdsfcewcwe s"+question);
		
		return questionR.findById(id);
		
	}

	public void deleteqee(Integer id) {
questionR.deleteByFormid(id);		
	}

	
	
	
 

}

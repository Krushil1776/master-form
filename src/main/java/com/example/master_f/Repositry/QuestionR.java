package com.example.master_f.Repositry;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.master_f.Modal.Question;
import com.fasterxml.jackson.annotation.JacksonInject.Value;

@Repository	
public interface QuestionR extends JpaRepository<Question, Integer> {

	List<Question> formid(int fromid);

	void deleteByFormid(int formid);

	


}

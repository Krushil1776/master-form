package com.example.master_f.Repositry;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.master_f.Modal.Question;
import com.fasterxml.jackson.annotation.JacksonInject.Value;

import jakarta.transaction.Transactional;

@Repository	
public interface QuestionR extends JpaRepository<Question, Integer> {


    @Query(value = "SELECT * FROM form_master.question WHERE formid = :formid AND active != 9", nativeQuery = true)
	List<Question> formid(@Param("formid")int fromid);

	void deleteByFormid(int formid);
	
	
    @Modifying
    @Transactional
    @Query(value = "UPDATE form_master.question SET active = 9 WHERE formid = :id", nativeQuery = true)
    void qdelete(@Param("id") Integer id);

 	


}

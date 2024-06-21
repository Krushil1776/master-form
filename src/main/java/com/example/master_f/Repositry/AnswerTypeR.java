package com.example.master_f.Repositry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.master_f.Modal.AnswerM;
import com.example.master_f.Modal.AnswerType;

import jakarta.transaction.Transactional;
@Repository
public interface AnswerTypeR extends JpaRepository<AnswerType,Integer>{


	/*
	 * List<AnswerType> findByQlabal(String qlabal);
	 */

	@Query(value = "SELECT * FROM form_master.answer_type WHERE Qlabel = :Ql AND active != 9", nativeQuery = true) 
	List<AnswerType> findByQlabel(@Param("Ql") String Qlabel);
	
	  
	  
	void deleteByFormid(int id);




	
	@Modifying
	@Transactional
	@Query("UPDATE AnswerType a SET a.Active = 9 WHERE a.Qlabel = :qlabel")
	void deleteanswer(@Param("qlabel") String questionLabel);




	
}

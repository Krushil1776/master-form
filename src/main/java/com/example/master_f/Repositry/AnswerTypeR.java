package com.example.master_f.Repositry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.master_f.Modal.AnswerM;
import com.example.master_f.Modal.AnswerType;
@Repository
public interface AnswerTypeR extends JpaRepository<AnswerType,Integer>{


	/*
	 * List<AnswerType> findByQlabal(String qlabal);
	 */

	
	  @Query(value = "SELECT * FROM answer_type  where qlabel = :Ql",nativeQuery = true) 
	 List<AnswerType> findByQlabel(@Param("Ql") String Qlabel);

	void deleteByFormid(int id);
	 
	



	
}

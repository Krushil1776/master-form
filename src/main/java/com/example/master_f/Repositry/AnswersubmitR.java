package com.example.master_f.Repositry;

import java.util.List;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.master_f.Modal.Answersubmit;


@Repository
public interface AnswersubmitR extends JpaRepository<Answersubmit, Integer>{
	
	  
    @Query(value = "SELECT f.*, a.* " +
                   "FROM form_master.question f " +
                   "LEFT JOIN ( " +
                   "   SELECT *, ROW_NUMBER() OVER (PARTITION BY questionid ORDER BY id) AS rn " +
                   "   FROM form_master.answersubmit " +
                   "   WHERE submit_by = :submitBy AND formid = :formId " +
                   ") a ON f.id = a.questionid AND a.rn = 1 " +
                   "WHERE f.formid = :formId AND a.active != 9 " +
                   "ORDER BY f.id " +
                   "LIMIT 1000", nativeQuery = true)
    List<Object> findByAnswerAndQuestion(@Param("submitBy") int submitBy, @Param("formId") int formId);


}

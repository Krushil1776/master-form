package com.example.master_f.Repositry;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.master_f.Modal.Form;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
@Repository
public interface FormR extends  JpaRepository<Form, Integer> {
	
	@Query(value = "SELECT f.*, a.* " +
	        "FROM form_master.form f " +
	        "LEFT JOIN ( " +
	        "    SELECT *, ROW_NUMBER() OVER (PARTITION BY formid ORDER BY submitdate) AS rn " +
	        "    FROM form_master.answersubmit " +
	        ") a ON a.formid = f.id AND a.rn = 1 WHERE a.submitdate IS NOT NULL", nativeQuery = true)

List<Object> FindDateAndValue();


	
	@Query(value = "SELECT f.*, a.* "
	        + "FROM form_master.form f "
	        + "LEFT JOIN answersubmit a ON f.id = a.formid "
	        + "WHERE f.id = :id", nativeQuery = true)
	List<Object> findData(@Param("id") Integer id);

 

	
	@Query(value = "SELECT f.* FROM form_master.form f " +
            "LEFT JOIN form_master.answersubmit q ON f.id = q.formid " +
            "WHERE q.formid IS NULL", nativeQuery = true)

	List<Form> findByfill();

	}	
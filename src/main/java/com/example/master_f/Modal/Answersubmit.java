package com.example.master_f.Modal;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Answersubmit {

	
	@GeneratedValue (strategy =GenerationType.IDENTITY)
	@Id
	int id;
	int questionid;
	int formid;
	int active;
	
	int SubmitBy;

	public int getSubmitBy() {
		return SubmitBy;
	}


	public void setSubmitBy(int submitBy) {
		SubmitBy = submitBy;
	}

	String value;
		
    LocalDate submitdate;
	 
    public Answersubmit() {
        this.submitdate = LocalDate.now();
    }


	public LocalDate getSubmitdate() {
		return submitdate;
	}

	public void setSubmitdate(LocalDate submitdate) {
		this.submitdate = submitdate;
	}

	public int getFormid() {
		return formid;
	}

	public void setFormid(int formid) {
		this.formid = formid;
	}

	public int getActive() {
		return active;
	}

	public void setActive(int active) {
		this.active = active;
	}

	

	public int getQuestionid() {
		return questionid;
	}

	public void setQuestionid(int questionid) {
		this.questionid = questionid;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
 

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}
	
}

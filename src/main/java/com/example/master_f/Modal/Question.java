package com.example.master_f.Modal;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Question {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;

	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getqName() {
		return qName;
	}


	public void setqName(String qName) {
		this.qName = qName;
	}

	String questionlabel;
	int answertype;
	int Requiree;
	int formid;
	String qName;
	String Description;
	int createby;
	Date createon;
	int modifieby;
	Date modifieon;
	String ipaddress;

	int Validateq;

	int active;



	public int getActive() {
		return active;
	}


	public void setActive(int active) {
		this.active = active;
	}


	public int getValidateq() {
		return Validateq;
	}


	public void setValidateq(int validateq) {
		Validateq = validateq;
	}


	public String getQuestionlabel() {
		return questionlabel;
	}

	public void setQuestionlabel(String questionlabel) {
		this.questionlabel = questionlabel;
	}

	public int getAnswertype() {
		return answertype;
	}

	public void setAnswertype(int answertype) {
		this.answertype = answertype;
	}

	public int getRequiree() {
		return Requiree;
	}

	public void setRequiree(int requiree) {
		Requiree = requiree;
	}



	public Integer getFormid() {
		return formid;
	}


	public void setFormid(int formid) {
		this.formid = formid;
	}


	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	public int getCreateby() {
		return createby;
	}

	public void setCreateby(int createby) {
		this.createby = createby;
	}

	public Date getCreateon() {
		return createon;
	}

	public void setCreateon(Date createon) {
		this.createon = createon;
	}

	public int getModifieby() {
		return modifieby;
	}

	public void setModifieby(int modifieby) {
		this.modifieby = modifieby;
	}

	public Date getModifieon() {
		return modifieon;
	}

	public void setModifieon(Date modifieon) {
		this.modifieon = modifieon;
	}

	public String getIpaddress() {
		return ipaddress;
	}

	public void setIpaddress(String ipaddress) {
		this.ipaddress = ipaddress;
	}

	/*
	 * public Question(int id, Form formid, String questionlabel, int answertype,
	 * int requiree, String answer, int createby, Date createon, int modifieby, Date
	 * modifieon, String ipaddress) { super(); this.id = id; this.formid = formid;
	 * this.questionlabel = questionlabel; this.answertype = answertype;
	 * this.Requiree = requiree; this.answer = answer; this.createby = createby;
	 * this.createon = createon; this.modifieby = modifieby; this.modifieon =
	 * modifieon; this.ipaddress = ipaddress; }
	 */
	
	public Question() {
		
	}


}

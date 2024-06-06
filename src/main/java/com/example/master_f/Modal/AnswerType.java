package com.example.master_f.Modal;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class AnswerType {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;

 
	int formid;
	
	String Qlabel;
	
	int anstype;

	String ans;
	int Active;
	int createby;
	Date createon;
	int modifieby;
	Date modifieon;
	String ipaddress;
	
	
	
public int getActive() {
		return Active;
	}

	public void setActive(int active) {
		Active = active;
	}

public Integer getId() {
	return id;
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

public void setId(int id) {
	this.id = id;
}


public int getFormid() {
	return formid;
}

public void setFormid(int formid) {
	this.formid = formid;
}

public String getQlabel() {
	return Qlabel;
}
public void setQlabel(String qlabel) {
	Qlabel = qlabel;
}
public int getAnstype() {
	return anstype;
}
public void setAnstype(int anstype) {
	this.anstype = anstype;
}
public String getAns() {
	return ans;
}
public void setAns(String ans) {
	this.ans = ans;
}
public String getIpaddress() {
	return ipaddress;
}
public void setIpaddress(String ipaddress) {
	this.ipaddress = ipaddress;
}

/*
 * public AnswerType(int id, Form formid, String qlabel, int anstype, String
 * ans, int createby, Date createon, int modifieby, Date modifieon, String
 * ipaddress) { super(); this.id = id; this.formid = formid; this.Qlabel =
 * qlabel; this.anstype = anstype; this.ans = ans; this.createby = createby;
 * this.createon = createon; this.modifieby = modifieby; this.modifieon =
 * modifieon; this.ipaddress = ipaddress; }
 */

public  AnswerType() {}

}

package com.example.master_f.Modal;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AnswerM {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	int answertypeid;
	String answertypename;
	
	int active;
int validate;
int createby;
Date createon;
int modifieby;
Date modifieon;
String ipaddress;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public int getAnswertypeid() {
	return answertypeid;
}
public void setAnswertypeid(int answertypeid) {
	this.answertypeid = answertypeid;
}
public String getAnswertypename() {
	return answertypename;
}
public void setAnswertypename(String answertypename) {
	this.answertypename = answertypename;
}
public int getActive() {
	return active;
}
public void setActive(int active) {
	this.active = active;
}
public int getValidate() {
	return validate;
}
public void setValidate(int validate) {
	this.validate = validate;
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
}

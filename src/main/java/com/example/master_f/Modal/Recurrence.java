package com.example.master_f.Modal;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Recurrence {

	@Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)
	int id;
	
	int recurranceid;
String recurrancename;
int active;
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
public int getRecurranceid() {
	return recurranceid;
}
public void setRecurranceid(int recurranceid) {
	this.recurranceid = recurranceid;
}
public String getRecurrancename() {
	return recurrancename;
}
public void setRecurrancename(String recurrancename) {
	this.recurrancename = recurrancename;
}
public int getActive() {
	return active;
}
public void setActive(int active) {
	this.active = active;
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

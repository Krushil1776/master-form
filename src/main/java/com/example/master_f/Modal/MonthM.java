package com.example.master_f.Modal;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class MonthM {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	int monthid;
	
	String monthname;
	
	int active;

	int createby;
	
	Date createon;

public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getMonthid() {
		return monthid;
	}

	public void setMonthid(int monthid) {
		this.monthid = monthid;
	}

	public String getMonthname() {
		return monthname;
	}

	public void setMonthname(String monthname) {
		this.monthname = monthname;
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

int modifieby;

Date modifieon;

String ipaddress;

}

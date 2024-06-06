package com.example.master_f.Modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class SubCharacteristic {

	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int id;
	
	int SubCharacteristicid;
	
	String SubCharacteristicname;
	
	int Characteristicid;
	
	int active;
	
	int Createby;

	String Createon;
	
	int Modifieby;
   String Modifieon;
    String ipaddress;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getSubCharacteristicid() {
		return SubCharacteristicid;
	}
	public void setSubCharacteristicid(int subCharacteristicid) {
		SubCharacteristicid = subCharacteristicid;
	}
	public String getSubCharacteristicname() {
		return SubCharacteristicname;
	}
	public void setSubCharacteristicname(String subCharacteristicname) {
		SubCharacteristicname = subCharacteristicname;
	}
	public int getCharacteristicid() {
		return Characteristicid;
	}
	public void setCharacteristicid(int characteristicid) {
		Characteristicid = characteristicid;
	}
	public int getActive() {
		return active;
	}
	public void setActive(int active) {
		this.active = active;
	}
	public int getCreateby() {
		return Createby;
	}
	public void setCreateby(int createby) {
		Createby = createby;
	}
	public String getCreateon() {
		return Createon;
	}
	public void setCreateon(String createon) {
		Createon = createon;
	}
	public int getModifieby() {
		return Modifieby;
	}
	public void setModifieby(int modifieby) {
		Modifieby = modifieby;
	}
	public String getModifieon() {
		return Modifieon;
	}
	public void setModifieon(String modifieon) {
		Modifieon = modifieon;
	}
	public String getIpaddress() {
		return ipaddress;
	}
	public void setIpaddress(String ipaddress) {
		this.ipaddress = ipaddress;
	}

}

package com.example.master_f.Modal;

import java.sql.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Form {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;

	String title_text;
	String alis_name;
	int formid;
	int moduleid;
	int characteristic;
	int subcharacteristic;
	int recurrence;
	int startmonth;
	int complianceperiod;

	String Effective_Date;
	int active;

	String Text;

	int createby;
	Date createon;
	int modifieby;
	Date modifieon;

	String ipaddress;





	


	public String getTitle_text() {
		return title_text;
	}


	public void setTitle_text(String title_text) {
		this.title_text = title_text;
	}


	public String getAlis_name() {
		return alis_name;
	}


	public void setAlis_name(String alis_name) {
		this.alis_name = alis_name;
	}


	public int getFormid() {
		return formid;
	}


	public void setFormid(int formid) {
		this.formid = formid;
	}


	public int getModuleid() {
		return moduleid;
	}


	public void setModuleid(int moduleid) {
		this.moduleid = moduleid;
	}


	public int getCharacteristic() {
		return characteristic;
	}


	public void setCharacteristic(int characteristic) {
		this.characteristic = characteristic;
	}


	public int getSubcharacteristic() {
		return subcharacteristic;
	}


	public void setSubcharacteristic(int subcharacteristic) {
		this.subcharacteristic = subcharacteristic;
	}


	public int getRecurrence() {
		return recurrence;
	}


	public void setRecurrence(int recurrence) {
		this.recurrence = recurrence;
	}


	public int getStartmonth() {
		return startmonth;
	}


	public void setStartmonth(int startmonth) {
		this.startmonth = startmonth;
	}


	public int getComplianceperiod() {
		return complianceperiod;
	}


	public void setComplianceperiod(int complianceperiod) {
		this.complianceperiod = complianceperiod;
	}


	public String getEffective_Date() {
		return Effective_Date;
	}


	public void setEffective_Date(String effective_Date) {
		Effective_Date = effective_Date;
	}


	public int getActive() {
		return active;
	}


	public void setActive(int active) {
		this.active = active;
	}


	public String getText() {
		return Text;
	}


	public void setText(String text) {
		Text = text;
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


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
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


	
	  public Form(int id, String title_text, String alis_name, int formid, int
	  moduleid, int characteristic, int subcharacteristic, int recurrence, int
	  startmonth, int complianceperiod, String effective_Date, int active, String
	  text, int createby, Date createon, int modifieby, Date modifieon, String
	  ipaddress) { super(); this.id = id; this.title_text = title_text;
	  this.alis_name = alis_name; this.formid = formid; this.moduleid = moduleid;
	  this.characteristic = characteristic; this.subcharacteristic =
	  subcharacteristic; this.recurrence = recurrence; this.startmonth =
	  startmonth; this.complianceperiod = complianceperiod; this.Effective_Date =
	  effective_Date; this.active = active; this.Text = text; this.createby =
	  createby; this.createon = createon; this.modifieby = modifieby;
	  this.modifieon = modifieon; this.ipaddress = ipaddress; }
	 
	public Form() {}

}
package com.example.master_f.Modal;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class ModuleM {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int Moduleid;
	
	String moduleName;
	
	String ModuleShotName;
	
	int Active;
	
	String CreateBy;
	
	Date Createon;
	
	String ModifiBy;
	
	Date Modifion;
	
	String ipaddrees;

	public int getModuleid() {
		return Moduleid;
	}

	public void setModuleid(int moduleid) {
		Moduleid = moduleid;
	}

	public String getModuleName() {
		return moduleName;
	}

	public void setModuleName(String moduleName) {
		this.moduleName = moduleName;
	}

	public String getModuleShotName() {
		return ModuleShotName;
	}

	public void setModuleShotName(String moduleShotName) {
		ModuleShotName = moduleShotName;
	}

	public int getActive() {
		return Active;
	}

	public void setActive(int active) {
		Active = active;
	}

	public String getCreateBy() {
		return CreateBy;
	}

	public void setCreateBy(String createBy) {
		CreateBy = createBy;
	}

	public Date getCreateon() {
		return Createon;
	}

	public void setCreateon(Date createon) {
		Createon = createon;
	}

	public String getModifiBy() {
		return ModifiBy;
	}

	public void setModifiBy(String modifiBy) {
		ModifiBy = modifiBy;
	}

	public Date getModifion() {
		return Modifion;
	}

	public void setModifion(Date modifion) {
		Modifion = modifion;
	}

	public String getIpaddrees() {
		return ipaddrees;
	}

	public void setIpaddrees(String ipaddrees) {
		this.ipaddrees = ipaddrees;
	}


}

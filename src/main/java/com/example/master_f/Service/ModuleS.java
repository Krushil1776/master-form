package com.example.master_f.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.master_f.Modal.ModuleM;
import com.example.master_f.Repositry.ModuleR;

@Service
public class ModuleS {

	@Autowired
	ModuleR moduleR;
	
	public void createsave(ModuleM mm) {
		
		moduleR.save(mm);
	}

	public List<ModuleM> getA() {
return moduleR.findAll();
	}

}

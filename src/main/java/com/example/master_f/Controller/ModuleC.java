package com.example.master_f.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.master_f.Modal.ModuleM;
import com.example.master_f.Service.ModuleS;

@RestController
public class ModuleC {
	
	@Autowired
	ModuleS moduleS;

	@PostMapping("/CModule")
	public void create(@RequestBody ModuleM mm) {
		moduleS.createsave(mm);
	}
	
	@GetMapping("/ModuleGetAll")
	public List<ModuleM> getAll() {
		return moduleS.getA();
	}
}

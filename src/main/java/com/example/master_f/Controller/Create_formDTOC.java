package com.example.master_f.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.master_f.Modal.Create_FormDTO;
import com.example.master_f.Service.Create_FormDTOS;

@RestController
public class Create_formDTOC {
	
	@Autowired
	Create_FormDTOS create_FormDTOS;

	@PostMapping("/CreateForm/{id}")
	public ResponseEntity<String> saveeDto(@PathVariable int id ,@RequestBody Create_FormDTO create){

return  create_FormDTOS.saveDTO(id,create);
		
	}
	
}

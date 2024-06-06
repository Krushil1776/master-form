package com.example.master_f.DTO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.master_f.Service.Completed_formC;

@RestController
public class Completed_form {

	@Autowired
	Completed_formC completed_formC;
	
	
	@GetMapping("/qwet")
	@ResponseBody  public List<Object> getdata(){
	return completed_formC.getData();
	}
	
}

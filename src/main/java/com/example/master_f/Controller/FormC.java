package com.example.master_f.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.master_f.Modal.Form;
import com.example.master_f.Service.FormS;

@RestController
public class FormC {

	@Autowired
	FormS  forms;
	
	@GetMapping("/Get3data")
	public List<Form> get() {
		return  forms.getdata();
		
	}
	
	@GetMapping("/Get1data/{id}")
	public Optional<Form> getone(@PathVariable int id) {
		return forms.getone(id);
	}
	
	
	@PutMapping("/Deletee/{id}")
	public Form delete(@PathVariable int id) {
		return forms.deteleform(id);
	}
	 
	
	@GetMapping("/Getandquestion/{id}")
	public Object GetansQuestion(@PathVariable Integer id) {
		return forms.geta(id);	}
	
	

	
	  @GetMapping ("/fillformdata") public List<Form> fillForm(){ return
	  forms.getfill(); }
	 

}
 
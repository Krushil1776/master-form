package com.example.master_f.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.master_f.Modal.MonthM;
import com.example.master_f.Service.MonthS;

@RestController
public class MonthC {
	@Autowired
	MonthS monthS;

	@PostMapping("/CreateMonth")
public void addmonth(@RequestBody MonthM m) {
		monthS.create(m);
	}
	
	@GetMapping("/GetAllMonth")
	public List<MonthM> getmonth(){
		return monthS.getAllMonth();
	}

	
	
}

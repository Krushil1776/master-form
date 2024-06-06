package com.example.master_f.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.master_f.Modal.Recurrence;
import com.example.master_f.Service.RecurranceS;

@RestController
public class RecurranceC {
@Autowired
RecurranceS recurranceS;
	
	@PostMapping ("/create")
	public void create(@RequestBody Recurrence recurrence) {
		recurranceS.savee(recurrence);
	}
	
	
	@GetMapping("/GetAllRecurrance")
	public List<Recurrence> getall(){
		return recurranceS.get();
	}
	
	
}

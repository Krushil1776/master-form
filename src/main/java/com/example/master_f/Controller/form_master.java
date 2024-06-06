package com.example.master_f.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class form_master{
	
	@GetMapping("/masterf")
public String view() {
		return "master_form";
	}
	
	@GetMapping("/index")
	public String index() {
		return "index";
	}
	
	
	@GetMapping("/fillf")
	public String fill() {
		return "fill_forms";
	}
	
	
	@GetMapping("/Completedf")
	public String comp() {
		return "completed_forms";
	}
	
	
	@GetMapping("/masterU")
	public String ms() {
		return "master_users";
	}
	
	@GetMapping("/profile")
	public String profile() {
		return "profile";
	}
		
}
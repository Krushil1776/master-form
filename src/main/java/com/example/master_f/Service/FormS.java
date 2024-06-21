package com.example.master_f.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.master_f.Modal.Form;
import com.example.master_f.Repositry.FormR;

import jakarta.servlet.http.HttpSession;

@Service
public class FormS{
	@Autowired
    private HttpSession httpSession;

	@Autowired
	FormR formR;

	public List<Form> getdata() {
		return formR.findAll();
	}

	public Optional<Form> getone(int id) {
	return formR.findById(id);
	}

	public Form deteleform(int id) {
	Form form=formR.findById(id).orElse(null);
	form.setActive(9);
	return formR.save(form);
	 
	}

	public Object geta(Integer id) {
				return formR.findData(id);
	}

	public List<Form> getfill() {
		Integer id=(Integer)httpSession.getAttribute("userId");
		System.out.println(id);
		return formR.findByfill(id);
	
		
	}


	
	
} 

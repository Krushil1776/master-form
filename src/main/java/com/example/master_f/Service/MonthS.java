package com.example.master_f.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.master_f.Modal.MonthM;
import com.example.master_f.Repositry.MonthR;

@Service
public class MonthS {

	@Autowired 
	MonthR monthR;
	
	public void create(MonthM m) {
		// TODO Auto-generated method stub
		monthR.save(m);
	}

	public List<MonthM> getAllMonth() {

		return monthR.findAll();
	}

	
	
}

package com.example.master_f.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.master_f.Modal.Recurrence;
import com.example.master_f.Repositry.RecurranceR;

@Service
public class RecurranceS {

	@Autowired
	RecurranceR recurranceR;

	public void savee(Recurrence recurrence) {
		// TODO Auto-generated method stub
	recurranceR.save(recurrence);
	}

	public List<Recurrence> get() {
		return recurranceR.findAll();
	}



}

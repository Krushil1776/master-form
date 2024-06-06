package com.example.master_f.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.master_f.Modal.Characteristic;
import com.example.master_f.Repositry.CharacteristRepo;

@Service
public class CharacteristicS {
	
	@Autowired 
	CharacteristRepo characteristRepo;

	public void savee(Characteristic cc) {

	characteristRepo.save(cc);
	}

	

	public List<Characteristic> getC() {
		// TODO Auto-generated method stub
	return	characteristRepo.findAll();
	}
	
	

}

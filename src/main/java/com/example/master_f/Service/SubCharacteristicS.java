package com.example.master_f.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.master_f.Modal.SubCharacteristic;
import com.example.master_f.Repositry.SubCharacteristicR;
@Service
public class SubCharacteristicS {

	@Autowired
	SubCharacteristicR rr;

	public void saveSub(SubCharacteristic s) {
		// TODO Auto-generated method stub
rr.save(s);	}

	public List<SubCharacteristic> get() {
  return rr.findAll();		
	}

	
	


	

}

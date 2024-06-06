package com.example.master_f.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.master_f.Modal.SubCharacteristic;
import com.example.master_f.Service.SubCharacteristicS;

@RestController
public class SubCharacteristicC {
	
	@Autowired
	SubCharacteristicS characteristicS;
	
	@PostMapping("/CraeteSub")
	private void name(@RequestBody SubCharacteristic ss) {
characteristicS.saveSub(ss);		
	}

	@GetMapping("/GetAllSubChara")
	public List<SubCharacteristic> all(){
		return 	characteristicS.get();
		
	}
}

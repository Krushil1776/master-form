package com.example.master_f.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.master_f.Modal.Characteristic;
import com.example.master_f.Service.CharacteristicS;

@RestController
public class CharacteristicC {

	@Autowired
	CharacteristicS characteristicS;
	
	@PostMapping("/AllCharacteristic")
	public void add(@RequestBody Characteristic cc) {
		
		characteristicS.savee(cc);
	
	}
	
	@GetMapping("/CharactericGetAll")
	public List<Characteristic> GetC(){
		return 	characteristicS.getC();
		
	}
	}

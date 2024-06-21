package com.example.master_f.Controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.master_f.DTO.Saveadminuser;
import com.example.master_f.Modal.Addadminuser;
import com.example.master_f.Service.AddadminuserS;
import com.example.master_f.Service.ExcelHelper;

@RestController
public class AddadminuserC {

	@Autowired
	AddadminuserS addadminuserS;


    @PutMapping("/Cauu/{id}")
	public ResponseEntity<String> saveuser(@PathVariable int id, @RequestParam("data") String a,
			@RequestParam(value = "file", required = false) MultipartFile file) throws IOException {
		String result;
 
		if (file != null && !file.isEmpty()) {
			result = addadminuserS.Update(id, a, file);
			return new ResponseEntity<>(result, HttpStatus.OK); 
		} else {
			result = addadminuserS.UpdateWithoutImage(id, a);
			return new ResponseEntity<>(result, HttpStatus.OK);
		}
	}
 
	@GetMapping("/Getau")
	public List<Addadminuser> getcu() {
		return addadminuserS.getdataau();
	}

	@GetMapping("/Get1au/{id}")
	public Optional<Addadminuser> get1data(@PathVariable int id) {
		return addadminuserS.getau(id);
	}

	@PutMapping("/Delete/{id}")
	public void Delete(@PathVariable int id) {
		addadminuserS.delete(id);
	}

	@GetMapping("/Showau")
	public List<Addadminuser> searchUsers(@RequestParam String fname, @RequestParam String email,
			@RequestParam String contactno, @RequestParam String role) {
		return addadminuserS.searchUsers(fname, email, contactno, role);
	}

	  @PostMapping("/upload")
	    public @ResponseBody String uploadFile(@RequestParam("file") MultipartFile file) {
	        if (file.isEmpty()) {
	           return"Please select a file to upload.";
	        }
	      return     addadminuserS.savve(file);
	          
	    }
}


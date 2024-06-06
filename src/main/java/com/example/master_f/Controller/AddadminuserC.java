package com.example.master_f.Controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.master_f.DTO.Saveadminuser;
import com.example.master_f.Modal.Addadminuser;
import com.example.master_f.Service.AddadminuserS;

@RestController
public class AddadminuserC {

	@Autowired
	AddadminuserS addadminuserS;
	
	
	/*
	 * @PutMapping("/Cau/{id}") public void saveuser(@PathVariable int
	 * id,@RequestBody Addadminuser addadminuser ) { addadminuserS.saveuser(id,
	 * addadminuser);
	 * 
	 * 
	 * }
	 */
	
	@PutMapping("/Cauu/{id}")
	public void saveuser(@PathVariable int id,@RequestParam("data") String a ,@RequestParam (value="file",required = false)MultipartFile file) throws IOException{
	
        if (file != null && !file.isEmpty()) {
        	System.out.println("A");
            // If a new image is provided, update product data including the new image
    		addadminuserS.Update(id, a, file);
        } else {
        	System.out.println("B");

            // If no new image is provided, update product data without changing the image
    		addadminuserS.UpdateWithoutImage(id, a);
        }
	
	 
		  
	} 	
	
	
	
	@GetMapping("/Getau")
	public List<Addadminuser> getcu(){
		return addadminuserS.getdataau();
	}
	
	
	@GetMapping("/Get1au/{id}")
	public Optional<Addadminuser> get1data(@PathVariable int id ) {
		return addadminuserS.getau(id);
	}
	
	
	@PutMapping("/Delete/{id}")
	public void Delete(@PathVariable int id) {
		addadminuserS.delete(id);
	}
	  
	@GetMapping("/Showau")
	    	    public List<Addadminuser> searchUsers(     
	        @RequestParam String fname,
	        @RequestParam String email,
	        @RequestParam String contactno,
	        @RequestParam String role
	    ) {
	        return addadminuserS.searchUsers(fname, email, contactno, role);
	    }

	
	
}
	

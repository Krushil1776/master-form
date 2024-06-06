package com.example.master_f.Service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;

import com.example.master_f.Modal.Addadminuser;
import com.example.master_f.Repositry.AddadminuserR;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.mail.internet.MimeMessage;

@Service
public class AddadminuserS {
	
	@Autowired
	AddadminuserR addadminuserR;
	
    @Autowired
    private JavaMailSender javaMailSender;
    public void saveuser(int id, Addadminuser addadminuser) {
        try {
            Addadminuser existingUser = addadminuserR.findById(id).orElse(null);

            if (existingUser == null) {
                existingUser = new Addadminuser();
            }

            // Set user data
            existingUser.setFname(addadminuser.getFname());
            existingUser.setLname(addadminuser.getLname());
            existingUser.setEmail(addadminuser.getEmail());
            existingUser.setContactno(addadminuser.getContactno());
            existingUser.setGender(addadminuser.getGender());
            existingUser.setValideform(addadminuser.getValideform());
            existingUser.setValideto(addadminuser.getValideto());
            existingUser.setPassword(addadminuser.getPassword());
existingUser.setActive(addadminuser.getActive());


            addadminuserR.save(existingUser);

                sendmail(existingUser);
      

            System.out.println("User saved or updated successfully!");
        } catch (Exception e) {
            e.printStackTrace(); 
        }
    }


    private void sendmail(Addadminuser addadminuser) {
        try {
            // Create a MimeMessage
            MimeMessage message = javaMailSender.createMimeMessage();

            // Create a MimeMessageHelper for composing the email
            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            // Set the recipient, subject, and text of the email
            helper.setTo(addadminuser.getEmail());
            helper.setSubject("Welcome to Masterform - Userid and Password");
            helper.setText("Dear FormMaster User,\n\nYour Username: " + addadminuser.getEmail() + "\nPassword: " + addadminuser.getPassword() + "\n\nWelcome to Master Form.");

            // Send the email
            javaMailSender.send(message);

            System.out.println("Welcome email sent successfully!");
        } catch (Exception e) {
            e.printStackTrace(); // Print the stack trace for debugging
        }
    }


	public List<Addadminuser> getdataau() {
		
		return addadminuserR.findAll();
	}


	public Optional<Addadminuser> getau(int id) {
return addadminuserR.findById(id);
	}


	public void delete(int id) {
		Addadminuser a=addadminuserR.findById(id).orElse(null);
		a.setActive(9);
		addadminuserR.save(a);
	}
	
	
	   private String saveImg(MultipartFile file) throws IOException {

	        // get the file name
	        String fileName = file.getOriginalFilename();

	        // Define upload folder path
	        Path uploadPath = Paths.get("E:\\E_5\\master_f\\master_f\\src\\main\\resources\\static\\image");

	        // Create upload folder if it doesn't exist
	        if (!Files.exists(uploadPath)) {
	            try {
	                Files.createDirectories(uploadPath);
	            } catch (IOException e) {
	                e.printStackTrace();
	            }
	        }

	        try (InputStream inputStream = file.getInputStream()) {
	            // Resolve the file path
	            Path filePath = uploadPath.resolve(fileName);

	            // Copy the file to the upload folder
	            Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
	        } catch (IOException ioe) {
	            throw new IOException("Could not save file:  " + fileName, ioe);
	        }
	        return fileName;
	    }


	public void Update(int id, String addadminuserr, MultipartFile file) {
        try {
            Addadminuser existingUser = addadminuserR.findById(id).orElse(null);
            ObjectMapper objectMapper = new ObjectMapper();

            Addadminuser addadminuser=objectMapper.readValue(addadminuserr, Addadminuser.class);
            
            if (existingUser == null) {
                existingUser = new Addadminuser();
            }

            // Set user data
            existingUser.setFname(addadminuser.getFname());
            existingUser.setLname(addadminuser.getLname());
            existingUser.setEmail(addadminuser.getEmail());
            existingUser.setContactno(addadminuser.getContactno());
            existingUser.setGender(addadminuser.getGender());
            existingUser.setValideform(addadminuser.getValideform());
            existingUser.setValideto(addadminuser.getValideto());
            existingUser.setPassword(addadminuser.getPassword());
            existingUser.setRole(addadminuser.getRole());
existingUser.setActive(addadminuser.getActive());
existingUser.setImage(saveImg(file));


            addadminuserR.save(existingUser);

                sendmail(existingUser);
      

            System.out.println("User saved or updated successfully!");
        } catch (Exception e) {
            e.printStackTrace(); 
        }

	}


	public void UpdateWithoutImage(int id, String addadminuserr) {
		  try {
	            Addadminuser existingUser = addadminuserR.findById(id).orElse(null);
	            ObjectMapper objectMapper = new ObjectMapper();

	            Addadminuser addadminuser=objectMapper.readValue(addadminuserr, Addadminuser.class);
	            
	            if (existingUser == null) {
	                existingUser = new Addadminuser();
	            }

	            // Set user data
	            existingUser.setFname(addadminuser.getFname());
	            existingUser.setLname(addadminuser.getLname());
	            existingUser.setEmail(addadminuser.getEmail());
	            existingUser.setContactno(addadminuser.getContactno());
	            existingUser.setGender(addadminuser.getGender());
	            existingUser.setValideform(addadminuser.getValideform());
	            existingUser.setValideto(addadminuser.getValideto());
	            existingUser.setPassword(addadminuser.getPassword());
	existingUser.setActive(addadminuser.getActive());
    existingUser.setRole(addadminuser.getRole());
    existingUser.setImage("");

 


	            addadminuserR.save(existingUser);

	                sendmail(existingUser);
	      

	            System.out.println("User saved or updated successfully!");
	        } catch (Exception e) {
	            e.printStackTrace(); 
	        }
		
	}


	public List<Addadminuser> searchUsers(String fname, String email, String contactno, String role) {
	return addadminuserR.findBynameemailcontactrole( fname,  email,  contactno,  role);
	}


	


}

package com.example.master_f.Service;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.security.SecureRandom;
import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.apache.xmlbeans.impl.xb.xsdschema.Public;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.master_f.Modal.Addadminuser;
import com.example.master_f.Repositry.AddadminuserR;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpSession;

@Service
public class AddadminuserS {

	@Autowired
	private ExcelHelper excelHelper;

	@Autowired
	AddadminuserR addadminuserR;

	@Autowired
	private JavaMailSender javaMailSender;

	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	private HttpSession httpSession;

	String password = generateAndSaveRandomPassword();

	/*
	 * private final PasswordEncoder passwordEncoder;
	 * 
	 * 
	 * @Autowired public AddadminuserS(PasswordEncoder passwordEncoder) {
	 * this.passwordEncoder = passwordEncoder; }
	 */

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

			System.out.println("User saved or updated successfully!");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	private void sendmail(String password, String email) {
		try {
			System.out.println(email + "  s" + password);

			// Create a MimeMessage
			MimeMessage message = javaMailSender.createMimeMessage();

			// Create a MimeMessageHelper for composing the email
			MimeMessageHelper helper = new MimeMessageHelper(message, true);

			// Set the recipient, subject, and text of the email
			helper.setTo(email);
			helper.setSubject("Welcome to Masterform - Userid and Password");
			helper.setText("Dear FormMaster User,\n\nYour Username: " + email + "\nPassword: " + password
					+ "\n\nWelcome to Master Form.");

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
		Addadminuser a = addadminuserR.findById(id).orElse(null);
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

	public String Update(int id, String addadminuserr, MultipartFile file) {
		try {
			System.out.println("AAAA");
			ObjectMapper objectMapper = new ObjectMapper();
			Addadminuser addadminuser = objectMapper.readValue(addadminuserr, Addadminuser.class);

			// Check if the email already exists for another user
			Addadminuser existingUserWithEmail = addadminuserR.findByEmailllll(addadminuser.getEmail());
			if (existingUserWithEmail != null && existingUserWithEmail.getId() != id) {
				return "Email address is already in use.";

			}

			// Fetch the existing user by id
			Addadminuser existingUser = addadminuserR.findById(id).orElse(null);

			boolean isNewUser = (existingUser == null);
			if (isNewUser) {
				existingUser = new Addadminuser();
				existingUser.setCreateby((Integer) httpSession.getAttribute("userId"));
				existingUser.setCreateon(LocalDateTime.now());
				sendmail(password, addadminuser.getEmail());

			} else {
				existingUser.setModifieby((Integer) httpSession.getAttribute("userId"));
				existingUser.setModifieon(LocalDateTime.now());
			}

			// Set user data
			existingUser.setFname(addadminuser.getFname());
			existingUser.setLname(addadminuser.getLname());
			existingUser.setEmail(addadminuser.getEmail());
			existingUser.setContactno(addadminuser.getContactno());
			existingUser.setGender(addadminuser.getGender());
			existingUser.setValideform(addadminuser.getValideform());
			existingUser.setValideto(addadminuser.getValideto());
			String a = addadminuser.getPassword();
			existingUser.setPassword(bCryptPasswordEncoder.encode(password));
			existingUser.setRole(addadminuser.getRole());
			existingUser.setActive(addadminuser.getActive());
			existingUser.setImage(saveImg(file));
			existingUser.setCreateby((Integer) httpSession.getAttribute("userId"));
			existingUser.setCreateon(LocalDateTime.now());

			// Save or update the user
			System.out.println(existingUser);
			addadminuserR.save(existingUser);

			return "OK";
		} catch (Exception e) {
			e.printStackTrace();
			return "An error occurred while updating the user.";
		}
	}

	public String UpdateWithoutImage(int id, String addadminuserr) {
		try {
			System.out.println("BBBBB");
			Addadminuser existingUser = addadminuserR.findById(id).orElse(null);
			ObjectMapper objectMapper = new ObjectMapper();

			Addadminuser addadminuser = objectMapper.readValue(addadminuserr, Addadminuser.class);

			Addadminuser existingUserWithEmail = addadminuserR.findByEmailllll(addadminuser.getEmail());
			if (existingUserWithEmail != null && existingUserWithEmail.getId() != id) {
				return "Email address is already in use.";

			}

			boolean isNewUser = (existingUser == null);

			if (isNewUser) {
				existingUser = new Addadminuser();
				existingUser.setCreateby((Integer) httpSession.getAttribute("userId"));
				existingUser.setCreateon(LocalDateTime.now());
				sendmail(password, addadminuser.getEmail());

			} else {
				existingUser.setModifieby((Integer) httpSession.getAttribute("userId"));
				existingUser.setModifieon(LocalDateTime.now());
			}

			// Set user data
			existingUser.setFname(addadminuser.getFname());
			existingUser.setLname(addadminuser.getLname());
			existingUser.setEmail(addadminuser.getEmail());
			existingUser.setContactno(addadminuser.getContactno());
			existingUser.setGender(addadminuser.getGender());
			existingUser.setValideform(addadminuser.getValideform());
			existingUser.setValideto(addadminuser.getValideto());
			existingUser.setPassword(bCryptPasswordEncoder.encode(password));
			existingUser.setActive(addadminuser.getActive());
			existingUser.setRole(addadminuser.getRole());
//existingUser.setImage(addadminuser.getImage());
			System.out.println(httpSession.getAttribute("userId"));

			/*
			 * existingUser.setModifieby("");
			 * existingUser.setModifieon(addadminuser.getModifieon());
			 */
			addadminuserR.save(existingUser);
			if (isNewUser) {
			}

			return "OK";
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "";
	}

	public List<Addadminuser> searchUsers(String fname, String email, String contactno, String role) {
		return addadminuserR.findBynameemailcontactrole(fname, email, contactno, role);
	}

	public String generateAndSaveRandomPassword() {
		String randomPassword;
		return randomPassword = generateRandomPassword(10); // Generate a password of length 10

	}

	// Helper method to generate a random password
	private String generateRandomPassword(int length) {
		final String CHAR_LOWER = "abcdefghijklmnopqrstuvwxyz";
		final String CHAR_UPPER = CHAR_LOWER.toUpperCase();
		final String DIGIT = "0123456789";
		final String SPECIAL_CHAR = "@#";

		final String PASSWORD_ALLOW_BASE = CHAR_LOWER + CHAR_UPPER + DIGIT + SPECIAL_CHAR;
		SecureRandom random = new SecureRandom();
		StringBuilder password = new StringBuilder(length);

		for (int i = 0; i < length; i++) {
			int index = random.nextInt(PASSWORD_ALLOW_BASE.length());
			password.append(PASSWORD_ALLOW_BASE.charAt(index));
		}

		return password.toString();
	}

	public String savve(MultipartFile file) {
		try {
			List<Addadminuser> tutorials = excelHelper.excelToTutorials(file.getInputStream());

			if (tutorials.isEmpty()) {
				return "The Excel sheet is empty or no valid data found.";
			}
			Set<String> emailSet = new HashSet<>();
			for (Addadminuser tutorial : tutorials) {
				if (!emailSet.add(tutorial.getEmail())) {
					return "Duplicate email found in the Excel sheet: " + tutorial.getEmail();
				}
			}

			// Validate and filter the tutorials list
			List<Addadminuser> validTutorials = new ArrayList<>();
			for (Addadminuser tutorial : tutorials) {
				String validationResult = isValidTutorial(tutorial);
				if ("ok".equals(validationResult)) {

					sendmail(password, tutorial.getEmail());
					tutorial.setPassword(bCryptPasswordEncoder.encode(password));

					validTutorials.add(tutorial);

				} else {
					return validationResult; // Return the specific validation error
				}
			}

			if (validTutorials.isEmpty()) {
				return "No valid data found in the Excel sheet.";
			}

			addadminuserR.saveAll(validTutorials);
			return "ok";
		} catch (IOException e) {
			throw new RuntimeException("Failed to store excel data: " + e.getMessage());
		}
	}

	private String isValidTutorial(Addadminuser tutorial) {
	    // Check if the required fields are not null or empty
	    if (tutorial.getFname() == null || tutorial.getFname().isEmpty()) {
	        return "The Excel sheet has empty fields: fname";
	    }

	    if (tutorial.getLname() == null || tutorial.getLname().isEmpty()) {
	        return "The Excel sheet has empty fields: lname";
	    }

	    if (tutorial.getEmail() == null || tutorial.getEmail().isEmpty()) {
	        return "The Excel sheet has empty fields: email";
	    }

	    // Email regex pattern
	    String EMAIL_REGEX = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";

	    if (!tutorial.getEmail().matches(EMAIL_REGEX)) {
	        return "Please enter a valid emaill: " + tutorial.getEmail();
	    }
 
	    if (tutorial.getGender() == null || tutorial.getGender().isEmpty()) {
	        return "The Excel sheet has empty fields: gender";
	    } 

	    if (tutorial.getRole() == null || tutorial.getRole().isEmpty()) {
	        return "The Excel sheet has empty fields: role";
	    }

	    // Check if the role is valid
	    if (!"User".equals(tutorial.getRole()) && !"Admin".equals(tutorial.getRole())) {
	        return "Invalid role. Accepted values are 'User' or 'Admin'.";
	    }

	    // Check if the email is unique
	    if (addadminuserR.existsByEmail(tutorial.getEmail())) {
	        return "Duplicate email found: " + tutorial.getEmail();
	    }

	    return "ok";
	}
}

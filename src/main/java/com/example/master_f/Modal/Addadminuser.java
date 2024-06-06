package com.example.master_f.Modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.security.SecureRandom;
import java.sql.Date;

@Entity
public class Addadminuser {

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    int id;

    String fname;
    String lname;
    String email;
    String contactno;
    String gender;
    String valideform;
    String valideto;
    String role; 
    String image; // Changed to lowercase 'i' to follow Java naming conventions
    String password;
     
    		
    public int getActive() {
		return active;
	}

	public void setActive(int active) {
		this.active = active;
	}

	int active;

int createby;
Date createon;
int modifieby;
Date modifieon;
String ipaddress;


    // Getter and Setter methods...

    public int getCreateby() {
	return createby;
}

public void setCreateby(int createby) {
	this.createby = createby;
}

public Date getCreateon() {
	return createon;
}

public void setCreateon(Date createon) {
	this.createon = createon;
}

public int getModifieby() {
	return modifieby;
}

public void setModifieby(int modifieby) {
	this.modifieby = modifieby;
}

public Date getModifieon() {
	return modifieon;
}

public void setModifieon(Date modifieon) {
	this.modifieon = modifieon;
}

public String getIpaddress() {
	return ipaddress;
}

public void setIpaddress(String ipaddress) {
	this.ipaddress = ipaddress;
}

	public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = generateRandomPassword(10);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContactno() {
        return contactno;
    }

    public void setContactno(String contactno) {
        this.contactno = contactno;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getValideform() {
        return valideform;
    }

    public void setValideform(String valideform) {
        this.valideform = valideform;
    }

    public String getValideto() {
        return valideto;
    }

    public void setValideto(String valideto) {
        this.valideto = valideto;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    // Method to generate a random password and save it
    public void generateAndSaveRandomPassword() {
        String randomPassword = generateRandomPassword(10); // Generate a password of length 10
        setPassword(randomPassword);
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

}

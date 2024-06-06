package com.example.master_f.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.master_f.Modal.Addadminuser;

import java.util.List;
import java.util.Optional;

public interface AddadminuserR extends JpaRepository<Addadminuser, Integer> {

    @Query(value = "SELECT * FROM addadminuser WHERE (fname = :fname OR email = :email OR contactno = :contactno) AND role = :role", nativeQuery = true)
    List<Addadminuser> findBynameemailcontactrole(String fname, String email, String contactno, String role);

    
	Addadminuser findByemail(String email);


	Optional<Addadminuser> findByEmail(String email);

     
       
    
    
}

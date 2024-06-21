package com.example.master_f.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.master_f.Modal.Addadminuser;

import java.util.List;
import java.util.Optional;

public interface AddadminuserR extends JpaRepository<Addadminuser, Integer> {

	   @Query(value = "SELECT * FROM addadminuser WHERE (LOWER(fname) LIKE LOWER(CONCAT('%', :fname, '%')) OR LOWER(email) LIKE LOWER(CONCAT('%', :email, '%'))OR LOWER(contactno) LIKE LOWER(CONCAT('%', :contactno, '%')) ) OR role = :role", nativeQuery = true)
	    List<Addadminuser> findBynameemailcontactrole(@Param("fname") String fname, @Param("email") String email, @Param("contactno") String contactno, @Param("role") String role);

    
	Addadminuser findByemail(String email);

	
	Optional<Addadminuser> findByEmail(String email);


	@Query(value = "SELECT * FROM form_master.addadminuser WHERE email = :em AND active!=9", nativeQuery = true)
	Addadminuser findByEmailllll(@Param("em") String email);


	
	
	boolean existsByEmail(String email);


     
    
    
}

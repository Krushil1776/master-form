package com.example.master_f.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.master_f.Modal.ModuleM;

@Repository
public interface ModuleR extends JpaRepository<ModuleM, Integer>{

}

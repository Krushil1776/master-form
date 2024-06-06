package com.example.master_f.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.master_f.Modal.Characteristic;
@Repository
public interface CharacteristRepo extends JpaRepository<Characteristic, Integer> {

}

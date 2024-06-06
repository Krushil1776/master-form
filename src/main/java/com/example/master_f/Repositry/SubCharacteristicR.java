package com.example.master_f.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.master_f.Modal.SubCharacteristic;
@Repository
public interface SubCharacteristicR extends JpaRepository<SubCharacteristic,Integer>{

}

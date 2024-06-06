package com.example.master_f.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.master_f.Modal.Answersubmit;

@Repository
public interface AnswersubmitR extends JpaRepository<Answersubmit, Integer>{

}

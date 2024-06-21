package com.example.master_f.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.master_f.Modal.Question;
import com.example.master_f.Service.QuestionS;

@RestController
public class QuestionC {

	@Autowired
	QuestionS questionS;

	@GetMapping("/GetQuestion/{fromid}")
	public List<Question> getq(@PathVariable int fromid) {
		return questionS.getqdata(fromid);
	}
	 
@PutMapping("/deleteq/{id}")
public void deleteq(@PathVariable int id) {
	questionS.deleteqe(id);
}

@GetMapping("/GetqidToname/{id}")
public Optional<Question> getNameQuestion(@PathVariable int id ) {
	return questionS.nameq(id);
}

@GetMapping("/Deletehard/{formid}")
	public void delete(@PathVariable Integer formid) {
	questionS.deleteqee(formid);
}

 
/*
 * @GetMapping("/Getquestionsubmitby/{id}") public Question q(@PathVariable int
 * id) { System.out.println(id); return questionS.getquestionsubmittime(id); }
 */
}

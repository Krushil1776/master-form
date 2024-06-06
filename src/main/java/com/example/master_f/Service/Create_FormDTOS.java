package com.example.master_f.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.master_f.Modal.AnswerType;
import com.example.master_f.Modal.Create_FormDTO;
import com.example.master_f.Modal.Form;
import com.example.master_f.Modal.Question;
import com.example.master_f.Repositry.AnswerTypeR;
import com.example.master_f.Repositry.FormR;
import com.example.master_f.Repositry.QuestionR;

@Service
public class Create_FormDTOS {

	@Autowired
	AnswerTypeR answerTypeR;

	@Autowired
	FormR formR;

	@Autowired
	QuestionR questionR;
	/*
	 * public ResponseEntity<String> saveDTO(Create_FormDTO createDTO) { Form forms
	 * = createDTO.getForms();
	 * 
	 * if (forms == null) { return
	 * ResponseEntity.badRequest().body("Form data is missing"); }
	 * 
	 * Form form = new Form(); form.setTitle_text(forms.getTitle_text());
	 * form.setAlis_name(forms.getAlis_name());
	 * form.setModuleid(forms.getModuleid());
	 * form.setCharacteristic(forms.getCharacteristic());
	 * form.setSubcharacteristic(forms.getSubcharacteristic());
	 * form.setRecurrence(forms.getRecurrence());
	 * form.setStartmonth(forms.getStartmonth());
	 * form.setComplianceperiod(forms.getComplianceperiod());
	 * form.setEffective_Date(forms.getEffective_Date());
	 * form.setActive(forms.getActive()); form.setText(forms.getText());
	 * form.setCreateby(forms.getCreateby()); form.setCreateon(forms.getCreateon());
	 * form.setModifieby(forms.getModifieby());
	 * form.setModifieon(forms.getModifieon());
	 * form.setIpaddress(forms.getIpaddress());
	 * 
	 * formR.save(form);
	 * 
	 * List<Question> questionDTOs = createDTO.getQuestion(); if (questionDTOs !=
	 * null && !questionDTOs.isEmpty()) { List<Question> questions =
	 * questionDTOs.stream().map(questionDTO -> { Question question = new
	 * Question(); question.setValidate(questionDTO.getValidate());
	 * 
	 * 
	 * question.setqName(questionDTO.getqName());
	 * question.setValidateq(questionDTO.getValidateq());
	 * question.setQuestionlabel(questionDTO.getQuestionlabel());
	 * question.setAnswertype(questionDTO.getAnswertype());
	 * question.setRequiree(questionDTO.getRequiree());
	 * question.setFormid(questionDTO.getFormid());
	 * 
	 * question.setDescription(questionDTO.getDescription());
	 * 
	 * question.setCreateby(questionDTO.getCreateby());
	 * question.setCreateon(questionDTO.getCreateon());
	 * question.setModifieby(questionDTO.getModifieby());
	 * question.setModifieon(questionDTO.getModifieon());
	 * question.setIpaddress(questionDTO.getIpaddress()); return question;
	 * }).collect(Collectors.toList());
	 * 
	 * questionR.saveAll(questions); }
	 * 
	 * List<AnswerType> answerTypesDTOs = createDTO.getAnswerTypes(); if
	 * (answerTypesDTOs != null && !answerTypesDTOs.isEmpty()) { List<AnswerType>
	 * choices = answerTypesDTOs.stream().map(answerTypeDTO -> { AnswerType choice =
	 * new AnswerType(); choice.setActive(answerTypeDTO.getActive());
	 * choice.setQlabel(answerTypeDTO.getQlabel());
	 * choice.setAnstype(answerTypeDTO.getAnstype());
	 * choice.setAns(answerTypeDTO.getAns());
	 * choice.setCreateby(answerTypeDTO.getCreateby());
	 * choice.setCreateon(answerTypeDTO.getCreateon());
	 * choice.setModifieby(answerTypeDTO.getModifieby());
	 * choice.setModifieon(answerTypeDTO.getModifieon());
	 * choice.setIpaddress(answerTypeDTO.getIpaddress()); return choice;
	 * }).collect(Collectors.toList());
	 * 
	 * answerTypeR.saveAll(choices); }
	 * 
	 * return ResponseEntity.ok("Form created successfully"); }
	 */

	public ResponseEntity<String> saveDTO(Integer id, Create_FormDTO createDTO) {
	    Form formDTO = createDTO.getForms();

	    if (formDTO == null) {
	        return ResponseEntity.badRequest().body("Form data is missing");
	    }
	
	    Form existingForm = formR.findById(id).orElse(null);
	    Form form;
	
	    if (existingForm != null) {
	        form = existingForm;
	    } else {
	        form = new Form();
	
	    }
	
	    // Set form properties
	    form.setTitle_text(formDTO.getTitle_text());
	    form.setAlis_name(formDTO.getAlis_name());
	    form.setModuleid(formDTO.getModuleid());
	    form.setCharacteristic(formDTO.getCharacteristic());
	    form.setSubcharacteristic(formDTO.getSubcharacteristic());
	    form.setRecurrence(formDTO.getRecurrence());
	    form.setStartmonth(formDTO.getStartmonth());
	    form.setComplianceperiod(formDTO.getComplianceperiod());
	    form.setEffective_Date(formDTO.getEffective_Date());
	    form.setActive(formDTO.getActive());
	    form.setText(formDTO.getText());
	    form.setCreateby(formDTO.getCreateby());
	    form.setCreateon(formDTO.getCreateon());
	    form.setModifieby(formDTO.getModifieby());
	    form.setModifieon(formDTO.getModifieon());
	    form.setIpaddress(formDTO.getIpaddress());

	    // Save form
	    formR.save(form);

	    // Handle questions
		/*
		 * List<Question> questionDTOs = createDTO.getQuestion(); if (questionDTOs !=
		 * null && !questionDTOs.isEmpty()) { List<Question> questions =
		 * questionDTOs.stream().map(questionDTO -> { Question question =
		 * questionDTO.getId() != null ?
		 * questionR.findById(questionDTO.getId()).orElse(new Question()) : new
		 * Question();
		 * 
		 * question.setqName(questionDTO.getqName());
		 * question.setValidateq(questionDTO.getValidateq());
		 * question.setQuestionlabel(questionDTO.getQuestionlabel());
		 * question.setAnswertype(questionDTO.getAnswertype());
		 * question.setRequiree(questionDTO.getRequiree());
		 * question.setFormid(form.getId()); // Set the form ID to the newly saved
		 * form's ID question.setDescription(questionDTO.getDescription());
		 * question.setCreateby(questionDTO.getCreateby());
		 * question.setCreateon(questionDTO.getCreateon());
		 * question.setModifieby(questionDTO.getModifieby());
		 * question.setModifieon(questionDTO.getModifieon());
		 * question.setIpaddress(questionDTO.getIpaddress());
		 * 
		 * return question; }).collect(Collectors.toList());
		 * 
		 * // Save questions questionR.saveAll(questions); }
		 */
	    List<Question> questionDTOs = createDTO.getQuestion();
	    if (questionDTOs != null && !questionDTOs.isEmpty()) {
	        List<Question> questions = questionDTOs.stream().map(questionDTO -> {
	            Question question;
	            if (questionDTO.getId() != null && questionDTO.getFormid()!=form.getId() ) {
	                question = questionR.findById(questionDTO.getId()).orElse(new Question());
	                System.out.println("AA");
	            } else {
	            	System.out.println("BB");
	                question = new Question();
	            }

	            question.setqName(questionDTO.getqName());
	            question.setValidateq(questionDTO.getValidateq());
	            question.setQuestionlabel(questionDTO.getQuestionlabel());
	            question.setAnswertype(questionDTO.getAnswertype());
	            question.setRequiree(questionDTO.getRequiree());
	            question.setFormid(form.getId()); // Set the form ID to the newly saved form's ID
	            question.setDescription(questionDTO.getDescription());
	            question.setCreateby(questionDTO.getCreateby());
	            question.setCreateon(questionDTO.getCreateon());
	            question.setModifieby(questionDTO.getModifieby());
	            question.setModifieon(questionDTO.getModifieon());
	            question.setIpaddress(questionDTO.getIpaddress());

	            return question;
	        }).collect(Collectors.toList());

	        // Save questions
	        questionR.saveAll(questions);
	    }

	    
	    // Handle answer types
	    List<AnswerType> answerTypesDTOs = createDTO.getAnswerTypes();
	    if (answerTypesDTOs != null && !answerTypesDTOs.isEmpty()) {
	        List<AnswerType> choices = answerTypesDTOs.stream().map(answerTypeDTO -> {
	            AnswerType choice = answerTypeDTO.getId() != null ? answerTypeR.findById(answerTypeDTO.getId()).orElse(new AnswerType()) : new AnswerType();

	            choice.setActive(answerTypeDTO.getActive());
	            choice.setQlabel(answerTypeDTO.getQlabel());
	            choice.setAnstype(answerTypeDTO.getAnstype());
	            choice.setAns(answerTypeDTO.getAns());
	            choice.setCreateby(answerTypeDTO.getCreateby());
	            choice.setCreateon(answerTypeDTO.getCreateon());
	            choice.setModifieby(answerTypeDTO.getModifieby());
	            choice.setModifieon(answerTypeDTO.getModifieon());
	            choice.setIpaddress(answerTypeDTO.getIpaddress());

	            return choice;
	        }).collect(Collectors.toList());

	        // Save answer types
	        answerTypeR.saveAll(choices);
	    }

	    return ResponseEntity.ok("Form saved or updated successfully");
	}

}

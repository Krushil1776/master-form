 
package com.example.master_f.Modal;
import java.util.List;



public class Create_FormDTO {
	
private	Form forms;
private	List<Question> question;
private	List<AnswerType> answerTypes;
	
	 
	
	
	public List<Question> getQuestion() {
		return question;
	}
	public void setQuestion(List<Question> question) {
		this.question = question;
	}
	public List<AnswerType> getAnswerTypes() {
		return answerTypes;
	}
	public void setAnswerTypes(List<AnswerType> answerTypes) {
		this.answerTypes = answerTypes;
	}
    public Form getForms() { return forms; }
    public void setForms(Form forms) { this.forms = forms; }

	
	
	
	
}
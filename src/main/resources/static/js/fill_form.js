var submitby = $("#uidd").val();
$(function() {
	selectForm();

});
function selectForm() {
	// Form data Show


	$.ajax({
		url: "/fillformdata",
		type: 'GET',
		dataType: "json",
		success: function(response) {


			var dropdown = $("#selectForm"); // Get the select element

			dropdown.empty(); // Clear previous options

			// Add default option as the first option
			dropdown.append($('<option value="">Select</option>'));

			// Append options retrieved from AJAX call
			$.each(response, function(index, item) {
				if (item.active == 1 || item.active == 0) {
					dropdown.append($('<option></option>').val(item.id).text(item.title_text));
				}
			});

			// Refresh the selectpicker after updating options
			dropdown.selectpicker("refresh");

			dropdown.change(function() {
				var valuee = $(this).val();
				QuestionPrevieww(valuee);
			});


		},
		error: function(xhr, status, error) {
			console.error("Error fetching categories:", error);
			alert("Failed to fetch categories. Check console for details.");
		}
	});
}





function QuestionPrevieww(id) {

	$("#aa").text("");       //remove

	$("#bb").text("");    //remove

	$('#questionContainer').empty();  //remove

	var a;
	var b;

	// Form data Show
	$.ajax({
		url: "/Get1data/" + id, // Replace with your actual endpoint
		type: 'GET',
		dataType: "json",
		success: function(response) {
			if (response) {
				// Set values for TitleText and AliasName fields
				a = response.title_text;
				b = response.text;
				document.getElementById('aa').textContent = a;
				document.getElementById('bb').textContent = b;
			} else {
				console.log('No data found.');
			}
		},
		error: function(xhr, status, error) {
			console.error(error);
		}
	});

	// Make AJAX request to fetch question data
	$.ajax({
		url: "/GetQuestion/" + id, // Replace with your actual endpoint
		type: 'GET',
		dataType: "json",
		success: function(response) {
			$.each(response, function(index, item) {
				
				var Required = item.requiree == 1 ? "*" : "";

				if (item.requiree == 1 || item.requiree == 0) {

					if (item.answertype == 1) {
						var questionHtml = `
        <div class="card mb-2 queshadow" data-questionId="${item.id}" answertype="${item.answertype}" >
            <div class="row pl-2 pr-2">
                <div class="col-xl-1 col-lg-1 col-sm-2 col-xs-12 colmspadding">
                    <span class="question">Q : ${index + 1}</span>
                </div>
                <div class="col-xl-11 col-lg-11 col-sm-10 col-xs-12 colmspadding">
                    <div class="form-group mb-0 text-justify">
                        <p class="font-weight-700 mb-1 text-justify"><span class="text-danger"></span> ${item.qName}</p>
                        <p class="mb-1">${item.description}</p>
                    </div>
                </div>
            </div>	
        </div>
    `;

						$('#questionContainer').append(questionHtml);



					} else if (item.answertype == 2) {

						var questionHtml = `
        <div class="card mb-2 queshadow" data-questionId="${item.id}" answertype="${item.answertype}" requireddd="${item.requiree}" >
	                            <div class="row pl-2 pr-2">
	                                <div class="col-xl-1 col-lg-1 col-sm-2 col-xs-12 colmspadding">
	                                    <span class="question">Q : ${index + 1}</span>
	                                </div>
	                                <div class="col-xl-11 col-lg-11 col-sm-10 col-xs-12 colmspadding">
	                                    <div class="form-group mb-0 text-justify">
	                                        <p class="font-weight-700 mb-1 text-justify"><span class="text-danger">${Required}</span> ${item.qName}</p>
	                                        <p class="mb-1">${item.description}</p>
	                                    </div>
	                                    <div id="optionsContainer${index}"></div>
	                                </div>
	                            </div>
	                        </div>
	                    `;

						$('#questionContainer').append(questionHtml);
						shOption(item.questionlabel, index, 'radio');
					} else if (item.answertype == 3) {
						var questionHtml = `
	                        <div class="card mb-2 queshadow" data-questionId="${item.id}" answertype="${item.answertype}" requireddd="${item.requiree}"> 
	                            <div class="card-body">
	                                <div class="row pl-2 pr-2">
	                                    <div class="col-xl-1 col-lg-1 col-sm-2 col-xs-12 colmspadding">
	                                        <span class="question">Q : ${index + 1}</span>
	                                    </div>
	
	                                    <div class="col-xl-11 col-lg-11 col-sm-10 col-xs-12 colmspadding">
	                                        <div class="form-group mb-0">
	                                            <p class="font-weight-700 mb-1 text-justify">
	                                              <span class="text-danger">${Required}</span> ${item.qName}
	                                            </p>
	                                            <p class="mb-1 text-justify">${item.description}</p>
	                                        </div>
	
	                                        <div class="form-group mb-0">
	                                            <div class="row pl-2 pr-2" id="optionsContainer${index}">
	                                            </div>
	                                        </div>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                    `;

						$('#questionContainer').append(questionHtml);
						shOption(item.questionlabel, index, 'checkbox');
					} else if (item.answertype == 6) {
						var questionHtml = `
        <div class="card mb-2 queshadow" data-questionId="${item.id}" answertype="6" requireddd="${item.requiree}">
            <div class="card-body">
                <div class="row pl-2 pr-2">
                    <div class="col-xl-1 col-lg-1 col-sm-2 col-xs-12 colmspadding">
                        <span class="question">Q : ${index + 1}</span>
                    </div>

                    <div class="col-xl-11 col-lg-11 col-sm-10 col-xs-12 colmspadding">
                        <div class="form-group mb-0">
                            <p class="font-weight-700 mb-1 text-justify"><span class="text-danger">${Required}</span>${item.qName}</p>
                            <p class="mb-1 text-justify">${item.description}</p>
                        </div>

                        <div class="form-group mb-0">
                            <div class="row pl-2 pr-2">
                                <div class="col-xl-7 col-lg-12 col-sm-12 col-xs-12 colmspadding">
                                    <select id="optionsContainer${index}" class="selectpicker" data-style="lineheight12 bg-transfer" data-live-search="true">
                                        <option value="" selected="selected">Select</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    `;
						$('#questionContainer').append(questionHtml);
						// Initialize the selectpicker after appending it to the DOM
						$(`#optionsContainer${index}`).selectpicker('refresh');
						shOption(item.questionlabel, index, 'select');
					}


					if (item.answertype === 7) {
						var questionHtml = `
        <div class="card mb-2 queshadow" data-questionid="${item.id}" answertype="7" requireddd="${item.requiree}">
            <div class="card-body">
                <div class="row pl-2 pr-2">
                    <div class="col-xl-1 col-lg-1 col-sm-2 col-xs-12 colmspadding">
                        <span class="question">Q : ${index + 1}</span>
                    </div>
                    <div class="col-xl-11 col-lg-11 col-sm-10 col-xs-12 colmspadding">
                        <div class="form-group mb-0">
                            <p class="font-weight-700 mb-1 text-justify"><span class="text-danger">${Required}</span>${item.qName}</p>
                            <p class="mb-1 text-justify">${item.description}</p>
                        </div>
                        <div class="form-group mb-0">
                            <div class="row pl-2 pr-2">
                                <div class="col-xl-7 col-lg-12 col-sm-12 col-xs-12 colmspadding">
                                    <select class="selectpicker" multiple data-selected-text-format="count" data-style="btn-light bg-transfer" data-actions-box="true" id="optionsContainer${index}">
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

						$('#questionContainer').append(questionHtml);
						shOption(item.questionlabel, index, 'multi-select');
					}
					if (item.answertype === 8) {
						var questionHtml = `
        <div class="card mb-2 queshadow" data-questionId="${item.id}" answertype="8" requireddd="${item.requiree}">
            <div class="card-body">
                <div class="row pl-2 pr-2">
                    <div class="col-xl-1 col-lg-1 col-sm-2 col-xs-12 colmspadding">
                        <span class="question">Q : ${index + 1}</span>
                    </div>
                    <div class="col-xl-11 col-lg-11 col-sm-10 col-xs-12 colmspadding">
                        <div class="form-group mb-0">
                            <p class="font-weight-700 mb-1 text-justify"><span class="text-danger">${Required}</span>${item.qName}</p>
                            <p class="mb-1 text-justify">${item.description}</p>
                        </div>
                        <div class="form-group mb-0">
                            <div class="row pl-2 pr-2">
                                <div class="col-xl-3 col-lg-12 col-sm-12 col-xs-12 colmspadding">
                                    <div class="input-group date" id="optionsContainer${index}">
                                        <input type="text" class="form-control" placeholder="dd/mm/yyyy">
                                        <span class="input-group-addon inputgroups">
                                            <i class="mdi mdi-calendar"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

						$('#questionContainer').append(questionHtml);

						// Initialize the date picker for the newly added input field
						$(`#optionsContainer${index} .form-control`).datepicker({
							autoclose: true,
							todayHighlight: true,
							format: "dd/mm/yyyy",
							clearBtn: true
						});
					}
					else if (item.answertype === 4) {
						var questionHtml = `
	        <div class="card mb-2 queshadow" data-questionId="${item.id}" answertype="4" requireddd="${item.requiree}">
	            <div class="card-body">
	                <div class="row pl-2 pr-2">
	                    <div class="col-xl-1 col-lg-1 col-sm-2 col-xs-12 colmspadding">
	                        <span class="question">Q : ${index + 1}</span>
	                    </div>
	                    <div class="col-xl-11 col-lg-11 col-sm-10 col-xs-12 colmspadding">
	                        <div class="form-group mb-0">
	                            <p class="font-weight-700 mb-1 text-justify"><span class="text-danger">${Required}</span>${item.qName}</p>
	                            <p class="mb-1 text-justify">${item.description}</p>
	                        </div>
	                        <div class="form-group mb-0">
	                            <div class="row pl-2 pr-2">
	                                <div class="col-xl-7 col-lg-12 col-sm-12 col-xs-12 colmspadding">
	                                    <input type="text" class="form-control" placeholder="Enter Your Answer">
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    `;

						$('#questionContainer').append(questionHtml);
					}
					else if (item.answertype === 5) {
						var questionHtml = `
	        <div class="card mb-2 queshadow" data-questionId="${item.id}" answertype="5" requireddd="${item.requiree}">
	            <div class="card-body">
	                <div class="row pl-2 pr-2">
	                    <div class="col-xl-1 col-lg-1 col-sm-2 col-xs-12 colmspadding">
	                        <span class="question">Q : ${index + 1}</span>
	                    </div>
	                    <div class="col-xl-11 col-lg-11 col-sm-10 col-xs-12 colmspadding">
	                        <div class="form-group mb-0">
	                            <p class="font-weight-700 mb-1 text-justify"><span class="text-danger">${Required}</span>${item.qName}</p>
	                            <p class="mb-1 text-justify">${item.description}</p>
	                        </div>
	                        <div class="form-group mb-0">
	                            <div class="row pl-2 pr-2">
	                                <div class="col-xl-7 col-lg-12 col-sm-12 col-xs-12 colmspadding">
	                                    <textarea class="form-control textareasize" placeholder="Enter Your Answer"></textarea>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    `;
						$('#questionContainer').append(questionHtml);
					}




				}

			});
		},
		error: function(xhr, status, error) {
			console.error('Error fetching question:', error);
		}
	});
}

function shOption(questionlabel, index, inputType) {
	$.ajax({
		url: "/GetOPtion/" + questionlabel, // Encode the string to handle special characters
		type: 'GET',
		dataType: "json",
		success: function(response) {
			if (response && response.length > 0) {
				let optionsHtml = '';
				for (let i = 0; i < response.length; i++) {
					let ans = response[i];
console.log()
					if (inputType === 'radio') {
						optionsHtml += `
        <div class="col-xl-3 col-lg-3 col-sm-3 col-xs-12 colmspadding">
            <div class="custom-control custom-radio displayblock">
                <input type="radio" class="custom-control-input" id="choice${index}-${i + 1}" name="question${index}" value="${ans.ans}">
                <label class="custom-control-label font-weight-300 m-t-5" for="choice${index}-${i + 1}">
                    ${ans.ans}
                </label>
            </div>
        </div>
    `;
					}
					else if (inputType === 'checkbox') {
						optionsHtml += `
	                            <div class="col-xl-3 col-lg-3 col-sm-3 col-xs-12 colmspadding">
	                                <div class="custom-control custom-checkbox displayblock">
	                                    <input type="checkbox" class="custom-control-input" id="choice${index}-${i + 1}"   value="${ans.ans}">
	                                    <label class="custom-control-label font-weight-300 m-t-5" for="choice${index}-${i + 1}">
	                                        ${ans.ans}
	                                    </label>
	                                </div>
	                            </div>
	                        `;
					} else if (inputType === 'select') {
						optionsHtml += `
	                            <option value="${ans.ans}">${ans.ans}</option>
	                        `;
					}
					else if (inputType === 'multi-select') {
						var selected = '';
						optionsHtml += `
            <option value="${ans.ans}" ${selected}>${ans.ans}</option>
	                        `;
					}
				}

				if (inputType === 'select' || inputType === 'multi-select') {
					$(`#optionsContainer${index}`).append(optionsHtml);
					$(`#optionsContainer${index}`).selectpicker('refresh'); // Ensure the selectpicker is refreshed
				} else {
					$('#optionsContainer' + index).html(optionsHtml);
				}
			} else {
				// Handle the case where no choices are returned
				$('#optionsContainer' + index).html('<p>No options available</p>');
			}
		},
		error: function(xhr, status, error) {
			// Handle errors here
			$('#optionsContainer' + index).html('<p>An error occurred while fetching options</p>');
			console.error('Error fetching options:', status, error);
		}
	});


}


function Clearformfill() {
	$("#aa").text("");


	$("#bb").text("");
	// Remove all content inside the questionContainer element
	$('#questionContainer').empty();



	$("#selectForm").val([]);


	$("#selectForm").selectpicker('refresh');
	$("#fillf").hide();


}

function saveAnswer() {
	var formId = $("#selectForm").val();

	if (!formId) {
		toastr.error('Please select a form before submitting.');
		return; // Exit the function if no form is selected
	}

	var questions = [];
	var allValid = true;

	$("#questionContainer").children().each(function() {
		var questionId = $(this).data('questionid');
		var answerType = $(this).attr('answertype');
		
  var AnswerRequired = $(this).attr('requireddd') === "1";
    console.log("Answer required:", AnswerRequired);		
		
		var answerValue;
			if (answerType == 1) {
			answerValue="";
		}
		if (answerType == 2) {
			answerValue = $(this).find('input[type="radio"]:checked').val();
			if (!answerValue && AnswerRequired) {
				allValid = false;
				toastr.error('Please answer all radio button questions.');
				return false; // Exit each loop
			}
		} else if (answerType == 3) {
			answerValuee = [];
			$(this).find('input[type="checkbox"]:checked').each(function() {
				answerValuee.push($(this).val());
			});
			if (answerValuee.length === 0 && AnswerRequired) {
				allValid = false;
				toastr.error('Please answer all checkbox questions.');
				return false; // Exit each loop
			}
			var answerValue = answerValuee.join(' ,');


		} else if (answerType == 6) {
			answerValue = $(this).find('select.selectpicker').val();
        if ((typeof answerValue === 'undefined' || answerValue === null || answerValue === '') && AnswerRequired) {
				allValid = false;
				toastr.error('Please select an option for all Single select questions.');
				return false; // Exit each loop
			}
		} else if (answerType == 7) {
			answerValuee = [];
			$(this).find('select option:selected').each(function() {
				answerValuee.push($(this).val());
			});
			if (answerValuee.length === 0 && AnswerRequired) {
				allValid = false;
				toastr.error('Please select options for all multiple select questions.');
				return false; // Exit each loop
			}
			var answerValue = answerValuee.join(' ,');
		} else if (answerType == 4 || answerType == 5 ||answerType == 8) {
			answerValue = $(this).find('input, textarea').val();
			if (!answerValue  && AnswerRequired) {
				allValid = false;
				toastr.error('Please fill in all required fields.');
				return false; // Exit each loop
			}
		}

		questions.push({
			formid: formId,
			questionid: questionId,
			value: answerValue,
			submitBy: submitby
		});
	});

	if (!allValid) {
		return; // Exit the function if any validation fails
	}
	console.log(questions);
	$.ajax({
		url: "/Createanswerr",
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify(questions), // Ensure sending a JSON object
		success: function(response) {
			$("#selectForm").val([]);
			$("#selectForm").selectpicker('refresh');
			$("#fillf").hide();
			toastr.success('Answer data saved successfully!');
			selectForm();

		},
		error: function(xhr, status, error) {
			console.error('Error saving form data:', error);
			toastr.error('Failed to save form data. Check console for details.');
		}
	});
}


function resetans() {
	$('#questionContainer input[type="text"]').val("");
	$('#questionContainer textarea').val("");

	// Clear selected options in select elements
	$('#questionContainer select').val([]);
	$('#questionContainer select').selectpicker('refresh');
	// Clear form selection

	// Uncheck checkboxes
	$('#questionContainer input[type="checkbox"]').prop('checked', false);

	// Uncheck radio buttons
	$('#questionContainer input[type="radio"]').prop('checked', false);
}


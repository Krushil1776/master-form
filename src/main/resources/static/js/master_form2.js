
var GlobalNumberSaveEdit;

let formData = []; // Global array to store form data
let editIndex = -1;


// Assuming formData is a global variable or it is passed as an argument to SaveAllForm function

// If formData is a global variable, ensure it is defined somewhere in your script
// let formData = [...]; 
function SaveAllForm() {
	let TitleText = $("#TitleText").val();
	let AliasName = $("#AliasName").val();

	let Modeleid = $("#Modeleid").val();

	let Characteristic = $("#Characteristic").val();
	let SubCharacteristic = $("#Sub-Characteristic").val();
	let Recurrencee = $("#Recurrencee").val();
	let StartMonth = $("#StartMonth").val();
	let CompliancePeriod = $("#CompliancePeriod").val();
	let EffectiveDate = $("#date_from").val();

	let required = $("#active").is(":checked") ? "1" : "0";
	let Active = required;
	let Text = $("#Text").val();

	if (TitleText === "") {
		toastr.error('TitleText is required.');
		return;
	}
	if (AliasName === "") {
		toastr.error('AliasName is required.');
		return;
	}
	if (Modeleid === "") {
		toastr.error('Modeleid is required.');
		return;
	}
	if (Characteristic === "") {
		toastr.error('Characteristic is required.');
		return;
	}
	if (SubCharacteristic === "") {
		toastr.error('SubCharacteristic is required.');
		return;
	}
	if (Recurrencee === "") {
		toastr.error('Recurrencee is required.');
		return;
	}
	if (StartMonth === "") {
		toastr.error('StartMonth is required.');
		return;
	}
	if (CompliancePeriod === "") {
		toastr.error('CompliancePeriod is required.');
		return;
	}
	if (EffectiveDate === "") {
		toastr.error('EffectiveDate is required.');
		return;
	}
/*	if (required === "") {
		toastr.error('Required is required.');
		return;
	}*/
	if (Text === "") {
		toastr.error('Text is required.');
		return;
	}

	let formDetails = {
		title_text: TitleText,
		alis_name: AliasName,  // corrected typo 'alis_name' to 'alias_name'
		moduleid: Modeleid,
		characteristic: Characteristic,
		subcharacteristic: SubCharacteristic,
		recurrence: Recurrencee,
		startmonth: StartMonth,
		complianceperiod: CompliancePeriod,
		effective_Date: EffectiveDate,
		active: Active,
		text: Text
	};

	// Ensure formData is defined


	let questions = [];
	let choicesArray = [];
	console.log(questions);
	for (let i = 0; i < formData.length; i++) {
		let question = formData[i];
		let questionChoicesArray = []; // Array to hold the choices for the current question

		// Assuming choices is a property of question and it's an array
		if (question.choices) {
			for (let j = 0; j < question.choices.length; j++) {
				let choiceObject = {
					qlabel: question.label,
					active: 1,
					anstype: question.answerType,
					ans: question.choices[j]
				};
				choicesArray.push(choiceObject);
				questionChoicesArray.push(choiceObject);
			}
		}

		questions.push({
			formid: $("#fid").val(),
			questionlabel: question.label,
			qName: question.name,
			validateq: question.validateq,
			requiree: question.required,
			description: question.description,
			answertype: question.answerType,
			choices: questionChoicesArray // Add the question-specific choices array to the question object
		});
	}



	let payload = {
		forms: formDetails,
		question: questions,
		answerTypes: choicesArray
	};
	GlobalNumberSaveEdit = $('#fid').val();

	$.ajax({
		url: '/CreateForm/' + GlobalNumberSaveEdit,
		type: 'POST',
		contentType: 'application/json',
		data: JSON.stringify(payload),
		success: function(response) {
			clearForm();
			toastr.success("Form saved successfully");
			displayf();
		   $('#portfolio_add_detail').hide();
		   $('#portfolio_details').show();
		},
		error: function(xhr, status, error) {
			console.error("Error saving form:", status, error);
		}
	});
}

function clearForm() {
	// Clear form inputs
	formData = [];
	$("#TitleText, #AliasName, #Modeleid, #Characteristic, #Sub-Characteristic, #Recurrencee, #StartMonth, #CompliancePeriod, #date_from, #Text").val('');

	$("#active").val([]);

	// Uncheck checkbox
	$("#active").prop('checked', false);

	// Clear dynamic data structures
	$("#Modeleid").val([]);
	$("#Modeleid").selectpicker("refresh");

	$("#Recurrencee").val([]);
	$("#Recurrencee").selectpicker("refresh");
	$("#StartMonth").val([]);
	$("#StartMonth").selectpicker("refresh");


	questions = [];
	choicesArray = [];
	$('#formquestion_datatable tbody tr').remove();
	// If there are dynamically added elements in the DOM, clear those as well
	// Assuming there's a container that holds the dynamic question fields
	$('.question-container').empty();

	// Log to confirm everything is cleared


}
function clearQuestionForm() {

	$('#QuestionLabel').val('');
	$('#QuestionName').val('');

	$('#QDescription').val('');
	$('#AnswerType').val([]).selectpicker("refresh");
	$('.multiselectdata, .multichoicedata, .singlechoicedata, .singleselectdata, .hidetextvalidation, .showanswershouldbe, .hidedatevalidation, .noansdisplaynone').hide();
	$("#QuestionActive").val([]).selectpicker("refresh");
	$("#validatans").prop('checked', false);

}


function Addqs() {
	clearQuestionForm();
	alert("okok");
	editIndex = -1; // Ensure editIndex is cleared when adding a new question

	$('.addformquestion').modal('show'); // Show the modal for adding a new question

	// Clear existing rows
	$('.multichoicedata tbody tr').remove();

	// Append a new row
	$('.multichoicedata tbody').append(`
        <tr>
            <td class="text-center border-0" width="5%">
                <i class="fa fa-arrow-right"></i>
            </td>
            <td class="border-0 p-1">
                <div class="form-group mb-0">
                    <input type="text" class="form-control" placeholder="Enter an answer choice in English">
                </div>
            </td>
            <td class="text-center border-0 p-0" width="3%">
                <a href="javascript:void(0)" class="multichoiceadd">
                    <i class="fa fa-plus-square-o font_20 m-t-5 text-default"></i>
                </a>
            </td>
            <td class="text-center border-0 p-0" width="3%">
                <a href="javascript:void(0)" class="">
                    <i class="fa fa-minus-square-o font_20 m-t-5 text-default"></i>
                </a>
            </td>
        </tr>
    `);


	$('.singlechoicedata tbody tr').remove();

	// Append a new row
	$('.singlechoicedata tbody').append(`
        <tr>
            <td class="text-center border-0" width="5%">
                <i class="fa fa-arrow-right"></i>
            </td>
            <td class="border-0 p-1">
                <div class="form-group mb-0">
                    <input type="text" class="form-control" placeholder="Enter an answer choice in English">
                </div>
            </td>
            <td class="text-center border-0 p-0" width="3%">
                <a href="javascript:void(0)" class="singlechoiceadd">
                    <i class="fa fa-plus-square-o font_20 m-t-5 text-default"></i>
                </a>
            </td>
            <td class="text-center border-0 p-0" width="3%">
                <a href="javascript:void(0)" class="singlechoiceremove">
                    <i class="fa fa-minus-square-o font_20 m-t-5 text-default"></i>
                </a>
            </td>
        </tr>
    `);

	$('.singleselectdata tbody tr').remove();

	// Append a new row
	$('.singleselectdata tbody').append(`
        <tr>
            <td class="text-center border-0" width="5%">
                <i class="fa fa-arrow-right"></i>
            </td>
            <td class="border-0 p-1">
                <div class="form-group mb-0">
                    <input type="text" class="form-control" placeholder="Enter an answer choice in English">
                </div>
            </td>
            <td class="text-center border-0 p-0" width="3%">
                <a href="javascript:void(0)" class="singleselectadd">
                    <i class="fa fa-plus-square-o font_20 m-t-5 text-default"></i>
                </a>
            </td>
            <td class="text-center border-0 p-0" width="3%">
                <a href="javascript:void(0)" class="singleselectremove">
                    <i class="fa fa-minus-square-o font_20 m-t-5 text-default"></i>
                </a>
            </td>
        </tr>
    `);
	$('.multiselectdata tbody tr').remove();

	// Append a new row
	$('.multiselectdata tbody').append(`
        <tr>
            <td class="text-center border-0" width="5%">
                <i class="fa fa-arrow-right"></i>
            </td>
            <td class="border-0 p-1">
                <div class="form-group mb-0">
                    <input type="text" class="form-control" placeholder="Enter an answer choice in English">
                </div>
            </td>
            <td class="text-center border-0 p-0" width="3%">
                <a href="javascript:void(0)" class="multiselectadd">
                    <i class="fa fa-plus-square-o font_20 m-t-5 text-default"></i>
                </a>
            </td>
            <td class="text-center border-0 p-0" width="3%">
                <a href="javascript:void(0)" class="multiselectremove">
                    <i class="fa fa-minus-square-o font_20 m-t-5 text-default"></i>
                </a>
            </td>
        </tr>
    `);


}



$(document).ready(function() {
	// Function to handle answer type change
	$(".anstypecombo").change(function() {
		const selectedValue = this.value;
		$('.multiselectdata, .multichoicedata, .singlechoicedata, .singleselectdata, .hidetextvalidation, .showanswershouldbe, .hidedatevalidation, .noansdisplaynone').hide();

		switch (selectedValue) {
			case '2':
				$('.singlechoicedata, .noansdisplaynone').show();
				break;
			case '3':
				$('.multichoicedata, .noansdisplaynone').show();
				break;
			case '4':
			case '5':
				$('.hidetextvalidation, .noansdisplaynone').show();
				break;
			case '6':
				$('.singleselectdata, .noansdisplaynone').show();
				break;
			case '7':
				$('.multiselectdata, .noansdisplaynone').show();
				break;
			case '8':
				$('.hidedatevalidation, .noansdisplaynone').show();
				break;
		}
	});

});





$("#SaveQ").click(function() {


	// Check each field and display toaster error if empty
	if (!$('#QuestionLabel').val()) {
		toastr.error('Question Label is empty!', 'Error');
		return;
	}
	if (!$('#QuestionName').val()) {
		toastr.error('Question Name is empty!', 'Error');
		return;
	}
/*	if (!$('#QDescription').val()) {
		toastr.error('Question Description is empty!', 'Error');
		return;
	}
*/	if (!$('#AnswerType').val()) {
		toastr.error('Answer Type is empty!', 'Error');
		return;
	}


	let required = $("#reqans").is(":checked") ? "1" : "0"; // Check if checkbox is checked
	let requiredd = $("#validatans").is(":checked") ? "1" : "0";
	let questionData = {
		label: $("#QuestionLabel").val(),
		name: $("#QuestionName").val(),
		required: required,
		validateq: requiredd,
		description: $("#QDescription").val(),
		answerType: $("#AnswerType").val(),
		choices: []
	};

	switch (questionData.answerType) {
		case '2':
			$('.singlechoicedata input').each(function() {
				questionData.choices.push($(this).val());
			});
			break;
		case '3':
			$('.multichoicedata input').each(function() {
				questionData.choices.push($(this).val());
			});
			break;
		case '6':
			$('.singleselectdata input').each(function() {
				questionData.choices.push($(this).val());
			});
			break;
		case '7':
			$('.multiselectdata input').each(function() {
				questionData.choices.push($(this).val());
			});
			break;
	}

	if (editIndex >= 0) {
		formData[editIndex] = questionData; // Update the existing question
	} else {
		formData.push(questionData); // Add new question
	}
   $('.modal').modal('hide');
	editIndex = -1; // Reset edit index
	$('.addformquestion').modal('hide'); // Hide the modal after saving
	displayFormData();
	$("#QuestionActive").prop('checked', false);

});

function displayFormData() {
    var table = $("#formquestion_datatable").DataTable();
    table.clear();

    formData.forEach(function(question, index) {
        let name;

        switch (question.answerType) {
            case '1': name = "No Answer Required"; break;
            case '2': name = "Single Choice"; break;
            case '3': name = "Multiple Choice"; break;
            case '4': name = "Single Textbox"; break;
            case '5': name = "Multiline Textbox"; break;
            case '6': name = "Single Select Dropdown"; break;
            case '7': name = "Multi Select Dropdown"; break;
            case '8': name = "Date"; break;
        }

        let formDataHtml = `
            <tr>
                <td>${index + 1}</td>
                <td>${question.name}</td>
                <td>${name}</td>
                <td>${question.required == "1" ? 'Yes' : 'No'}</td>
                <td class="text-center">
                    <span class="edit-user-alert" data-index="${index}">
                        <a onClick="editQuestion(${index})" href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" data-original-title="Edit" class="text-success fa-size"><i class="fa fa-pencil"></i></a>
                    </span>
                    <span class="delete-user-alert" data-index="${index}">
                        <a href="javascript:void(0)" class="text-danger fa-size" data-toggle="tooltip" data-placement="bottom" data-original-title="Delete"><i class="fa fa-trash"></i></a>
                    </span>
                </td>
            </tr>
        `;
        
        table.row.add($(formDataHtml)).draw(false);
    });
}



function editQuestion(index) {
	editIndex = index;
	let question = formData[index];
	$('#QuestionLabel').val(question.label);
	$('#QuestionName').val(question.name);
	$('#QDescription').val(question.description);
	$('#AnswerType').val(question.answerType).trigger('change');
	$('#ValidateQuestion').prop('checked', question.validateq);
	$('#RequiredQuestion').prop('checked', question.required);

if(question.answerType ==1){
			$('.addformquestion').modal('show');

}
if(question.answerType ==4){
			$('.addformquestion').modal('show');

}if(question.answerType ==5){
			$('.addformquestion').modal('show');

}
if(question.answerType ==8){
			$('.addformquestion').modal('show');

}

	if (question.answerType == 3) {	// Populate choices
		let choicesContainer = $('.multichoicedata tbody');
		choicesContainer.empty();
		if (question.choices) {
			question.choices.forEach(choice => {

				let choiceRow = `
                <tr>
                    <td class="text-center border-0" width="5%"><i class="fa fa-arrow-right"></i></td>
                    <td class="border-0 p-1">
                        <div class="form-group mb-0">
                            <input type="text" class="form-control" value="${choice}">
                        </div>
                    </td>
                    <td class="text-center border-0 p-0" width="3%">
                        <a href="javascript:void(0)" class="multichoiceadd"><i class="fa fa-plus-square-o font_20 m-t-5 text-default"></i></a>
                    </td>
                    <td class="text-center border-0 p-0" width="3%">
                        <a href="javascript:void(0)" class="multichoiceremove"><i class="fa fa-minus-square-o font_20 m-t-5 text-default"></i></a>
                    </td>
                </tr>`;
				choicesContainer.append(choiceRow);
			});
		}

		$('.addformquestion').modal('show');
		displayFormData();
	} else if (question.answerType == 2) {
		let choicesContainer = $('.singlechoicedata tbody');
		choicesContainer.empty();
		if (question.choices) {
			console.log()
			question.choices.forEach(choice => {

				let choiceRow = `
                <tr>
                    <td class="text-center border-0" width="5%"><i class="fa fa-arrow-right"></i></td>
                    <td class="border-0 p-1">
                        <div class="form-group mb-0">
                            <input type="text" class="form-control" value="${choice}">
                        </div>
                    </td>
                    <td class="text-center border-0 p-0" width="3%">
                        <a href="javascript:void(0)" class="singlechoiceadd"><i class="fa fa-plus-square-o font_20 m-t-5 text-default"></i></a>
                    </td>
                    <td class="text-center border-0 p-0" width="3%">
                        <a href="javascript:void(0)" class="singlechoiceremove"><i class="fa fa-minus-square-o font_20 m-t-5 text-default"></i></a>
                    </td>
                </tr>`;
				choicesContainer.append(choiceRow);
			});
		}

		$('.addformquestion').modal('show');
		displayFormData();
	} else if (question.answerType == 6) {
		let choicesContainer = $('.singleselectdata tbody');
		choicesContainer.empty();
		if (question.choices) {
			console.log()
			question.choices.forEach(choice => {

				let choiceRow = `
                <tr>
                    <td class="text-center border-0" width="5%"><i class="fa fa-arrow-right"></i></td>
                    <td class="border-0 p-1">
                        <div class="form-group mb-0">
                            <input type="text" class="form-control" value="${choice}">
                        </div>
                    </td>
                    <td class="text-center border-0 p-0" width="3%">
                        <a href="javascript:void(0)" class="singleselectadd"><i class="fa fa-plus-square-o font_20 m-t-5 text-default"></i></a>
                    </td>
                    <td class="text-center border-0 p-0" width="3%">
                        <a href="javascript:void(0)" class="singleselectremove"><i class="fa fa-minus-square-o font_20 m-t-5 text-default"></i></a>
                    </td>
                </tr>`;
				choicesContainer.append(choiceRow);
			});
		}

		$('.addformquestion').modal('show');
		displayFormData();
	}
	else if (question.answerType == 7) {
		let choicesContainer = $('.multiselectdata tbody');
		choicesContainer.empty();
		if (question.choices) {
			console.log()
			question.choices.forEach(choice => {

				let choiceRow = `
                <tr>
                    <td class="text-center border-0" width="5%"><i class="fa fa-arrow-right"></i></td>
                    <td class="border-0 p-1">
                        <div class="form-group mb-0">
                            <input type="text" class="form-control" value="${choice}">
                        </div>
                    </td>
                    <td class="text-center border-0 p-0" width="3%">
                        <a href="javascript:void(0)" class="multiselectadd"><i class="fa fa-plus-square-o font_20 m-t-5 text-default"></i></a>
                    </td>
                    <td class="text-center border-0 p-0" width="3%">
                        <a href="javascript:void(0)" class="multiselectremove"><i class="fa fa-minus-square-o font_20 m-t-5 text-default"></i></a>
                    </td>
                </tr>`;
				choicesContainer.append(choiceRow);
			});
		}

		$('.addformquestion').modal('show');
		displayFormData();
	}

}

$(function(){
	clearForm();
});

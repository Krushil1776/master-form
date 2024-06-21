

$(function(){
	GetAnswer();
	Recurrance();
	 StartMonth();
 fid();
   Module();
 CharacteristicS(valuee);
  CharacteristicSub(valuee);
});
	
	function fid() {
		GlobalNumberSaveEdit=0;
	    $.ajax({
	        url: "/Get3data",
	        type: 'GET',
	        dataType: "json",
	        success: function(response) {
				
				
					$.each(response, function (index, item) {
					            $("#fid").val(item.id + 1);
	
				});
				
	            // If the AJAX request is successful, update the #fid element value
	        },
	        error: function(xhr, status, error) {
	            // Handle any errors if they occur
	            console.error("Error occurred while fetching data:", error);
	        }
	    });
	}




function GetAnswer(){
	$.ajax({
		url: "/GetAnswer",
		type: 'GET',
		dataType: "json",
		success: function (response) {

			var dropdown = $('#AnswerType'); // Get the select element
			console.log("Dropdown:", dropdown);

			dropdown.empty(); // Clear previous options

			// Add default option as the first option
			dropdown.append($('<option value="">Select</option>'));

			// Append options retrieved from AJAX call
			$.each(response, function (index, item) {
				if (item.active == 1) {
					dropdown.append($('<option></option>').val(item.answertypeid).text(item.answertypename));
				}
			});

			// Refresh the selectpicker after updating options
			dropdown.selectpicker("refresh");

			// Set the ID of the dropdown as selectedCategory

		 
					},
		error: function (xhr, status, error) {
			console.error("Error fetching categories:", error);
			alert("Failed to fetch categories. Check console for details.");
		}
	});
	
}





function Module(){
	$.ajax({
		url: "/ModuleGetAll",
		type: 'GET',
		dataType: "json",
		success: function (response) {

			var dropdown = $('#Modeleid'); // Get the select element

			dropdown.empty(); // Clear previous options

			// Add default option as the first option
			dropdown.append($('<option value="">Select</option>'));

			// Append options retrieved from AJAX call
			$.each(response, function (index, item) {
				if (item.active == 1) {
					dropdown.append($('<option></option>').val(item.moduleid).text(item.moduleShotName));
				}
			});

			// Refresh the selectpicker after updating options
			dropdown.selectpicker("refresh");

			// Set the ID of the dropdown as selectedCategory
  dropdown.change(function () {
							 var valuee = $(this).val();
							 CharacteristicS(valuee);
						 });
		 
					},
		error: function (xhr, status, error) {
			console.error("Error fetching categories:", error);
			alert("Failed to fetch categories. Check console for details.");
		}
	});
	
}

 function  CharacteristicS(valuee){
   $.ajax({
		 url: "CharactericGetAll",
		 type: 'GET',
		 dataType: "json",
		 success: function (response) {

			 var dropdown = $("#Characteristic"); // Get the select element

			 dropdown.empty(); // Clear previous options

			 // Add default option as the first option
			 dropdown.append($('<option value="">Select Characteristic</option>'));

			 // Append options retrieved from AJAX call
			 $.each(response, function (index, item) {
			
				 if (item.active == 1 &&  item.moduleid == valuee) {
					 dropdown.append($('<option></option>').val(item.characteristicid).text(item.characteristicName));
				 }
			 });

			 // Refresh the selectpicker after updating options
			 dropdown.selectpicker("refresh");

			 dropdown.change(function () {
							 var valuee = $(this).val();
							 CharacteristicSub(valuee);
						 });

		 },
		 error: function (xhr, status, error) {
			 console.error("Error fetching categories:", error);
			 alert("Failed to fetch categories. Check console for details.");
		 }
	 });
 }

 
 
 
 function  CharacteristicSub(valuee){
   $.ajax({
		 url: "GetAllSubChara",
		 type: 'GET',
		 dataType: "json",
		 success: function (response) {

			 var dropdown = $("#Sub-Characteristic"); // Get the select element

			 dropdown.empty(); // Clear previous options

			 // Add default option as the first option
			 dropdown.append($('<option value="">Select SubCharacteristic</option>'));

			 // Append options retrieved from AJAX call
			 $.each(response, function (index, item) {
				 if (item.active == 1 &&  valuee==item.characteristicid) {
					 dropdown.append($('<option></option>').val(item.subCharacteristicid).text(item.subCharacteristicname));
				 }
			 });

			 // Refresh the selectpicker after updating options
			 dropdown.selectpicker("refresh");

		 

		 },
		 error: function (xhr, status, error) {
			 console.error("Error fetching categories:", error);
			 alert("Failed to fetch categories. Check console for details.");
		 }
	 });
 }

 
 
 
 
 
 function  StartMonth(){
   $.ajax({
		 url: "GetAllMonth",
		 type: 'GET',
		 dataType: "json",
		 success: function (response) {

			 var dropdown = $("#StartMonth"); // Get the select element

			 dropdown.empty(); // Clear previous options

			 // Add default option as the first option
			 dropdown.append($('<option value="">Select</option>'));

			 // Append options retrieved from AJAX call
			 $.each(response, function (index, item) {
				 if (item.active == 1) {
					 dropdown.append($('<option></option>').val(item.monthid).text(item.monthname));
				 }
			 });

			 // Refresh the selectpicker after updating options
			 dropdown.selectpicker("refresh");

		 

		 },
		 error: function (xhr, status, error) {
			 console.error("Error fetching categories:", error);
			 alert("Failed to fetch categories. Check console for details.");
		 }
	 });
 }
 
 
 
 function  Recurrance(){
   $.ajax({
		 url: "GetAllRecurrance",
		 type: 'GET',
		 dataType: "json",
		 success: function (response) {

			 var dropdown = $("#Recurrencee"); // Get the select element

			 dropdown.empty(); // Clear previous options

			 // Add default option as the first option
			 dropdown.append($('<option value="">Select</option>'));

			 // Append options retrieved from AJAX call
			 $.each(response, function (index, item) {
				 if (item.active == 1) {
					 dropdown.append($('<option></option>').val(item.recurranceid).text(item.recurrancename));
				 }
			 });

			 // Refresh the selectpicker after updating options
			 dropdown.selectpicker("refresh");

		 

		 },
		 error: function (xhr, status, error) {
			 console.error("Error fetching categories:", error);
			 alert("Failed to fetch categories. Check console for details.");
		 }
	 });
 }



$(function() {
	displayf();
});


function displayf() {  //all Form data in 1page
	$.ajax({
		url: "/Get3data", // Replace with your actual endpoint
		type: 'GET',
		dataType: "json",
		success: function(response) {
			if (response && response.length > 0) {
				
				
				var table = $('#form_datatable').DataTable(); // Get the DataTable instance
				table.clear(); // Clear existing data

				// Iterate through each item in the response array and add it to the DataTable
				$.each(response, function(index, item) {
					
					if(item.active==1||item.active==0){
					console.log(item);
					// Construct the HTML elements as strings
					let editButton = `<a onClick="updateAndShow(${item.id})" href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Edit" class="text-success fa-size client_add_btn"><i class="fa fa-pencil"></i></a>`;
					let previewButton = `<span data-toggle="modal" data-target="#all_question_preview"><a onClick="QuestionPreview(${item.id})" href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Preview" class="text-info fa-size"><i class="fa fa-eye"></i></a></span>`;
					let deleteButton = `<span class="delete-user-alert"><a onClick="Deleteform(${item.id})" href="javascript:void(0)" class="text-danger fa-size" data-toggle="tooltip" data-placement="bottom" data-original-title="Delete"><i class="fa fa-trash"></i></a></span>`;

					// Construct a row array with data from each item
					let rowData = [
						item.id,
						item.title_text,
						item.active == 1 ? 'Yes' : 'No',
						editButton + previewButton + deleteButton
					];

					// Add the row to the DataTable
					table.row.add(rowData).draw(false);}
				});
			} else {
				console.log('No data found.');
			}
		},
		error: function(xhr, status, error) {
			console.error(error);
		}
	});
}
/*--------------------------------------------------------------------------------------------------------------------------------------------
*/function updateAndShow(id) {  //form data Show
	
	$('#fid').val(id);
GlobalNumberSaveEdit=$('#fid').val();

	$.ajax({
		url: "/Get1data/" + id, // Replace with your actual endpoint
		type: 'GET',
		dataType: "json",
		success: function(response) {
			if (response) {
				console.log(response);

				// Set values for TitleText and AliasName fields
				$("#TitleText").val(response.title_text);
				$("#AliasName").val(response.alis_name);

				// Set value for Modeleid field and refresh selectpicker
				$("#Modeleid").val(response.moduleid);
				$("#Modeleid").selectpicker("refresh");

				// Log the characteristic to check if it's being received
				
			// Trigger change event to load characteristics
                $("#Modeleid").trigger('change');

                setTimeout(function() {
console.log(response);	
                    // Set value for Characteristic field and refresh selectpicker
                    $("#Characteristic").val(response.characteristic);
                    $("#Characteristic").selectpicker("refresh");

                    // Trigger change event to load sub-characteristics
                    $("#Characteristic").trigger('change');

                    setTimeout(function() {
                        // Set value for Sub-Characteristic field and refresh selectpicker
                        $("#Sub-Characteristic").val(response.subcharacteristic);
                        $("#Sub-Characteristic").selectpicker("refresh");
                    }, 500);
                }, 500);
				

				// Set value for Recurrencee field and refresh selectpicker
				$("#Recurrencee").val(response.recurrence);
				$("#Recurrencee").selectpicker("refresh");

				// Set value for StartMonth field and refresh selectpicker
				$("#StartMonth").val(response.startmonth);
				$("#StartMonth").selectpicker("refresh");

				// Set value for CompliancePeriod and EffectiveDate fields
				$("#CompliancePeriod").val(response.complianceperiod);

				$("#date_from").val(response.effective_Date);

				$("#Text").val(response.text);

				let isChecked = response.active == 1;

				$("#active").prop("checked", isChecked);

				QShow(id);
			}

			else {
				console.log('No data found.');
			}
		},
		error: function(xhr, status, error) {
			console.error(error);
		}
	});
}
	
function QShow(id) {
    $.ajax({
        url: "/GetQuestion/" + id, // Replace with your actual endpoint
        type: 'GET',
        dataType: "json",
        success: function(response) {
            if (response && response.length > 0) {
                formData = response;

                var table = $("#formquestion_datatable").DataTable();
                table.clear();

                var promises = formData.map((question) => {
                    if (question.requiree == 1 || question.requiree == 0) {
                        return fetchChoices(question.questionlabel); // Ensure the correct property is used
                    } else {
                        return Promise.resolve();
                    }
                });

                Promise.all(promises).then(() => {
                    displayFormData();
                }).catch(error => {
                    console.error('Error fetching choices:', error);
                });
            } else {
                console.log('No data found or invalid response format.');
            }
        },
        error: function(xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
}

function fetchChoices(questionlabel) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "/GetOPtion/" + questionlabel, // Replace with your actual endpoint
            type: 'GET',
            dataType: "json",
            success: function(response) {
                var choices = [];

                if (response && response.length > 0) {
                    response.forEach(function(item) {
                        choices.push(item.ans);
                    });

                    storeChoices(questionlabel, choices);
                    resolve();
                } else {
                    console.log('No data found or invalid response format.');
                    resolve();
                }
            },
            error: function(xhr, status, error) {
                console.error('Error fetching data:', error);
                reject(error);
            }
        });
    });
}

function storeChoices(questionlabel, choices) {
    formData.forEach((question) => {
        if (question.questionlabel === questionlabel) {
            question.choices = choices;
        }
    });
}




/*
function QShow(id) {
    $.ajax({
        url: "/GetQuestion/" + id, // Replace with your actual endpoint
        type: 'GET',
        dataType: "json",
        success: function(response) {
            // Check if response contains formData and it's an array
            if (response && response.length > 0) {
                // Store response data in the global array
                formData = response;

                // Clear the DataTable
                var table = $("#formquestion_datatable").DataTable();
                table.clear();
                let namee;

                // Iterate over each question in formData and append it to the table
                formData.forEach((question, index) => {
                    if (question.requiree == 1 || question.requiree == 0) {
displayFormData();
                    }
                });
            } else {
                console.log('No data found or invalid response format.');
            }
        },
        error: function(xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });
}


$.ajax({
    url: "/GetOPtion/" + questionlabel, // Replace with your actual endpoint
    type: 'GET',
    dataType: "json",
    success: function(response) {
        // Define the choices array
        var choices = [];

        // Check if response contains formData and it's an array
        if (response && response.length > 0) {
            // Iterate over the response to populate the choices array
            response.forEach(function(item) {
                choices.push(item);
            });

            // Now you can use the choices array as needed
            console.log('Choices array:', choices);
        } else {
            console.log('No data found or invalid response format.');
        }
    },
    error: function(xhr, status, error) {
        console.error('Error fetching data:', error);
    }
});
*/



/*
function deleteq(id){
	var data={};
	  $.ajax({
        url: '/deleteq/' + id,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
            toastr.success("DELETE Successfullly");
        },
        error: function(xhr, status, error) {
            console.error(error);
            alert("Error occurred: " + error);
        }
    });
}

*/


/*

function editQuestionn(index) {
	alert(index);
	editIndex = index;
	let question = formData[index];
	$('#QuestionLabel').val(question.questionlabel);
	$('#QuestionName').val(question.qName);
	$('#QDescription').val(question.description);
	$('#AnswerType').val(question.answertype).trigger('change');
	$('#ValidateQuestion').prop('checked', question.validateq);
	$('#RequiredQuestion').prop('checked', question.requiree);

if(question.answertype ==1){
			$('.addformquestion').modal('show');

}
if(question.answertype ==4){
			$('.addformquestion').modal('show');

}if(question.answertype ==5){
			$('.addformquestion').modal('show');

}
if(question.answertype ==8){
			$('.addformquestion').modal('show');

}

	if (question.answertype == 3) {	// Populate choices
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
	} else if (question.answertype == 2) {
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
	} else if (question.answertype == 6) {
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

}*/





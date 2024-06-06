

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
			console.log(item.characteristicid);
				 if (item.active == 1 &&  valuee==item.characteristicid) {
	console.log(item.characteristicName);
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

function updateAndShow(id) {  //form data Show
	
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

function QShow(id) { // edit time
    $.ajax({
        url: "/GetQuestion/" + id, // Replace with your actual endpoint
        type: 'GET',
        dataType: "json",
        success: function(response) {
            // Check if response contains formData and it's an array
            if (response && response.length > 0) {
    var table = $("#formquestion_datatable").DataTable();
    table.clear();
                let namee;            
                // Iterate over each question in formData and append it to the table
                response.forEach((question, index) => {
					if(question.requiree==1||question.requiree==0){
						
						
                    let o = question.answertype;

                    // Map answerType to a human-readable name using if-else if-else
                    if (o == '1') {
                        namee = "No Answer Required";
                    } else if (o == '2') {
                        namee = "Single Choice";
                    } else if (o == '3') {
                        namee = "Multiple Choice";
                    } else if (o == '4') {
                        namee = "Single Textbox";
                    } else if (o == '5') {
                        namee = "Multiline Textbox";
                    } else if (o == '6') {
                        namee = "Single Select Dropdown";
                    } else if (o == '7') {
                        namee = "Multi Select Dropdown";
                    } else if (o == '8') {
                        namee = "Date";
                    } 

                    // Generate HTML for the values array
                    let valuesHtml = "";
                    if (Array.isArray(question.values)) {
                        valuesHtml = question.values.map(value => '<span>' + value + '</span>').join(', ');
                    }
            
                                             let formDataHtml = '<tr>';
formDataHtml += '<td>' + (index + 1) + '</td>';
formDataHtml += '<td>' + question.qName + '</td>';
formDataHtml += '<td>' + namee + '</td>';
formDataHtml += '<td>' + (question.requiree == 1 ? 'Yes' : 'No') + '</td>';
formDataHtml += '<td class="text-center">';
formDataHtml += '<span class="edit-user-alert" data-index="' + index + '">';
// Corrected the onClick syntax
formDataHtml += '<a onClick="qedit(' + question.answertype + ',' + question.formid + ',\'' + question.qName + '\',\'' + question.questionlabel + '\',' + question.requiree + ',\'' + question.description + '\')"  href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" data-original-title="Edit" class="text-success fa-size"><i class="fa fa-pencil"></i></a>';
formDataHtml += '</span>';
formDataHtml += '<span class="delete-user-alert">';
formDataHtml += `<a onClick="deleteq('${question.id}')" href="javascript:void(0)" class="text-danger fa-size" data-toggle="tooltip" data-placement="bottom" data-original-title="Delete"><i class="fa fa-trash"></i></a>`;
formDataHtml += '</span>';
formDataHtml += '</td>';
formDataHtml += '</tr>';

        table.row.add($(formDataHtml)).draw(false);
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


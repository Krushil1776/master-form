	
	$(function() {
		DisplayCompletedf();
	});
	
	function DisplayCompletedf() {
		$.ajax({
			url: "/qwet",
			type: 'GET',
			dataType: "json",
			success: function(response) {
				var table = $("#form_datatablee");
	
				// Clear existing table rows
				table.empty();
	
				$.each(response, function(index, item) {
						console.log(item);
	
					var a = item[23];
	
					var b = item[18];
					
	var title=item[17];
	var description=item[2];
	var formid=item[0];
	var submitby=item[19];
					var rowHtml = `
	                    <tr>
	                        <td>${item[23]}</td>
	                        <td>${item[0]}</td>
	                        <td>${item[17]}</td>
	                        <td>${item[7]}</td>
	                        <td class="text-center">
	                            <span data-toggle="modal" data-target="#all_question_preview">
	                                <a onClick="ShowAnsQ('${b}','${a}','${title}','${description}','${formid}','${submitby}')" href="javascript:void(0)" data-toggle="tooltip"
	                                   data-placement="bottom" title="Preview"
	                                   class="text-info fa-size">
	                                    <i class="fa fa-eye"></i>
	                                </a>
	                            </span>
	                        </td>
	                    </tr>
	                `;
	
					// Append the row HTML to the table
					table.append(rowHtml);
				});
			},
			error: function(xhr, status, error) {
				console.error("Error fetching completed forms:", error);
				alert("Failed to fetch completed forms. Check console for details.");
			}
		});
	}
	

	function ShowAnsQ(b, a,title,description,formid , submitby) {
		// Create the dynamic content for the modal
		var modalContent = `
	        <div class="card mb-2 queshadow">
	            <div class="card-body">
	                <div class="row pr-3 pl-3">
	                    <div class="col-xl-4 col-lg-4 col-sm-4 colmspadding">
	                        <p class="compact mb-1">
	                            <span class="font-weight-700">Completed Date</span>
	                            <span class="displayblock font-medium-2">${a}</span>
	                        </p>
	                    </div>
	                </div>
	            </div>
	        </div>
	        
	        <div class="detailsbg">
                        <div class="row pr-2 pl-2">
                            <div class="col-xl-12 col-lg-12 col-sm-12 col-xs-12 colmspadding">
                                <p class="mb-1 font-weight-600"><span class="font-weight-700">Form Title:</span>
                                    <span>${title}</span></p>

                                <p class="mb-0 font-weight-600"><span class="font-weight-700">Description:</span>
                                    <span>${description}</span>
                                </p>
                            </div>
                        </div>
                    </div>
	    `;
	
		// Insert the dynamic content into the modal body
		$("#all_question_preview .modal-body").html(modalContent);
		
			$('#all_question_preview').modal('show');
			Getsubmitqa(formid,submitby);
					
	}
	
	
	function Getsubmitqa(formid, submit) {
    $.ajax({
        url: '/Getqestionanswercomp/' + submit + '/' + formid, // Replace with your API endpoint URL
        type: 'GET',
        dataType: 'json', // Expect JSON response
        success: function(data) {
            // Clear previous content if needed

            // Use $.each to iterate over the data array
            $.each(data, function(index, item) {
				console.log(item);
				var a=item[20];
							var Required = item[2] == 1 ? "*" : "";

                // Adjust the property names or indices based on your actual data structure
                var cardHtml = `
                 <div class="card mb-2 queshadow">
                    <div class="card-body">
                        <div class="row pl-2 pr-2">
                            <div class="col-xl-1 col-lg-1 col-sm-2 colmspadding">
                                <span class="question">Q : ${index + 1}</span>
                            </div>
                            <div class="col-xl-11 col-lg-11 col-sm-10 colmspadding">
                                <div class="form-group mb-0 text-justify">
                                    <p class="font-weight-700 mb-1 text-justify">
                                       <span class="text-danger">${Required}</span> ${item[12]}
                                    </p>
                                    <p class="mb-1">${item[1]}</p>
                                </div>
                                <div class="form-group mb-0">
                                    <div class="row pl-2 pr-2">
                                        <div class="col-xl-12 col-lg-12 col-sm-12 colmspadding">
                                            <p class="font-weight-700 mb-1 text-justify">Answer</p>
                                            <p class="mb-1 text-justify">${item[20]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
                
                // Append the generated HTML to a container element (e.g., a div with class "queshadow")
                $('#all_question_preview .modal-body').append(cardHtml);
            });
        },
        error: function(xhr, status, error) {
            // Handle errors
            console.error('Error:', error);
        }
    });
}

	
	
	
	
function transformArray(arr) {
    return arr.join('   ');
}
	
	
	
	
	
	
		/*

	$.ajax({
	    url: "/Getandquestion/" + b,
	    type: 'GET', 
	    dataType: 'json', 
	    success: function(data) { 
	        // Process the array data here
	console.log(data);
	        // Loop through the array and create HTML elements
	        $.each(data, function(index, item) {
				console.log(item);
				var ans =item[24];
				var q=item[0]; 
				
				ShowAnsQq(ans , q ,index);
				
	            // Generate HTML for the card
	        });
	    },
	    error: function(xhr, status, error) { 
	        console.error('Request failed:', status, error); 
	    }
	});
	
	
	function ShowAnsQq(ans, q, index) {
		console.log(ans);
		console.log(q);
	    $.ajax({
	        url: "/Getquestionsubmitby/" + q,
	        type: 'GET',
	        //dataType: "json",

	        success: function(response) {
console.log(response);	            
	            
	            
	            var cardHtml = `
	                <div class="card-body">
	                    <div class="row pl-2 pr-2">
	                        <div class="col-xl-1 col-lg-1 col-sm-2 colmspadding">
	                            <span class="question">Q : ${index + 1}</span>
	                        </div>
	                        <div class="col-xl-11 col-lg-11 col-sm-10 colmspadding">
	                            <div class="form-group mb-0 text-justify">
	                                <p class="font-weight-700 mb-1 text-justify">
	                                    <span class="text-danger"></span> ${response.qName}
	                                </p>
	                                <p class="mb-1">${response.description}</p>
	                            </div>
	                            <div class="form-group mb-0">
	                                <div class="row pl-2 pr-2">
	                                    <div class="col-xl-12 col-lg-12 col-sm-12 colmspadding">
	                                        <p class="font-weight-700 mb-1 text-justify">Answer</p>
	                                        <p class="mb-1 text-justify">"${ans}"</p>
	                                    </div>
	                                </div>
	                            </div>
	                        </div>
	                    </div>
	                </div>`;
	            
	            // Append the generated HTML to a container element (e.g., a div with class "queshadow")
	            $('.queshadow').append(cardHtml);
	        },
	        error: function(xhr, status, error) {
	            console.error('Request failed:', status, error);
	        }
	    });
	}
*/
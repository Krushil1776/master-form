alert("ok");

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
				var a = item[22];

				var b = item[0];

				var rowHtml = `
                    <tr>
                        <td>${item[22]}</td>
                        <td>${item[0]}</td>
                        <td>${item[17]}</td>
                        <td>${item[7]}</td>
                        <td class="text-center">
                            <span data-toggle="modal" data-target="#all_question_preview">
                                <a onClick="ShowAnsQ('${b}','${a}')" href="javascript:void(0)" data-toggle="tooltip"
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

function ShowAnsQ(b, a) {
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
    `;

	// Insert the dynamic content into the modal body
	$("#all_question_preview .modal-body").html(modalContent);
	/*
		$('#all_question_preview').modal('show');*/


$.ajax({
    url: `/Getandquestion/` + b,
    type: 'GET', 
    dataType: 'json', 
    success: function(data) { 
        // Process the array data here
console.log(data);
        // Loop through the array and create HTML elements
        $.each(data, function(index, item) {
			
			var ans =item[23];
			var q=item[21]; 
			
			ShowAnsQq(ans , q ,index);
			
            // Generate HTML for the card
          /*  var cardHtml = `
                    <div class="card-body">
                        <div class="row pl-2 pr-2">
                            <div class="col-xl-1 col-lg-1 col-sm-2 colmspadding">
                                <span class="question">Q : ${index + 1}</span>
                            </div>
                            <div class="col-xl-11 col-lg-11 col-sm-10 colmspadding">
                                <div class="form-group mb-0 text-justify">
                                    <p class="font-weight-700 mb-1 text-justify"><span class="text-danger">*</span> ${item.q	}</p>
                                    <p class="mb-1">${item.question}</p>
                                </div>
                                <div class="form-group mb-0">
                                    <div class="row pl-2 pr-2">
                                        <div class="col-xl-12 col-lg-12 col-sm-12 colmspadding">
                                            <p class="font-weight-700 mb-1 text-justify">Answer</p>
                                            <p class="mb-1 text-justify">"${item[23]}"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                            </div>
                </div>`;
            
            // Append the generated HTML to a container element (e.g., a div with id "container")
            $('.queshadow').append(cardHtml);*/
        });
    },
    error: function(xhr, status, error) { 
        console.error('Request failed:', status, error); 
    }
});

}

function ShowAnsQq(ans, q, index) {
    $.ajax({
        url: `/GetqidToname/` + q,
        type: 'GET',
        dataType: 'json',
        success: function(response) {
            console.log(response.qName);
            
           var qname= JSON.stringify(ans);
            
            console.log(qname)
            
            var cardHtml = `
                <div class="card-body">
                    <div class="row pl-2 pr-2">
                        <div class="col-xl-1 col-lg-1 col-sm-2 colmspadding">
                            <span class="question">Q : ${index + 1}</span>
                        </div>
                        <div class="col-xl-11 col-lg-11 col-sm-10 colmspadding">
                            <div class="form-group mb-0 text-justify">
                                <p class="font-weight-700 mb-1 text-justify">
                                    <span class="text-danger">*</span> ${response.qName}
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

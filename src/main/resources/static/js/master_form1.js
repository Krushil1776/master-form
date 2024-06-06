function qedit( answertype,formid,qName,questionlabel,requiree,description) {

        $("#qmodal").modal("show");
 
         $('#QuestionName').val(qName);
 
 
 
     $('#QuestionLabel').val(questionlabel);
                $('#QDescription').val(description); // Assuming description is part of the response
                $('#AnswerType').val(answertype).change();
                $('#reqans').prop('checked', requiree == 1); 
                OptionShow(questionlabel);
                
 }
 
 
 function OptionShow(questionlabel) {
    // Alert the input parameter
    
    // Clear existing table rows
    $(".multichoicedata").find('tbody tr').remove();
    $(".singlechoicedata").find('tbody tr').remove();
    $(".singleselectdata").find('tbody tr').remove();
    $(".multiselectdata").find('tbody tr').remove();

    // Perform the AJAX request
    $.ajax({
        url: "/GetOPtion/" + questionlabel,  // Encode the string to handle special characters
        type: 'GET',
        dataType: "json",
        success: function(response) {
            if (response && response.length > 0) {
                $.each(response, function(index, item) {
            
                    let html = `
                        <tr>
                            <td class="text-center border-0" width="5%">
                                <i class="fa fa-arrow-right"></i>
                            </td>
                            <td class="border-0 p-1">
                                <div class="form-group mb-0">
                                    <input type="text" class="form-control" value='${item.ans}' placeholder="Enter an answer choice in English">
                                </div>
                            </td>
                            <td class="text-center border-0 p-0" width="3%">
                                <a href="javascript:void(0)" class="{addClass}">
                                    <i class="fa fa-plus-square-o font_20 m-t-5 text-default"></i>
                                </a>
                            </td>
                            <td class="text-center border-0 p-0" width="3%">
                                <a href="javascript:void(0)" class="{removeClass}">
                                    <i class="fa fa-minus-square-o font_20 m-t-5 text-default"></i>
                                </a>
                            </td>
                        </tr>
                    `;

                    if (item.anstype == 2) {
                        html = html.replace('{addClass}', 'singlechoiceadd')
                                   .replace('{removeClass}', 'singlechoiceremove');
                        $('.singlechoicedata tbody').append(html);
                    } else if (item.anstype == 3) {
                        html = html.replace('{addClass}', 'multichoiceadd')
                                   .replace('{removeClass}', 'multichoiceremove');
                        $('.multichoicedata tbody').append(html);
                    } else if (item.anstype == 6) {
                        html = html.replace('{addClass}', 'singleselectadd')
                                   .replace('{removeClass}', 'singleselectremove');
                        $('.singleselectdata tbody').append(html);
                    } else if (item.anstype == 7) {
                        html = html.replace('{addClass}', 'multiselectadd')
                                   .replace('{removeClass}', 'multiselectremove');
                        $('.multiselectdata tbody').append(html);
                    }
                });
            }
        },
        error: function(xhr, status, error) {
            // Log the full error details to the console
            console.error('Error fetching data:', status, error, xhr.responseText);
        }
    });
}


function Deleteform(id){
	var data={};
	  $.ajax({
        url: '/Deletee/' + id,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
        
            console.log(response);
            toastr.success("DELETE Successfully");
            displayf();
        },
        error: function(xhr, status, error) {
            console.error(error);
            alert("Error occurred: " + error);
        }
    });
}



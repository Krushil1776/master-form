var Updatesave;

function clearFormau() {
	
	$("#fn").val('');           // Clear first name
	$("#ln").val('');           // Clear last name
	$("#email").val('');        // Clear email
	$("#cn").val('');           // Clear contact number
    $("#mf").val([]);         // Clear role
    $("#mf").selectpicker('refresh'); 
    	$("#valid_from").val('');   // Clear valid from date
	$("#valid_to").val('');     // Clear valid to date
	$("#image").val('');   
	$(".fieldmandatory").val("");     // Clear image
    $("#role").val([]);        
    $("#role").selectpicker('refresh');    
	$("#file").val('');         // Clear role
}


function Saveuseraddmin() {

	            if (! $("#fn").val()) {
                toastr.error("First Name is required");
                return;
            }
            if (!$("#ln").val()) {
                toastr.error("Last Name is required");
                return;
            }
          /*  if (!email) {
                toastr.error("Email is required");
                return;
            }
            if (!contactno) {
                toastr.error("Contact Number is required");
                return;
            }
            if (!gender) {
                toastr.error("Gender is required");
                return;
            }
            if (!validfrom) {
                toastr.error("Valid From date is required");
                return;
            }
            if (!validto) {
                toastr.error("Valid To date is required");
                return;
            }
            if (role.length === 0) {
                toastr.error("At least one role must be selected");
                return;
            }
*/

	var userData = {
		fname: $("#fn").val(),

		lname: $("#ln").val(),
		email: $("#email").val(),
		contactno: $("#cn").val(),
		gender: $("#mf").val(),
		valideform: $("#valid_from").val(),
		valideto: $("#valid_to").val(),
			role: $("#role").val(),
		image: "",
	
		password: "a",
		active: 1
	


	};
	var formData = new FormData();
	var imagee = $('input[type="file"]').prop('files')[0]; // Get the selected image file

	// If image file is present, append it to formData
	if (imagee) {
		formData.append('data', JSON.stringify(userData));
		formData.append('file', imagee);
	} else {
		formData.append('data', JSON.stringify(userData));
	}


	$.ajax({
		type: "PUT",
		url: "/Cauu/" + Updatesave, // Adjust the URL according to your endpoint
		contentType: "application/json",
		processData: false,
		contentType: false,
		data: formData, 
		success: function(response) {

			toastr.success("User admin created successfully: " + response);
			Getdataau();
			// Optionally, reset the form after successful submission
		},
		error: function(xhr, status, error) {
			alert("Error: " + error);
		}
	});
}


$(function() {
	Getdataau();
});

function Getdataau() {
	// Make AJAX GET request
	$.ajax({
		url: '/Getau',
		type: 'GET',
		success: function(data) {
			// Clear existing table data
			var table = $('#users_datatable').DataTable();
			table.clear();

			// Append new data
			data.forEach(function(user) {
console.log(user);
				if (user.active == 1) {
					console.log(user.image);
					table.row.add([
						`<div class="text-center">
                                <h2 class="table-avatar">
                                    <a href="javascript:void(0)" data-toggle="popover" data-trigger="hover" data-html="true" data-placement="right" data-template="<div class=&quot;popover fade bs-popover-right&quot; role=&quot;tooltip&quot; x-placement=&quot;right&quot;><div class=&quot;arrow&quot;></div><h3 class=&quot;popover-header p-0 border_radius6&quot;></h3></div>" data-title="<img src='http://localhost:9874/img/${user.image}' width='150' height='150' class='border_radius6'>" data-original-title="" title="">
                                        <img src='http://localhost:9874/img/${user.image}' alt="" class="img-radius avatar">
                                    </a>
                                    <span>${user.fname} ${user.lname}</span>
                                </h2>
                            </div>`,
						user.email,
						user.contactno,
						user.valideform,
						user.valideto,
						user.gender ,
						user.role,
						user.active == 1 ? 'Yes' : 'No',

						`<div class="text-center">
                                <a onClick="EditData(${user.id})" href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" data-original-title="Edit" class="text-success fa-size client_add_btn">
                                    <i class="fa fa-pencil"></i>
                                </a>
                                <span class="delete-user-alert">
                                    <a onClick="Delete(${user.id})" href="javascript:void(0)" class="text-danger fa-size" data-toggle="tooltip" data-placement="bottom" data-original-title="Delete">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </span>
                            </div>`
					]).draw();
				}
			});

			// Reinitialize tooltips and popovers
			$('[data-toggle="tooltip"]').tooltip();
			$('[data-toggle="popover"]').popover();
		},
		error: function(xhr, status, error) {
			// Handle errors
			console.error('Request failed. Status:', status, 'Error:', error);
		}
	});
}



function EditData(id) {


	console.log(Updatesave);
	$.ajax({
		url: `/Get1au/` + id, // Adjust URL to match your API endpoint
		type: 'GET',
		success: function(user) {
			console.log(user);
			// Populate the form with user data
			$('#fn').val(user.fname);
			$('#ln').val(user.lname);
			$('#email').val(user.email);
			$('#cn').val(user.contactno);

			$("#mf").val(user.gender);
			            $("#mf").selectpicker('refresh');

			$("#valid_from").val(user.valideform);
			$("#valid_to").val(user.valideto);
			$("#image").val();
        $("#role").val(user.role);

            // Refresh the selectpicker to apply the changes
            $("#role").selectpicker('refresh');
			Updatesave = user.id;
			// Show the modal
			/* $('#myModal').modal('show'); // Assuming you have a modal with id 'myModal'*/
		},
		error: function(xhr, status, error) {
			// Handle error
			console.error('Error fetching user data:', status, error);
			alert('Failed to fetch user data. Please try again.');
		}
	});
}


function AddUsers() {
	Updatesave = 0;
	alert("Cleare");
	clearFormau();

}



function Delete(id) {
	alert(id);
	var data = {};
	$.ajax({
		url: '/Delete/' + id,
		type: 'PUT',
		contentType: 'application/json',
		data: JSON.stringify(data),
		success: function(response) {
			Getdataau();

			toastr.success("DELETE Successfully");
		},
		error: function(xhr, status, error) {
			console.error(error);
			alert("Error occurred: " + error);
		}
	});

}





function Serchdata(){
	   var fname = $('#Searchname').val();
                var email = $('#Searchname').val();
                var contactno = $('#Searchname').val();
                var role = $('#sau').val();

                $.ajax({
                    url: '/Showau',
                    type: 'GET',
                    data: { fname: fname, email: email, contactno: contactno, role: role },
                    success: function(data) {
						
								var table = $('#users_datatable').DataTable();
			table.clear();

			// Append new data
			data.forEach(function(user) {
console.log(user);
				if (user.active == 1) {
					console.log(user.image);
					table.row.add([
						`<div class="text-center">
                                <h2 class="table-avatar">
                                    <a href="javascript:void(0)" data-toggle="popover" data-trigger="hover" data-html="true" data-placement="right" data-template="<div class=&quot;popover fade bs-popover-right&quot; role=&quot;tooltip&quot; x-placement=&quot;right&quot;><div class=&quot;arrow&quot;></div><h3 class=&quot;popover-header p-0 border_radius6&quot;></h3></div>" data-title="<img src='http://localhost:9874/img/${user.image}' width='150' height='150' class='border_radius6'>" data-original-title="" title="">
                                        <img src='http://localhost:9874/img/${user.image}' alt="" class="img-radius avatar">
                                    </a>
                                    <span>${user.fname} ${user.lname}</span>
                                </h2>
                            </div>`,
						user.email,
						user.contactno,
						user.valideform,
						user.valideto,
						user.gender ,
						user.role,
						user.active == 1 ? 'Yes' : 'No',

						`<div class="text-center">
                                <a onClick="EditData(${user.id})" href="javascript:void(0)" data-toggle="tooltip" data-placement="bottom" data-original-title="Edit" class="text-success fa-size client_add_btn">
                                    <i class="fa fa-pencil"></i>
                                </a>
                                <span class="delete-user-alert">
                                    <a onClick="Delete(${user.id})" href="javascript:void(0)" class="text-danger fa-size" data-toggle="tooltip" data-placement="bottom" data-original-title="Delete">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </span>
                            </div>`
					]).draw();
				}
			});

			// Reinitialize tooltips and popovers
			$('[data-toggle="tooltip"]').tooltip();
			$('[data-toggle="popover"]').popover();

						
                      
                    },
                    error: function(xhr, textStatus, errorThrown) {
                        // Handle the error response here
                        console.log('Error:', errorThrown);
                    }
                });
}
function reset(){
	$("#Searchname").val("")
$("#sau").val('').selectpicker("refresh");

Getdataau();

	
}


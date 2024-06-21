    var id = $("#uidd").val();

            $.ajax({
                	url: `/Get1au/` + id, // Adjust URL to match your API endpoint
		type: 'GET',
                success: function(response) {
					console.log(response);
                    let userProfile = `
                        <div class="row mt-2">
                            <div class="col-xl-3 col-lg-4 col-sm-4 colmspadding">
                                <div class="card mb-2">
                                    <div class="card-body p-0">
                                        <div class="panel panel-default">
                                            <div class="panel-wrapper">
                                                <div class="panel-body">
                            	                        <div class="profile-box">
                                                        <div class="profile-cover-pic">
                                                            <div class="profile-image-overlay"></div>
                                                        </div>
                                                        <div class="profile-info text-center mb-2">
                                                            <div class="profile-img-wrap">
                                                                <img class="inline-block" src="assets/images/users/avatar-2.jpg" alt="user">
                                                                <div class="fileuploadimages btn btn-default">
                                                                    <span class="btn-text">Edit</span>
                                                                    <input class="upload" type="file">
                                                                </div>
                                                            </div>    
                                                            <h4 class="block weight-500 text-capitalize txt-dark mb-1 mt-1">${response.fname}</h4>
                                                            <h5 class="block mt-1 text-capitalize">Manager of Corporate IT</h5>
                                                        </div>

                                                        <hr class="mb-2">

                                                        <div class="pl-2 pr-2">
                                                            <div class="form-group mb-0">
                                                                <p class="font-weight-600 mb-0">Email: </p>
                                                                <p class="mb-0">${response.email}</p>
                                                            </div>
                                                            <hr class="mb-2">
                                                        </div>

                                                        <div class="pl-2 pr-2">
                                                            <div class="form-group">
                                                                <p class="font-weight-600 mb-0">Contact No: </p>
                                                                <p class="mb-0">${response.contactno}</p>
                                                            </div>
                                                            <hr class="mb-2">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xl-9 col-lg-8 col-sm-8 colmspadding">
                                <div class="card">
                                    <div class="card-body pl-2 pr-2 pb-0 pt-0">
                                        <ul class="nav nav-pills navtab-bg pull-in ">
                                            <li class="nav-item">
                                                <a href="#users" data-toggle="tab" aria-expanded="true" class="nav-link navlink active">
                                                    <i class="fa fa-users mr-2"></i>User Details
                                                </a>
                                            </li>

                                            <li class="nav-item">
                                                <a href="#settings" data-toggle="tab" aria-expanded="false" class="nav-link navlink">
                                                    <i class="fa fa-cog mr-2"></i> Settings
                                                </a>
                                            </li>
                                        </ul>
                                        
                                        <div class="tab-content p-0">
                                            <div class="tab-pane show active" id="users">
                                                <div class="card-body p-0 pt-2">
                                                    <div class="row pl-2 pr-2">
                                                        <div class="col-xl-12 col-lg-12 col-sm-12 col-xs-12 colmspadding">
                                                            <h5 class="mt-0 border-bottom font-weight-600 pb-1 mb-2 text-info">Basic Details</h5>
                                                        </div>
                                                    </div>

                                                    <div class="row pl-2 pr-2">
                                                        <div class="col-xl-4 col-lg-5 col-sm-6 col-xs-12 colmspadding">
                                                            <div class="form-group mb-2">
                                                                <p class="font-weight-600 mb-0">Email: </p>
                                                                <p class="mb-0">${response.email}</p>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-xl-2 col-lg-4 col-sm-6 col-xs-12 colmspadding">
                                                            <div class="form-group mb-2">
                                                                <p class="font-weight-600 mb-0">Contact No.: </p>
                                                                <p class="mb-0">${response.contactno}</p>
                                                            </div>
                                                        </div>

                                                        <div class="col-xl-2 col-lg-4 col-sm-6 col-xs-12 colmspadding">
                                                            <div class="form-group mb-2">
                                                                <p class="font-weight-600 mb-0">Gender: </p>
                                                                <p class="mb-0">${response.gender}</p>
                                                            </div>
                                                        </div>
                                                        
                                                        <div class="col-xl-2 col-lg-3 col-sm-6 col-xs-12 colmspadding">
                                                            <div class="form-group mb-2">
                                                                <p class="font-weight-600 mb-0">Valid From: </p>
                                                                <p class="mb-0">${response.valideform}</p>
                                                            </div>
                                                        </div>

                                                        <div class="col-xl-2 col-lg-3 col-sm-6 col-xs-12 colmspadding">
                                                            <div class="form-group mb-2">
                                                                <p class="font-weight-600 mb-0">Valid To: </p>
                                                                <p class="mb-0">${response.valideto}</p>
                                                            </div>
                                                        </div>

                                                        <div class="col-xl-4 col-lg-4 col-sm-6 col-xs-12 colmspadding">
                                                            <div class="form-group mb-2">
                                                                <p class="font-weight-600 mb-0">Role: </p>
                                                                <p class="mb-0">${response.role}</p>
                                                            </div>
                                                        </div>
                                                    
                                                        <div class="col-xl-2 col-lg-4 col-sm-6 col-xs-12 colmspadding">
                                                            <div class="form-group mb-2">
                                                                <p class="font-weight-600 mb-0">Language: </p>
                                                                <p class="mb-0">English</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="tab-pane" id="settings">
                                                <div class="card-body p-0 pt-2">
                                                    <div class="row pl-2 pr-2">
                                                        <div class="col-xl-12 col-lg-12 col-sm-12 col-xs-12 colmspadding">
                                                            <h5 class="mt-0 border-bottom font-weight-600 pb-1 mb-2 text-info">Notifications Setting</h5>
                                                            <div class="table-responsive">
                                                                <table class="table table-striped mb-0">
                                                                    <thead>
                                                                        <tr>
                                                                            <th>Description</th>
                                                                            <th width="10%"><i class="fa fa-bell-o mr-2 font-16" aria-hidden="true"></i>Push</th>
                                                                            <th width="10%"><i class="fa fa-envelope-o mr-2 font-16" aria-hidden="true"></i>Email</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td class="pt-2 pb-2">
                                                                                <span class="font-weight-700">Form</span>
                                                                                <p class="mb-0">These are notifications for when admin generates Form or when a Form is completed.</p>
                                                                            </td>
                                                                            <td class="text-center">
                                                                                <div class="switchery-demo">
                                                                                    <input type="checkbox" checked data-plugin="switchery" data-color="#64b0f2" data-size="small">
                                                                                </div>
                                                                            </td>
                                                                            <td class="text-center">
                                                                                <div class="switchery-demo">
                                                                                    <input type="checkbox" data-plugin="switchery" data-color="#64b0f2" data-size="small">
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <!-- Add more rows as needed -->
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                    $('#profileContainer').html(userProfile);
                },
                error: function(error) {
                    console.error('Error fetching profile data', error);
                }
            });

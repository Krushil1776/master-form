<!DOCTYPE html>
<html lang="en">

<head>

    <title>Completed Form</title>
    <meta charset='utf-8'/>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv='Cache-Control' content='no-cache, no-store, must-revalidate'/>
    <meta http-equiv='X-UA-Compatible' content='IE=edge' />
    <meta http-equiv='Pragma' content='no-cache'>

    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.png">

    <!-- Common css -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" type="text/css" href="assets/custom/css/import.css">
    <link rel="stylesheet" type="text/css" href="assets/custom/css/responsive.css">

    <script src="assets/js/modernizr.min.js"></script>

</head>

<body class="background-image-body background1 square scrollbar-dusty-grass square thin">
    <div class="preloader"></div>
    <!-- Navigation Bar-->
    <header id="topnav">
        <script src="assets/custom/js/header.js"></script>
        <!-- end topbar-main -->

        <script src="assets/custom/js/menu.js"></script>
    </header>
    <!-- End Navigation Bar-->

    <div class="wrapper wrapper-top">
        <div class="container-fluid">

            <div class="fixed-plugin">
                <div class="dropdown show-dropdown">
                    <a href="#" data-toggle="dropdown">
                        <i class="fa fa-cog fa-2x"> </i>
                    </a>

                    <ul class="dropdown-menu">
                        <li class="header-title"> Theme Settings</li>
                        <li class="adjustments-line">
                            <a href="javascript:void(0)" class="switch-trigger active-color">
                                <div class="badge-colors ml-auto mr-auto text-center" id="themeColorName">
                                    <span class="badge filter badge-azure purplelable" id="bluecolor" title="Blue"></span>
                                    <span class="badge filter badge-warning yellowlable" id="yellowcolor" title="Yellow"></span>
                                    <span class="badge filter badge-green dbluelable" id="greencolor" title="Green"></span>
                                    <span class="badge filter badge-danger bluelable" id="redcolor" title="Red"></span>
                                </div>
                                <div class="clearfix"></div>
                            </a>
                        </li>

                        <li class="header-title mb-0"> Background </li>
                        <li class="adjustments-line more-height">
                            <a href="javascript:void(0)" class="switch-trigger active-color">
                                <div class="badge-colors ml-auto mr-auto text-center" id="imagechanges">
                                    <span class="image-change-button1">
                                        <img src="assets/custom/images/theme-background/background1.jpg" class="imgactive" alt="BG1">
                                    </span>
                                    <span class="image-change-button2">
                                        <img src="assets/custom/images/theme-background/background2.jpg" alt="BG2">
                                    </span>
                                    <span class="image-change-button3">
                                        <img src="assets/custom/images/theme-background/background3.jpg" alt="BG3">
                                    </span>
                                    <span class="image-change-button4">
                                        <img src="assets/custom/images/theme-background/background4.jpg" alt="BG4">
                                    </span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
<div class="row">
    <div class="col-xl-12 col-lg-12 col-sm-12 colmspadding">
        <div class="card">
            <div class="card-header">
                <h5 class="mb-0 font-bold mt-0">Completed Form</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-sm-12">
                        <table id="form_datatable" class="table nowrap table-custom-hover">
                            <thead>
                                <tr>
                                    <th>Completed Date</th>
                                    <th>Form #</th>
                                    <th>Form Name</th>
                                    <th>Created By</th>
                                    <th class="text-center">Preview</th>
                                </tr>
                            </thead>
                            
                            <tbody id="form_datatablee">
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  <div class="modal modal-right fade" id="all_question_preview" tabindex="-1">
            <div class="modal-dialog modal-right-width">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Question Preview</h4>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>x</span>
                        </button>
                    </div>

                      <div class="modal-body" style="background-color: #F3F3F3;">
                    <div id="a" class="card mb-2 queshadow">
                        <div class="card-body">
                            <div class="row pr-3 pl-3">
                                <div class="col-xl-4 col-lg-4 col-sm-4 colmspadding">
                                    <p class="compact mb-1"><span class="font-weight-700">Completed Date</span>
                                        <span class="displayblock font-medium-2">01-07-2020</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="b" class="detailsbg">
                        <div class="row pr-2 pl-2">
                            <div class="col-xl-12 col-lg-12 col-sm-12 col-xs-12 colmspadding">
                                <p class="mb-1 font-weight-600"><span class="font-weight-700">Form Title:</span>
                                    <span>251 Attwell Drive - Operator Form - Monthly</span></p>

                                <p class="mb-0 font-weight-600"><span class="font-weight-700">Description:</span>
                                    <span>Are all portable fire extinguishers visually inspected every month?At minimum,
                                        the following list of items should be inspected extinguisher in proper location
                                        and mounted.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div  class="card mb-2 queshadowq">
                        <div class="card-body">
                           <div class="row pl-2 pr-2">
                                 <div class="col-xl-1 col-lg-1 col-sm-2 colmspadding">
                                    <span class="question">Q : 1</span>
                                 </div>
         
                                 <div class="col-xl-11 col-lg-11 col-sm-10 colmspadding">
                                    <div class="form-group mb-0 text-justify">
                                       <p class="font-weight-700 mb-1 text-justify"><span class="text-danger">*</span> Emergency Power Systems &amp; Lighting</p>
                                       <p class="mb-1">Are the self-contained battery powered emergency lights inspected and tested at least once a month?</p>
                                    </div>
         
                                    <div class="form-group mb-0">
                                       <div class="row pl-2 pr-2">
                                          <div class="col-xl-12 col-lg-12 col-sm-12 colmspadding">
                                             <p class="font-weight-700 mb-1 text-justify">Answer</p>
                                             <p class="mb-1 text-justify">Choice 1</p>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                           </div>
                        </div>
                    </div>

                  
                        	
                    </div>

                    <div class="modal-footer bg-white">
                        <a class="btn btn-success float-right btn-padding" data-dismiss="modal"><i
                                class="fa fa-times mr-2"></i>Close</a>
                    </div>
                </div>
            </div>
             </div>
            </div>

    <script src="assets/custom/js/footer.js"></script>
    <!-- jQuery  -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/popper.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/waves.js"></script>
    <script src="assets/js/jquery.slimscroll.js"></script>

    <!-- Required datatable js -->
    <script src="assets/custom/plugins/datatable/js/jquery.dataTables.min.js"></script>
    <script src="assets/custom/plugins/datatable/js/fixcolumn.js"></script>
    <script src="assets/custom/plugins/datatable/Responsive/js/dataTables.responsive.js"></script>

    <script src="assets/plugins/bootstrap-select/js/bootstrap-select.js"></script>
    <script src="js/Completed_form.js"></script> 
    <script src="assets/custom/plugins/typeahead/js/bootstrap-typeahead.js"></script>
    <script src="assets/plugins/moment/moment.js"></script>
    <script src="assets/plugins/bootstrap-daterangepicker/daterangepicker.js"></script>
    <script src="assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>

    <!-- App js -->
    <script src="assets/js/jquery.core.js"></script>
    <script src="assets/js/jquery.app.js"></script>

    <script src="assets/custom/js/custom.js"></script>
    <script src="assets/custom/plugins/image_change/image-change.js"></script>
    <script src="assets/custom/plugins/jquery_confirm_v3/jquery-confirm.min.js"></script>
    <script src="assets/custom/plugins/jquery_confirm_v3/jquery-confirm-custom.js"></script>

    <script src="assets/custom/plugins/jasny-bootstrap/dist/js/jasny-bootstrap.min.js"></script>

    <script src="assets/custom/js/commonmodal.js"></script>

    <script>
        $('#ans_date').closest('div').datepicker({
            autoclose: true,
            todayHighlight: true,
            format: "dd/mm/yyyy",
            clearBtn: true
        });

        $('#allpreview_date').closest('div').datepicker({
            autoclose: true,
            todayHighlight: true,
            format: "dd/mm/yyyy",
            clearBtn: true
        });

        $('#date_from').closest('div').datepicker({
            autoclose: true,
            todayHighlight: true,
            format: "dd/mm/yyyy",
            clearBtn: true
        });

        $('#date_to').closest('div').datepicker({
            autoclose: true,
            todayHighlight: true,
            format: "dd/mm/yyyy",
            clearBtn: true
        });
    </script>
</body>

</html>

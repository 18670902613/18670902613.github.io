jQuery(document).ready(function($) {
    $(".base-edit").click(function() {
        var _idx = $(this).index();
        if (_idx != 1 && _idx != 3) {
            $('#base-edit-modal').modal('show');
            $(".modal-body").html("<div class='row'><input type='text' class='col-xs-8 col-xs-offset-2' id='edit-msg'></div>");
        }
    });
});

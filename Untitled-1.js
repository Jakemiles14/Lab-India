$('#exampleInputName, #exampleInputPassword').bind('keyup', function(e) {
    $(this).val($(this).val().replace(/[^0-9a-zA-Z]/g, ''));
    if (e.which >= 97 && e.which <= 122) {
        var newKey = e.which - 32;
        e.keyCode = newKey;
        e.charCode = newKey;
    };
});
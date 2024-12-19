$(document).ready(function() {
    $('#submit-btn').click(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var address = $('#address').val();

        if (name == '' || email == '' || phone == '' || address == '') {
            alert('Please fill in all fields!');
            return false;
        }

        $.ajax({
            type: 'POST',
            url: 'process.php',
            data: {
                name: name,
                email: email,
                phone: phone,
                address: address
            },
            success: function(data) {
                $('#output').html(data);
            }
        });
    });
});

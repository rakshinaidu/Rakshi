$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();
        
        // Simple form validation
        var isValid = true;
        $('#contactForm input, #contactForm textarea').each(function() {
            if ($(this).val() === '') {
                isValid = false;
                $(this).css('border', '1px solid red');
            } else {
                $(this).css('border', '1px solid #ccc');
            }
        });

        if (isValid) {
            alert('Form submitted successfully!');
        } else {
            alert('Please fill in all the fields.');
        }
    });
});

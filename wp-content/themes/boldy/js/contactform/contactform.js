jQuery(document).ready(function($){
	$('form#contact').submit(function() {
		$('form#contact .error').remove();
		var hasError = false; 
		$(this).find('.requiredField').each(function() {
			if(jQuery.trim($(this).val()) == '') {
				var labelText = $(this).prev('label').text();
				$(this).parent().append('<span class="error">U bent vergeten uw '+labelText.toLowerCase()+' in te vullen.</span>');
				hasError = true;
			} else if($(this).hasClass('email')) {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if(!emailReg.test(jQuery.trim($(this).val()))) {
					var labelText = $(this).prev('label').text();
					$(this).parent().append('<span class="error">U heeft een onjuist '+labelText.toLowerCase()+' ingevuld.</span>');
					hasError = true;
				}
			}
		});
		if(!hasError) {
			var formInput = $(this).serialize();
			$.post($(this).attr('action'),formInput, function(data){
				$('form#contact').slideUp("fast", function() {
					$(this).before('<p class="thanks"><strong>Bedankt voor uw bericht!</strong> <br /> Wij zullen zo spoedig mogelijk contact met u opnemen!</p>');
				});
			});
		}
		  return false;

	});
});
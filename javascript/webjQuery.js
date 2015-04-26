$(document).ready(function(){
	$('td').on('click',function() {
	var tr = $(this).closest('tr');
	var info = tr.data('description');
	var description = $('<td>'+info+'</td>');
	tr.append(description);
	$(this).remove();
	});
});

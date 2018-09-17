$(document).foundation()

$(function(){
  $('#opt1').on('click', function(e){
    e.preventDefault();
    $obj = $(this).data('highlight');
    $alt = $('#opt2').data('highlight');
    $($alt).fadeOut(250);
    $($obj).fadeToggle(250);
  });
  $('#opt2').on('click', function(e){
    e.preventDefault();
    $obj = $(this).data('highlight');
    $alt = $('#opt1').data('highlight');
    $($alt).fadeOut(250);
    $($obj).fadeToggle(250);
  });
});
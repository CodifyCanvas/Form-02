$(function() {
  $('.btn-Sign_up').click(function() {
    $('.Sign_in').addClass('remove-section');
    $('.Sign_up').removeClass('active-section');
    $('.btn-Sign_up').removeClass('active');
    $('.btn-Sign_in').addClass('active');
  });
    
  $('.btn-Sign_in').click(function() {
    $('.Sign_in').removeClass('remove-section');
    $('.Sign_up').addClass('active-section'); 
    $('.btn-Sign_up').addClass('active');
    $('.btn-Sign_in').removeClass('active');
  });
    
});
//Email JS
(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init("user_mXdQV47fKgmgDzcJm0fT0");
})();


window.onload = function() {
    

    //Email JS
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        console.log("Hello");
        event.preventDefault();
        emailjs.sendForm('default_service', 'coding_form', this)
            .then(function() {
                console.log('SUCCESS!');
               
            }, function(error) {
                console.log('FAILED...', error);
                
            });
    });
};

//Toggle button 
$(function() {
    
    $('#toggle-icon1').click(function() {
            $('#menu').show();
            
            $('#home').hide();
            $('#footer').hide();
            $('#contact').hide();
            $('#features').hide();
            $(".header-icon1").hide();
            $(".header-icon2").show();
        
        return false;
    });  

});

function myToggle()
{
    $('#menu').hide();
        
    $('#home').show();
    $('#footer').show();
    $('#contact').show();
    $('#features').show();


    $(".header-icon2").hide();
    $(".header-icon1").show();
}

function myFunction() {
    $('#menu').hide();
    $('#home').show();  
    $('#footer').show();
    $('#contact').show();
    $('#features').show();

    $(".header-icon2").hide();
    $(".header-icon1").show();    
  }


  function login()
  {
    $('#menu').hide();
    $("#header").hide();
    $("#header-mobile").hide();

    $("#login #header-login").show();
    $("#login #header-login").addClass("header-login");
    $("#login-div").fadeIn("show");

    $('#home').hide();  
    $('#footer').hide;
    $('#contact').hide();
    $("#signup-div").hide();
    $('#features').hide();
    $("#signup #header-signup").hide();
    
}
function signup()
  {
    $('#menu').hide();
    $("#header").hide();
    $("#header-mobile").hide();
    
    $("#signup #header-signup").show();
    $("#signup #header-signup").addClass("header-login");
    $("#signup-div").fadeIn("show");

    $('#home').hide();  
    $('#footer').hide;
    $('#contact').hide();
    $("#login-div").hide();
    $('#features').hide();
    $("#login #header-login").hide();
    
}

function home()
{
   
}

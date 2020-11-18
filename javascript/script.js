//Email JS
(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init("user_mXdQV47fKgmgDzcJm0fT0");
})();


window.onload = function() {
    
    //Email JS
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
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

    $(".header-icon2").hide();
    $(".header-icon1").show();
}

function myFunction() {
    $('#menu').hide();
    $('#home').show();  
    $('#footer').show();
    $('#contact').show();

    $(".header-icon2").hide();
    $(".header-icon1").show();    
  }



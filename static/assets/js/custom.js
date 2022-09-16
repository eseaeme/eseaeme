

$(document).ready(function(){
    //Function
    
     //Sidebar Js
     $('.docu_mobile_sidebar_trigger').click(function(){
        $('body').toggleClass('open_siderbar');
        $('html').toggleClass('cm-overflow');
    });

    $('.doc_sidebar_ul a, .doc_sidebar_ul button').click(function(){
        $('body').removeClass('open_siderbar');
        $('html').removeClass('cm-overflow');
    });



     //Menu Js
     $('.menu_toggle_btn').click(function(){
        $('.header_wrapper').toggleClass('open_menu');
        $('html').toggleClass('cm-overflow');
    });

   


    //Forgot Password Js
    $('.pass_trigger_btn').click(function(e){
        e.preventDefault();
        $('.reset_password_box').addClass('d_hide');
        $('.tahnks_message_box').addClass('d_show');
    });


    $('.fp_resend_link').click(function(e){
        $('.reset_password_box').removeClass('d_hide');
        $('.tahnks_message_box').removeClass('d_show');
    });
 
  

});





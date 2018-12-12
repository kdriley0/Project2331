

$(function() {
    
    var $contacts = $('#contacts');
    var id=$('#id')
    var $fname = $('#fname');
    var $lname = $('#lname');
    var $phone = $('#phone');
    var $company = $('#cname')
    var $email = $('#email');
    
$.ajax({    
    type: 'GET',
    url:'/contact',
    success: function(data) {
        console.log('success', data);
        $.each(data, function(i, con){
            $contacts.append('<li>contact #'+i+ ' First Name: '+con.firstName+' Last Name: '+ con.lastName + 'Phone #:  '+con.phone + 'Company '+con.company+
            ' email '+con.email+'<button id="del-contact">delete!</button>'+'</li>');
           
        });

    },
    error: function(){
        alert('error loading contacts');
    }
    });
    $('#add-contact').on('click', function(){
        var contact ={
            firstName: $fname.val(),
            lastName: $lname.val(),
            company: $company.val(),
            phone: $phone.val(),
            email: $email.val()
        };
        $.ajax({
            type: 'POST',
            url: '/contact',
            data: contact,
            success: function(){
                $contacts.append('<li> First Name:'+contact.firstName+' Last Name '+ contact.lastName+ 'Company '+contact.company +' email '+contact.email +
               'Phone # '+contact.phone  +'</li>')
            },
            error: function(){
                alert('error saving contact');
            }
            
        })
       

    })

});

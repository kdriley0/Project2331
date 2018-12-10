
import { ContactSchema } from './../models/model';
import { addNewContact } from './../controllers/controller';
$(function(){
    var $contacts = $('#contacts');
    var $fname = $('fname');
    var $lname = $('#lname');
    var $email = $('email');
$.ajax({
    type: 'Get',
    url:'localhost:3000/contact',
    success: function(contacts) {
        console.log('success', contacts);
        $.each(contact, function(i, contact){
            $contacts.append('<li>contact #'+i+ 'First Name:',contact.$fname+'</li>');
           
        });

    },
    error: function(){
        alert('error loading contacts');
    }
    });
    $('#add-contact').on('click', function(){
        var contact ={
            lastName = $lname.val(),
            firstName = $fname.val(),
        };
        $.ajax({
            type: 'Post',
            url: 'http://localhost:3000/contact',
            data: contact,
            success: function(newContact){
                $contacts.append('<li>contact #'+i+ 'First Name:',contact.$fname+'</li>');

            },
            error: function(){
                alert('error saving contact');
            }
            
        })
    })
   

});

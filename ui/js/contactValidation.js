/*Contact email validate*/ 
function validateEmail()
{
        var uemail = document.contactForm.email;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(uemail.value.match(mailformat))
        {
        document.contactForm.desc.focus();
        return true;        }
        else
        {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
        }
}

// contact validate Name.
function validateName()
{ 
        var fname = document.contactForm.fullName;
        var letters = /^[A-Za-z]+$/;
        if(fname.value.match(letters))
        {
            // Focus goes to next field i.e. Address.
            //document.contactForm.address.focus();
            return true;
        }
        else
        {
            alert('Full Name must have alphabet characters only !');
            fname.focus();

        return false;
        }
}


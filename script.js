$(document).ready(function(){
    $("#signup").validate({
       rules:{ fname:{
            required:true,
            minlength:4
        },
    sname:{
        required:true,
        minlength:4
    },
    email:{
        required:true,
        email:true,
    },
password:{
    required:true,
    minlength:8,

},
day:{
    required:true
},
month:{
    required:true
},
year:{
    required:true
},
add:{
    required:true
}

    },
    messages:{
        fname:{
            required:"Enter First Name",
        minlength:"Enter Atleast 4 characters"
        },
        sname:{
            required:"Enter Second Name",
        minlength:"Enter Atleast 4 characters"
        },
        email:{
            required:"Enter a valid Email"
        },
        password:{
            required:"Enter passwords",
        minlength:"Enter Atleast 8 characters"
        }
    }
    })
})
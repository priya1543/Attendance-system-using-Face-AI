
/*signup page*/
var fn = document.forms['signup']['firstname'];
var ln = document.forms['signup']['lastname'];
var rn = document.forms['signup']['rollno'];
var email = document.forms['signup']['emailid'];
var mn = document.forms['signup']['mobno'];
var usr = document.forms['signup']['usrname'];
var passwrd1 = document.forms['signup']['pass'];
var passwrd2 = document.forms['signup']['repass'];

var fn_error = document.getElementById('fistname_error');
var ln_error = document.getElementById('lastname_error');
var rn_error = document.getElementById('rollno_error');
var email_error = document.getElementById('emailid_error');
var mn_error = document.getElementById('pass_error');
var usr_error = document.getElementById('pass_error');
var pass1_error = document.getElementById('pass_error');
var pass2_error = document.getElementById('pass_error');



fn.addEventListener('textInput', lenfn_Verify);
ln.addEventListener('textInput', lenln_Verify);
rn.addEventListener('textInput', lenrn_Verify);
email.addEventListener('textInput', lenem_Verify);
mn.addEventListener('textInput', lenmn_Verify);
usr.addEventListener('textInput', usr_Verify);
passwrd1.addEventListener('textInput', pass1_Verify);
passwrd2.addEventListener('textInput', pass2_Verify);


function validated(){
	if (fn.value.length<6) {
		username_error.style.display = "block";
		un.focus();
		return false;
	}
  if (ln.value.length<5) {
    username_error.style.display = "block";
    un.focus();
    return false;
  }
  if (rn.value.length==0) {
    username_error.style.display = "block";
    un.focus();
    return false;
  }
	if (emailid.value.length ==0) {
    pass_error.style.display = "block";
		password.focus();
		return false;
	}
  if (mn.value.length ==0) {
    pass_error.style.display = "block";
    password.focus();
    return false;
  }
  if (usr.value.length ==0) {
    pass_error.style.display = "block";
    password.focus();
    return false;
  }
  if (passwrd1.value.length ==0) {
    pass_error.style.display = "block";
    password.focus();
    return false;
  }
  if (passwrd2.value.length ==0) {
    pass_error.style.display = "block";
    password.focus();
    return false;
  }
}

function lenfn_Verify(){
	if (fn.value.length >= 1) {
		fn_error.style.display = "none";
		return true;
	}
}
function lenln_Verify(){
	if (ln.value.length >= 1) {
		ln_error.style.display = "none";
		return true;
	}
}
function lenrn_Verify(){
	if (rn.value.length == 10) {
		rn_error.style.display = "none";
		return true;
	}
}
function lenem_Verify(){
	if (emailid.value.length >= 1) {
		email_error.style.display = "none";
		return true;
	}
}
function lenmn_Verify(){
	if (mn.value.length== 10) {
		mn_error.style.display = "none";
		return true;
	}
}
function usr_Verify(){
	if (usr.value.length >= 1) {
		usr_error.style.display = "none";
		return true;
	}
}
function pass1_Verify(){
	if (passwrd1.value.length >= 1) {
		pass1_error.style.display = "none";
		return true;
	}
}
function pass2_Verify(){
	if (passwrd2.value.length >= 1) {
		pass2_error.style.display = "none";
		return true;
	}
}

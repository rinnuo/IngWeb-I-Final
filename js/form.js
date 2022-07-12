function validateForm() {
	let user = document.form.un.value
	if (user == "") {
		document.getElementById('usererror').innerHTML="*Username can not be empty"
		return false
	} else if (user.length < 3) {
		document.getElementById('usererror').innerHTML="*Username should be atleast 3 characters"
		return false
	} else {
		document.getElementById('usererror').innerHTML=""
	}

	let pass = document.form.pw.value
	if (pass == "") {
		document.getElementById('passerror').innerHTML="*Password can not be empty"
		return false
	} else if (pass.length < 8) {
		document.getElementById('passerror').innerHTML="*Password should be atleast 8 characters"
		return false
	} else {
		document.getElementById('passerror').innerHTML=""
	}
}
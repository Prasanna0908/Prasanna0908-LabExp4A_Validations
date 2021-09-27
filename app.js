function validateForm() {
    const name = document.forms["myForm"]["Name"].value;
    if (name == "" || name.length <= 2) {
        alert("Name must be filled out and length should of minimum 2 characters");
        return false;
    }

    const address = document.forms["myForm"]["address"].value;
    if (address == "" || address.length <= 5) {
        alert("Please Enter your full address");
        return false;
    }



    const text = document.forms["myForm"]["phone"].value;
    const regx = /^[6-9]\d{9}$/;
    if (!regx.test(text))
        alert("Invalid Contact Number");




    var location = document.getElementById('Location');
    var invalid = location.value == "Please Select";

    if (invalid) {
        alert('Please select brand name');
        location.className = 'error';
        return !invalid;
    }
    else {
        location.className = '';

    }



    const Color = document.getElementById('Color');
    const invalid1 = Color.value == "Please Select";

    if (invalid1) {
        alert('Please select color name');
        Color.className = 'error';
        return !invalid;
    }
    else {
        Color.className = '';
    }



    const Size = document.getElementById('Size');
    const invalid2 = Size.value == "Please Select";

    if (invalid2) {
        alert('Please select color name');
        Size.className = 'error';
        return !invalid;
    }
    else {
        Size.className = '';
    }

    let div = document.getElementsByClassName('divID');

    div.innerHTML += `Name : ${name} , Brand : ${Location} , Color : ${Color} , Size : ${Size}`;

}


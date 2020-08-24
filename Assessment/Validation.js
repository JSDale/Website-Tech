function ValidateForm() {
    var checkBoxesChecked = true;
    var checkBoxesChecked = ValidateCheckBoxes();
    var ageIsgreaterThan15 = ValidateAge();
    if(checkBoxesChecked == false) {
        alert("Please select at least one hair type");
        event.preventDefault();
        return false;
    }

    if(ageIsgreaterThan15 == false) {
        alert("You msut be at least 16 years old");
        event.preventDefault();
        return false;
    }
    return true;
}

function ValidateCheckBoxes() {

    var checkBox1 = document.getElementById("CheckBox1");
    var checkBox2 = document.getElementById("CheckBox2");
    var checkBox3 = document.getElementById("CheckBox3");
    var checkBox4 = document.getElementById("CheckBox4");
    var checkBox5 = document.getElementById("CheckBox5");
    var checkBox6 = document.getElementById("CheckBox6");

    var CheckBoxes = [checkBox1.checked, checkBox2.checked, checkBox3.checked, checkBox4.checked, checkBox5.checked, checkBox6.checked];

    for(var i = 0; i < 6; i++) {

        if(CheckBoxes[i] == true)
        {
            return true;
        }
    }
    
    return false;
}

function ValidateAge() {
    var age = document.getElementById("Age").value;
    if(age > 15)
    {
        return true;
    }

    return false;
}
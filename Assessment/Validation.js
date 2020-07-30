function ValidateForm()
{
    var checkBoxesChecked = true;
    var checkBoxesChecked = ValidateCheckBoxes();
    if(checkBoxesChecked == false)
    {
        alert("Please select at least one hair type");
        console.log("Returning False");
        event.preventDefault();
        return false;
    }
    return true;
}

function ValidateCheckBoxes()
{
    console.log("ValidateCheckBoxes");
    var checkBox1 = document.getElementById("CheckBox1")
    var checkBox2 = document.getElementById("CheckBox2")
    var checkBox3 = document.getElementById("CheckBox3")
    var checkBox4 = document.getElementById("CheckBox4")
    var checkBox5 = document.getElementById("CheckBox5")
    var checkBox6 = document.getElementById("CheckBox6")

    var CheckBoxes = [checkBox1.checked, checkBox2.checked, checkBox3.checked, checkBox4.checked, checkBox5.checked, checkBox6.checked];

    console.log("Outfor");
    for(var i = 0; i < 6; i++)
    {
        console.log("infor");

        if(CheckBoxes[i] == true)
        {
            console.log("true");
            return true;
        }
    }
    
    console.log("false");
    return false;
}
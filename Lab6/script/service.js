var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"]
const setDateFormat = "mm/dd/yy";

var giorgio = {
    name: "Giorgio Frigo",
    value:1,
    dayOff: [1,3],
};
var julie = 
{
    name: "Julie Lope",
    value:2,
    dayOff: [1,2,6],
};
var megan = 
{
    name: "Megan Kole",
    value:3,
    dayOff: [4,5],
};

function validateCredit(a) {
    var number = document.getElementById('creditcard').value;
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return true;
}



function disableDates(date) {
    
    //var therapist = document.getElementsByName("exampleRadios2").value;
    
    var els = document.getElementsByName('exampleRadios2');
    for (var i=0;i<els.length;i++){
      if ( els[i].checked ) {
        var therapist =els[i].value;
      }
    }
    console.log(therapist);
    var dayOFF;
    if(therapist == giorgio.value){
        dayOFF = giorgio.dayOff;
    }else if(therapist == julie.value){
        dayOFF = julie.dayOff;
    }else if(therapist == megan.value){
        dayOFF = megan.dayOff;
    }
    
    if (date.getDay() == 0 || dayOFF.includes(date.getDay()))
        return [false];
    
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [unavailableDates.indexOf(string) == -1]
}
$(document).ready(function(){

    $("#creditcard").on("change", function(){
        if (!validateCredit("#creditcard")){
            alert("Wrong format for creditcard, it must be 16 digits and no spaces.");
            $("#creditcard").val("");
            $("#creditcard").addClass("error");
        }
        else {
            $("#creditcard").removeClass("error");
        }
    });
    $("#creditcard").on("mouseenter", function(){
        $("#creditcard").addClass("showInput");
    });

    $("#creditcard").on("mouseleave", function(){
        $("#creditcard").removeClass("showInput");
    });


    $("#creditcard").tooltip({
        classes: {
          "ui-tooltip": "highlight"
        }
    });

    $("#dateInput").datepicker(
        {
            dateFormat: setDateFormat,
            minDate: new Date('07/01/2020'),  
            maxDate: '+4M',
            beforeShowDay: disableDates
        }   
    );
  
    document.getElementById("bookform").onsubmit = submitfunc;

    function submitfunc() {
        var els = document.getElementsByName('exampleRadios2');
        for (var i=0;i<els.length;i++){
            if ( els[i].checked ) {
                var therapist =els[i].id;
            }
        }
        var calendar = $("#dateInput");
        alert("Your appointment has been booked successfully. \nAppointment details:\n" + "Therapist: "+ therapist+ "\nDate: "+ calendar.val());
};
});


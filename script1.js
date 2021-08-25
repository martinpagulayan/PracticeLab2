const EventForm = document.getElementById("EventForm");

EventForm.addEventListener("save", (e) =>{
    e.preventDefault();
    console.log("The Form has been submitted!");
});

function getInfo() {
    var eventtype = document.getElementById('type').value;
    var eventtitle = document.getElementById('title').value;
    var date1 = document.getElementById('date1').value;
    var date2 = document.getElementById('date2').value;
    var postingdate = document.getElementById('pd').value;
    var checkboxes = document.getElementsByName('doja');
    var selecteditems = [];

    for(var i = 0; i<checkboxes.length; i++) 
    {
        if (checkboxes[i].checked) {
            selecteditems.push(checkboxes[i].value)
        }
    }
    var checkeditems= selecteditems.join();
    if(eventtype == "" || eventtitle == "" || date1 == "" || date2 == "" || postingdate == "" ){
        alert("Make sure to fill up all of the required data needed. Please Try Again");
    } else{
        alert("Event Type : " + eventtype + "\nEvent Title: " + eventtitle + "\nStarting date will be " + date1 + " upto " + date2 + 
        "\nand posting date will be on " + postingdate + "\nOther details: \n" + checkeditems +"\nThe Event is successfully recorded. Thank You!\n");
    }
}
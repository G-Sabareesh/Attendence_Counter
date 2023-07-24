var displayvalue = 0;

// click + - function
function totalClick(click) {

    // get id from html
    const totalvalue = document.getElementById('num');

    // separate int number in final value
    const finalvalue = parseFloat(totalvalue.innerText) + click;

    // displayvalue  get from html ( display under plus and minus button)
    displayvalue = document.getElementById('num1')

    // check the value is > 0 for print and calculate purpose
    if(finalvalue < 0){
        totalvalue.innerText  = 0;
        displayvalue.innerText = 0;
    }
    else{
        totalvalue.innerText  = finalvalue;
        displayvalue.innerText = finalvalue;
    }

    // save in local storage
    localStorage.setItem('number',JSON.stringify(finalvalue));

    // return the final value to showdetails function for calculate runtime
    showdetails(finalvalue);
}

// once refresh or reopen function
function recall()
{
    // initial and get the value from local storage
    const finalvalue = 0;
    const numvalue = document.getElementById('num');
    const getvalue = localStorage.getItem('number',finalvalue);

    // check the value is > 0 for print and calculate purpose
    if(getvalue >= 0 && getvalue <= 90){
        numvalue.innerText  = getvalue;
        displayvalue.innerText = getvalue;

        // return the stored value to calling function
        return getvalue;
    }
    else{
        if(getvalue < 0){
            numvalue.innerText  = 0;
            displayvalue.innerText = 0;
        }
        else if(getvalue > 90){
            numvalue.innerText  = 90;
            displayvalue.innerText = 90;
        }
    }
}

function showdetails()
{
    // initial variable 
    var attenddays = 0;
    var attendpercent = 0;
    // var totalday = document.getElementById('totalday'); total days after we will in range type
    var totalday = 90;

    // call the recall function to return the sotred value
    const absentvalue = recall();

    // calculate attend day
    attenddays = totalday - absentvalue;

    // calculate addtned percentage
    attendpercent = (attenddays/totalday)*100;

    // check for display purpose
    if(attenddays > 0 && attendpercent > 0)
    {
        document.getElementById("days").textContent = `\D ${attenddays}`;
        document.getElementById("percent").textContent = `${attendpercent.toFixed(2)}\%`;
    }

    else{
        document.getElementById("days").textContent = `\D 0`;
        document.getElementById("percent").textContent = `0.00\%`;
    }
}

function myfunction()
{
    myvar = document.getElementById('second-portion');
    myv = document.getElementById('textbutton');
    myvar.classList.toggle("summa");
    myv.textContent = myv.textContent.includes('Show more') ? "Show less" : "Show more"
    // myv.innerText = "Show less";
    // console.log("showmore");
}

// For reset refresh the screen
function reset()
{
    if(confirm("Are you sure to reset?"))
    {
        const totalClicks = document.getElementById('num');
        totalClicks.innerText = 0;
        const finalvalue = 0;
        localStorage.setItem('number', JSON.stringify(finalvalue));
        showdetails(finalvalue);
        document.getElementById("second-portion").style.display = "none";
        document.getElementById("firstportion").style.display = "none";
        txt = "Reset in progress...";
        document.getElementById('popup').innerText = txt;
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
    else
    {
        document.getElementById("second-portion").style.display = "none";
        document.getElementById("firstportion").style.display = "none";
        txt = "Please Wait.......";
        document.getElementById('popup').innerText = txt;
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
    
}
function get_body(){

    var screen_height = window.innerHeight; 
    var screen_width = window.innerWidth;
    let body = document.getElementsByTagName('body')[0];
    // console.log(screen_width);
    body.style.width = screen_width;
    // console.log(screen_height);
    body.style.width = screen_height;
}

// once the program or document lode
document.onlode = get_body();
document.onlode = recall();
document.onlode = totalClick(0);

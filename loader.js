function loader()
{
    let myvar = setTimeout(showPage, 3000);
}

function showPage()
{
    document.getElementById("loader").style.display ="none";
    document.querySelector("body").style.display ="block";
}
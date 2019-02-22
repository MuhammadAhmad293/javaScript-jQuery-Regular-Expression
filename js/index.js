function openNav(){
    document.getElementById("sidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "170px";
}

var close = document.getElementById("closebtn");

    close.addEventListener("click", function(){
        document.getElementById("sidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    })
    
//------------------------------------------------------------------------

$("#one div:first").css("display", "block");
$("#one h3").click(function(){
    $(this).next().slideToggle(500);
})

//-------------------------------------------------------------------------

var imgList = document.querySelectorAll(".img-item");
var lightBoxCon = document.querySelector(".lightbox-container");
var close = document.getElementById("close");
var lightBoxImg = document.querySelector(".lightbox-img");
var imgs = [];
var imgIndex = 0;
var next = document.getElementById("next");
var prev = document.getElementById("prev");
for (var i = 0 ;i<imgList.length ;i++)
	{
		imgs.push(imgList[i])
		
		imgList[i].addEventListener("click", function(e){
			lightBoxCon.style.display = "block"; 
			
			var imgSrc = e.target.src;
			imgIndex = imgs.indexOf(e.target);
			
			lightBoxImg.style.backgroundImage = "url("+imgSrc+")";
		})
	}

next.addEventListener("click", function(){
	imgIndex++;
	
	if(imgIndex == imgs.length)
		{
			imgIndex = 0;
		}
	var currentImg = imgs[imgIndex].src;
	lightBoxImg.style.backgroundImage = "url("+currentImg+")";
})

prev.addEventListener("click", function(){
	imgIndex--;
	
	if(imgIndex < 0)
		{
			imgIndex = imgs.length-1;
		}
	var currentImg = imgs[imgIndex].src;
	lightBoxImg.style.backgroundImage = "url("+currentImg+")";
})
close.addEventListener("click", function(){
	lightBoxCon.style.display = "none"
})
document.addEventListener("keydown", function(e){
	if(e.keyCode == 27)
		{
	    	lightBoxCon.style.display = "none"	
		}
})

//--------------------------------------------------------------------

function timer(){
    var now = new Date();
    var eventDate = new Date(2020, 02, 10);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var Time = eventTime - currentTime;

    var s = Math.floor(Time / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24)-30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = "<h3>"+  d + " D"+"</h3>";
    document.getElementById("hours").innerHTML ="<h3>"+  h + " h"+"</h3>";
    document.getElementById("minutes").innerHTML = "<h3>"+  m + " m"+"</h3>";
    document.getElementById("seconds").innerHTML = "<h3>"+  s + " s"+"</h3>";

    setTimeout(timer, 1000);
}
timer();

//------------------------------------------------------------------------------

$(function(){
    var max = 100;

    $("textarea").keyup(function(){
        var length = $(this).val().length;
        var character = max - length;
        
        if(character<=0)
        {
            $("#char").text("your available character finished");
        }
        else
        {
            $("#char").text(character);
        }
    });
});

//-----------------------------------------------------------------------------

var userNAmeInput = document.querySelector("#uname input");
var userNameReg = /^[A-Z][a-z]{2,8}$/

var userMailInput = document.querySelector("#uemail input");
var userMailReg = /^[a-z0-9_A-Z]{1,10}[.-]?[a-z0-9_A-Z]{1,10}@[a-zA-Z0-9]{1,30}(\.[a-z]{2,6}){1,4}$/


userNAmeInput.addEventListener("blur", function () {
    var alert = document.querySelector("#uname .alert");
    var userName = userNAmeInput.value;
    if(userNameReg.test(userName) == false)
    {
        alert.style.display = "block"
    }
    else
    {
        alert.style.display = "none"
    }
})
userMailInput.addEventListener("blur", function () {
    var alert = document.querySelector("#uemail .alert");
    var userMail = userMailInput.value;
    if(userMailReg.test(userMail) == false)
    {
        alert.style.display = "block"
    }
    else
    {
        alert.style.display = "none"
    }
})




//-----------------------------------------------------------------------------

$("a").click(function(){
    var sectionId = $(this).attr("href");
    var positionSection = $(sectionId).offset().top;
    $("html, body").animate({scrollTop:positionSection}, 2000);
})
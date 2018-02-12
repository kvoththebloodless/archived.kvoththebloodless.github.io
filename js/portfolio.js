window.onscroll = function() {myfunction();};

$(".nav-item a, .navbar-brand").on("click", function(event){
   event.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
   $(".navbar-nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");

});


function myfunction()
{
	var navbar=document.getElementsByClassName('headercss');
	
	if($(window).scrollTop()==0)
		navbar[0].style.boxShadow="0px 0px 0px 0px";
	else
		navbar[0].style.boxShadow="1px 6px 6px -6px";
}
function gohere()
{


}

// function switchBackground(x)
// {section=document.getElementById("project-section");

//  switch(x.id)
//  {
	
//  	case "wegmans": section.style.backgroundImage = "url(images/moveappbanner.jpeg)";
//  }
// }
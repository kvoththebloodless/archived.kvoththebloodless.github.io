window.onscroll = function() {myfunction();};

function myfunction()
{
	var navbar=document.getElementsByClassName('headercss');
	
	if($(window).scrollTop()==0)
		navbar[0].style.boxShadow="0px 0px 0px 0px";
	else
		navbar[0].style.boxShadow="1px 6px 6px -6px";
}

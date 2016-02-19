function change()
{
	var dummy = document.getElementById("para");

	var bor_red = document.getElementById("bo_r").value;
	var bor_green = document.getElementById("bo_g").value;
	var bor_blue = document.getElementById("bo_b").value;
	var bor_width = document.getElementById("bo_w").value;
	var back_red = document.getElementById("ba_r").value;
	var back_green = document.getElementById("ba_g").value;
	var back_blue = document.getElementById("ba_b").value;
	
	if(isNaN(bor_red)==true||bor_red%1!=0||bor_red<0||bor_red>255)
	{
		alert("Enter a whole number from 0 to 255 for color values.");
	}
	else if(isNaN(bor_green)==true||bor_green%1!=0||bor_green<0||bor_green>255)
	{
		alert("Enter a whole number from 0 to 255 for color values.");
	}
	else if(isNaN(bor_blue)==true||bor_blue%1!=0||bor_blue<0||bor_blue>255)
	{
		alert("Enter a whole number from 0 to 255 for color values.");
	}
	else if(isNaN(back_red)==true||back_red%1!=0||back_red<0||back_red>255)
	{
		alert("Enter a whole number from 0 to 255 for color values.");
	}
	else if(isNaN(back_green)==true||back_green%1!=0||back_green<0||back_green>255)
	{
		alert("Enter a whole number from 0 to 255 for color values.");
	}
	else if(isNaN(back_blue)==true||back_blue%1!=0||back_blue<0||back_blue>255)
	{
		alert("Enter a whole number from 0 to 255 for color values.");
	}
	else if(bor_width != "thick" && bor_width != "thin" && bor_width != "medium")
	{
		alert("Enter thin, medium, or thick for border width.");
	}
	else
	{
		
		dummy.style.border = bor_width+" solid rgb("+bor_red+","+bor_green+","+bor_blue+")";
		dummy.style.backgroundColor = "rgb("+back_red+","+back_green+","+back_blue+")";
	}
}

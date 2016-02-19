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
	
	dummy.style.border = "thick solid rgb("+bor_red+","+bor_green+","+bor_blue+")";
	dummy.style.backgroundColor = "rgb("+back_red+","+back_green+","+back_blue+")";
}

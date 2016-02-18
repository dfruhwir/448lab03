function next()
{
	var myImgTag = document.getElementById("myImg");
	if (myImgTag.src.match("retreat.jpg"))
	{
		myImgTag.src = "waterfall.jpg";
	}
	else if (myImgTag.src.match("waterfall.jpg"))
	{
		myImgTag.src = "cat.jpg";
	}
	else if (myImgTag.src.match("cat.jpg"))
	{
		myImgTag.src = "joker.jpg";
	}
	else if (myImgTag.src.match("joker.jpg"))
	{
		myImgTag.src = "fists.jpg";
	}
	else if (myImgTag.src.match("fists.jpg"))
	{
		myImgTag.src = "jayhawk.jpg";
	}
	else if (myImgTag.src.match("jayhawk.jpg"))
	{
		myImgTag.src = "retreat.jpg";
	}
}
function prev()
{
	var myImgTag = document.getElementById("myImg");
	if (myImgTag.src.match("retreat.jpg"))
	{
		myImgTag.src = "jayhawk.jpg";
	}
	else if (myImgTag.src.match("jayhawk.jpg"))
	{
		myImgTag.src = "fists.jpg";
	}
	else if (myImgTag.src.match("fists.jpg"))
	{
		myImgTag.src = "joker.jpg";
	}
	else if (myImgTag.src.match("joker.jpg"))
	{
		myImgTag.src = "cat.jpg";
	}
	else if (myImgTag.src.match("cat.jpg"))
	{
		myImgTag.src = "waterfall.jpg";
	}
	else if (myImgTag.src.match("waterfall.jpg"))
	{
		myImgTag.src = "retreat.jpg";
	}
}

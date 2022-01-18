var colors=generateRandomColors(6);
var correctColor=document.querySelector("h2");
var square=document.querySelectorAll(".square");
var message=document.querySelector("#message");
var reset=document.querySelector("#reset");

correctColor.textContent=colors[Math.floor(Math.random()*6)];

reset.addEventListener("click", function(){

	colors=generateRandomColors(6);
	correctColor.textContent=colors[Math.floor(Math.random()*6)];

	for(var i=0; i<square.length; i++)
		square[i].style.background=colors[i];
});

function generateRandomColors(n)
{
	var arr=[];

	for(var i=0; i<n; i++)
	{
		var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);

		arr.push("rgb(" + r+ ", " + g + ", " + b + ")");
	};

	return arr;
};

for(var i=0; i<square.length; i++)
{
	square[i].style.background=colors[i];

	square[i].addEventListener("click", function(){

		if(this.style.background===correctColor.textContent)
		{
			message.textContent="CORRECT!";
			changeColors(correctColor);
			reset.textContent="PLAY AGAIN";
		}
		else
		{
			this.style.background="#232323";
			message.textContent="TRY AGAIN!";
		}

	});
};

function changeColors(color)
{
	for(var i=0; i<square.length; i++)
		square[i].style.background=color.textContent;
};
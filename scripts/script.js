window.onload = blockTitle;

function blockTitle(){
	var title = document.getElementById("title");
	title.style.display = "none"
}

function popInvitation() {
	
	const jsConfetti = new JSConfetti();
	jsConfetti.addConfetti();
	let myAudio = document.querySelector('#audio')
	myAudio.play()
	toggleButton();
	toggleTitle();
	document.getElementById("text").innerHTML=("Come and join your King on the 20th of November to celebrate his 22nd birthday in TRAPPED Missisauga!"+
												"<br>"+ "2273 Dundas St W" +"<br>"+ "Missisauga, ON L5K 2L8"+"<br>"+"Resturaunt shall be the nation's choice :)");
	imageAnimation();
}


function imageAnimation(){
	const bBoy = document.querySelector('img');
	bBoy.style.transitionDuration = '3s';
	bBoy.style.transform = `translate(85%, -20%) scale(1.2)`;

	setTimeout(() => {
		bBoy.style.transitionDuration = '0.6s';
		bBoy.style.transform = `translate(85%, -20%) scale(1)`;

	}, 3000);
}

function toggleButton(){
	var button = document.getElementById("button");
	if (button.style.display === "none") {
		button.style.display = "block";
	} else {
	  button.style.display = "none";
	}
}

function toggleTitle(){
	var title = document.getElementById("title");
	title.style.display = "block"

}

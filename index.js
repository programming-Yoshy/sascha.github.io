function searching() {
	let inhalt = document.getElementById("suchleiste").value
	
	if(inhalt === "mobs") {
		document.getElementById("suchleiste").value = ""
		window.open("mobs.html", "_self")
	} else if(inhalt === "redstone") {
		document.getElementById("suchleiste").value = ""
		window.open("redstone.html", "_self")
	}
}

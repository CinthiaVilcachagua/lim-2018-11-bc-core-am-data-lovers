const menuBtn = document.getElementById("id-menu-button");
const menuShow = document.getElementById("id-menu-show")
const loadMenu = () =>{
	if (menuShow.className === "show"){
		menuShow.className = "";
	}else{
		menuShow.className= "show";
	}
}
menuBtn.addEventListener("click", loadMenu);

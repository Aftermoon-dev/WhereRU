// Navbar System
var divlist = ['main_map', 'food', 'study','rest', 'shuttle'];

function mainnav_show(divname) {
    for(var i = 0; i < divlist.length; i++) {
        if(divname == divlist[i]) {
            document.getElementById("mainnav_sbox").selectedIndex = i;
            document.getElementById(divname).style.display = "";
        }
        else {
            document.getElementById(divlist[i]).style.display = "none";
        }
    }
}

function openPopup(url) {
    window.open(url, "WhereRU_popup", "width=500, height=800, toolbar=no, menubar=no, scrollbars=yes");
}
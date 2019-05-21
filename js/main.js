/* Side Menu Script */

// Div List Array
var divlist = ['main_map', 'food', 'study','rest', 'shuttle'];

function mainside_show(divname) {
    for(var i = 0; i < divlist.length; i++) {
        if(divname == divlist[i]) {
            document.getElementById(divname).style.display = "";
        }
        else {
            document.getElementById(divlist[i]).style.display = "none";
        }
    }
}

// Side Menu Open Check Variable
var open = false;

// Side Menu Function
function openMenu() {
    // Side Menu Div
    var sidemenu = document.getElementById('sideMenu');

    // Check Screen Size
    var mq = window.matchMedia('screen and (max-width:950px)');

    // If, not open sideMenu
    if(!open) {
        // If, not max-width:950px (PC)
        if(mq.matches == false) {
            // Set sideMenu Width
            sidemenu.style.width = "250px";
        }
        // If not (Mobile)
        else {
            // Set sideMenu Width
            sidemenu.style.width = "100px";
        }
        open = true;
    }
    // If, open sideMenu
    else {
        // Restore All Setting
        sidemenu.style.width = "0px";
        open = false;
    }
}

// Popup
function openPopup(url) {
    window.open(url, "WhereRU_popup", "width=500, height=800, toolbar=no, menubar=no, scrollbars=yes");
}
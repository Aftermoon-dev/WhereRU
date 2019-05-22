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
var sopen = false;

// Side Menu Function
function openMenu() {
    // Side Menu Div
    var sidemenu = document.getElementById('sideMenu');

    // Check Screen Size
    var mq = window.matchMedia('screen and (max-width:950px)');

    // If, not open sideMenu
    if(!sopen) {
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
        sopen = true;
    }
    // If, open sideMenu
    else {
        // Restore All Setting
        sidemenu.style.width = "0px";
        sopen = false;
    }
}

// Show Message Dialog
function showMessage(title, message) {
    var MessageDialog = document.getElementById('message');
    var D_Title = document.getElementById('m_title');
    var D_Message = document.getElementById('m_content');

    if(MessageDialog.style.display == "none") {
        D_Title.innerText = title;
        D_Message.innerHTML = message;
        MessageDialog.style.display = '';
    }
    else {
        MessageDialog.style.display = 'none';
    }
}

// e value : Select Item's ID (ex. gachonhall, collegeofit...)
function mapselects(e) {
    switch(e) {
        case 'gachonhall': 
            showMessage("가천관", "가천관이에요");
            break;
        case 'collegeofit':
            alert("IT대학");
            break; 
        default:
            alert(e);
            break;
    }
}
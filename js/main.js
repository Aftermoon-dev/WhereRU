/* Side Menu Script */

// Div List Array
var divlist = ['main_map', 'food', 'study','rest', 'shuttle'];

// Main Sidemenu Open Function
function mainside_show(divname) {
    // Get All Array's Element
    for(var i = 0; i < divlist.length; i++) {
        // if divname in divlist
        if(divname == divlist[i]) {
            // Show Div
            document.getElementById(divname).style.display = "";
        }
        // if not
        else {
            // Other Hide Div 
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

    D_Title.innerText = title;
    D_Message.innerHTML = message;
    MessageDialog.showModal();
}

// Map Icon Click Event
// e : Click Element's ID (ex. gachonhall, collegeofit....)
function mapselects(e) {
    switch(e) {
        case 'gachonhall': 
            showMessage("가천관", "가천관이에요");
            break;
        case 'collegeofit':
            showMessage("IT융합대학", "IT융합대학");
            break; 
        case 'visiontower':
                showMessage("비전타워", "비전타워");
            break;
        default:
            showMessage(e, "id는 " + e);
            break;
    }
}
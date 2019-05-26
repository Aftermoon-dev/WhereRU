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
            showMessage("가천관", 
                "<img src='./img/school/gachonhall.jpg' width='400' height='300'><br>대학 본부가 위치해있는 건물이며, 학생 쉼터 '라곰'이 1층에 있다.");
            break;
        case 'collegeofit':
            showMessage("IT융합대학", 
                "<img src='./img/school/it.jpg' width='400' height='300'><br>구) 새롬관<br>IT융합대학 학생들이 이용한다.");
            break; 
        case 'visiontower':
            showMessage("비전타워", 
                "<img src='./img/school/visiontower.jpg' width='400' height='300'><br>A동과 B동으로 나누어져 있으며, 분당선 가천대역과 연결되어 있는 건물이다.");
            break;
        case 'graduateschooledu':
            showMessage("교육대학원", 
                "<img src='./img/school/edu.jpg' width='400' height='300'><br>구) 아름관<br>사회과학대학, 예술대학 학생들이 이용하며, 지하에는 식당과 매점이 있다.");
            break;
        default:
            showMessage(e, "id는 " + e);
            break;
    }
}
window.onload = function() {
    // Shuttle Image Auto-Slide
    setInterval('slide("shuttle_pos")', 5000);
    setInterval('slide("pas_pos")', 5000);
}

// Div List Array
var divlist = ['main_map', 'food', 'cafe', 'study', 'store', 'shuttle'];

// Main Sidemenu Open Function
function mainside_show(divname) {
    openMenu();
    // Get All Array's Element
    var mq = window.matchMedia('screen and (max-width:450px)');
    for(var i = 0; i < divlist.length; i++) {
        // if divname in divlist
        if(divname == divlist[i]) {
            // Show Div
            changeBackground('./img/' + divlist[i] + '.jpg');
            document.getElementById(divname).style.display = "block";

            if(divname != 'main_map') {
                if(mq.matches == false) {
                    document.getElementById(divname + "_header").style.display = "block";
                }
            }
        }
        // if not
        else {
            // Other Hide Div 
            document.getElementById(divlist[i]).style.display = "none";
            if(divlist[i] != 'main_map') { 
                document.getElementById(divlist[i] + "_header").style.display = "none";
            }
        }
    }
}

// Change Background Image
function changeBackground(bgurl) {
    document.body.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%), url(' + bgurl + ')';
}

// Side Menu Open Check Variable
var sopen = false;

// Side Menu Function
function openMenu() {
    // Side Menu Div
    var sidemenu = document.getElementById('sideMenu');

    // Check Screen Size
    var mq = window.matchMedia('screen and (max-width:450px)');

    // If, not open sideMenu
    if(!sopen) {
        // If, not PC
        if(mq.matches == false) {
            // Set sideMenu Width
            sidemenu.style.width = "250px";
        }
        // If not (Mobile)
        else {
            // Set sideMenu Width
            sidemenu.style.width = "150px";
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
        case 'dormitory':
            showMessage("기숙사", 
                "<img src='./img/school/domi.jpg' width='400' height='300'><br>학생들이 생활하는 공간으로, 제1, 제2학생생활관으로 이루어져 있다.");
            break;
        case 'studenthall':
            showMessage("학생회관", 
                "<img src='./img/school/studenthall.jpg' width='400' height='300'><br>총학생회와 동아리실이 있는 건물이다.");
            break;
        case 'centrallib':
            showMessage("중앙도서관", 
                "<img src='./img/school/centrallib.jpg' width='400' height='300'><br>가천대학교의 중앙도서관이다. 각종 열람실 및 매점, 스터디룸이 있다.");
            break;
        case 'collegeofbionano':
            showMessage("바이오나노대학", 
                "<img src='./img/school/bionanocollege.jpg' width='400' height='300'><br>구) 진리관<br>바이오나노대학 학생들이 주로 이용하며, 지하에 동아리실이 있다.");
            break;
        case 'collegeofkm':
            showMessage("한의과대학", 
                "<img src='./img/school/collegeofkm.jpg' width='400' height='300'><br>구) 미래2관<br>한의과대학 학생들이 주로 이용한다.");
            break;
        default:
            showMessage(e, "id는 " + e);
            break;
    }
}

// Image Auto Slide
function slide(posname) {
    var slide = document.getElementsByName(posname);
    for(var i = 0; i < slide.length; i++) {
        if(slide[i].checked == true) {
            if(i == slide.length-1) {
                slide[0].checked = true;
            }
            else {
                slide[i+1].checked = true;
            }
            break;
        }
    }
}

// Cafe Menu Click Event
var open = false; 
function clicks(cdiv, pdiv) {
    var price = document.getElementById(pdiv);
    var content = document.getElementById(cdiv);
                
    if(price.style.display == 'none') {
        content.style.display = 'block';
        price.style.display = 'block';
    }
    else {
        content.style.display = 'fixed';
        price.style.display = 'none';
    }  
}
// Side Menu Open Check Variable
var sopen = false;

// Onload Event
window.onload = function() {
    // Shuttle Image Auto-Slide
    setInterval('slide("shuttle_pos")', 5000);

    // Cafe 1 Image Auto-Slide
    setInterval('slide("pas_pos")', 5000);

    // Cafe 2 Image Auto-Slide
    setInterval('slide("two_pos")', 5000);
}

// Div List Array
var divlist = ['main_map', 'food', 'cafe', 'study', 'store', 'shuttle'];

// Main Sidemenu Open Function
function mainside_show(divname) {
    // If Menu is open, close.
    if(sopen == true) openMenu();
    // Get All Array's Element
    var mq = window.matchMedia('screen and (max-width:450px)');
    for(var i = 0; i < divlist.length; i++) {
        // if divname in divlist
        if(divname == divlist[i]) {
            // Change Background Image
            changeBackground('./img/' + divlist[i] + '.jpg');

            // Show Content
            document.getElementById(divname).style.display = "block";

            // Show Sub Header
            if(divname != 'main_map') {
                if(mq.matches == false) {
                    document.getElementById(divname + "_header").style.display = "block";
                }
            }
        }
        // if not
        else {
            // Hide Other Content
            document.getElementById(divlist[i]).style.display = "none";

            // Hide Other Sub Header
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
    // Get Message Dialog
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
        case 'collegeofart1':
            showMessage("예술대학1", 
                "<img src='./img/school/art1.jpg' width='400' height='300'><br>구) 창조관<br>예술대학 학생들이 주로 이용한다.");
            break;
        case 'collegeofart2':
            showMessage("예술대학2", 
                "<img src='./img/school/art2.jpg' width='400' height='300'><br>구) 예음관<br>예술대학 학생들이 주로 이용하며, 대형홀인 예음관이 있는 건물이다.");
            break;
        case 'collageoflaw':
            showMessage("법과대학", 
                "<img src='./img/school/law.jpg' width='400' height='300'><br>비전타워 A동 건물로, 법과대학 학생들이 주로 이용한다.");
            break;
        case 'bionanoresearch':
            showMessage("바이오나노연구원", 
                "<img src='./img/school/bionanoresearch.jpg' width='400' height='300'><br>구) 미래관<br>바이오나노대학 연구진분들이 주로 이용한다.");
            break;     
        case 'collegeofengineering1':
            showMessage("공과대학1", 
                "<img src='./img/school/eng1.jpg' width='400' height='300'><br>구) 공학관<br>공과대학 학생들이 주로 아용한다.");
            break; 
        case 'collegeofengineering2':
            showMessage("공과대학2", 
                "<img src='./img/school/eng2.jpg' width='400' height='300'><br>구) 창의관<br>공과대학 학생들이 주로 이용한다.");
            break;
        case 'rotc':
            showMessage("학군단", 
                "<img src='./img/school/rotc.jpg' width='400' height='300'><br>구) 복지관<br>학군단 및 태권도학과 학생들이 주로 이용한다.");
            break;
        case 'graduateschool':
            showMessage("대학원", 
                "<img src='./img/school/graduateschool.jpg' width='400' height='300'><br>1층은 대학원, 2/3층은 글로벌미래교육원 건물로 사용되고 있다.");
            break;
        case 'globalcenter':
            showMessage("글로벌센터", 
                "<img src='./img/school/global.jpg' width='400' height='300'><br>구) 국제어학원<br>입학처와 교양 영어 강의실이 있는 건물로, G.space라는 학생 쉼터가 내부에 있다.");
            break;
        case 'industryunivcoophall':
            showMessage("산학협력관", 
                "<img src='./img/school/coop.jpg' width='400' height='300'><br>구) 웅지관<br>과실 및 과동아리, 교수실 등이 있으며 5층에 공동 샤워실이 있다.");
            break;
        case 'industryunivcoophall':
            showMessage("산학협력관", 
                "<img src='./img/school/coop.jpg' width='400' height='300'><br>구) 웅지관<br>과실 및 과동아리, 교수실 등이 있으며 5층에 공동 샤워실이 있다.");
            break;
        case 'pinwheelgarden':
            showMessage("바람개비동산", 
                "<img src='./img/school/pinwheel.jpg' width='400' height='300'><br>");
            break;
        case 'electronicinfolib':
            showMessage("전자정보도서관", 
                "비전타워와 가까이 있는 도서관이다.");
            break;
        default:
            showMessage("정보 없음", "관리자가 정보를 등록하지 않았습니다.");
    }
}

// Image Auto Slide
function slide(posname) {
    // Get Slide Pos Elements
    var slide = document.getElementsByName(posname);
    for(var i = 0; i < slide.length; i++) {
        // If Checked
        if(slide[i].checked == true) {
            // If last slide
            if(i == slide.length-1) {
                // go to first slide
                slide[0].checked = true;
            }
            else {
                // go to next slide
                slide[i+1].checked = true;
            }
            // escape for loop
            break;
        }
    }
}

// Cafe Menu Click Event 
function clicks(cdiv, pdiv) {
    // Get Content & Price div
    var price = document.getElementById(pdiv);
    var content = document.getElementById(cdiv);
    
    // if Price Div not open
    if(price.style.display == 'none') {
        // Open Price
        content.style.display = 'block';
        price.style.display = 'block';
    }
    else {
        // Close Price
        content.style.display = 'fixed';
        price.style.display = 'none';
    }  
}

function showFood(type) {
    var allstore = document.getElementsByClassName('foodstore');
    var allcheck = document.getElementsByName('food_check');
    var all = document.getElementById('food_all');

    for(var i = 0; i < allcheck.length; i++) {
        allcheck[i].checked = false;
    }

    for(var i = 0; i < allstore.length; i++) {
        allstore[i].style.display = 'none';
    }

    if(type != 'all') {
        var types = document.getElementById('food_' + type);
        var typeinfo = document.getElementsByClassName(type);

        if(all.checked == true) all.checked = false;

        for(var i = 0; i < typeinfo.length; i++) {
            typeinfo[i].style.display = 'inline-block';
        }        
        types.checked = true;
    }
    else {
        
        if(all.checked == true) {
            for(var i = 0; i < allcheck.length; i++) {
                allcheck[i].checked = true;
            }
            for(var i = 0; i < allstore.length; i++) {
                allstore[i].style.display = 'inline-block';
            }
        }
        else {
            for(var i = 0; i < allcheck.length; i++) {
                allcheck[i].checked = false;
            }
            for(var i = 0; i < allstore.length; i++) {
                allstore[i].style.display = 'none';
            }
        }
    }
}

// Food Menu Click Event
function food_clicks(element) {
    var E = document.getElementById(element);

    if (E.style.display == 'none') {
        var slist = document.getElementsByClassName('storeinfo');
        for(var i = 0; i < slist.length; i++) {
            slist[i].style.display = 'none';
        }
        E.style.display = 'block';
    } else {
        E.style.display = 'none';
    }
}

function showStore(pNum) {
    var storepic = document.getElementsById('storepic');
    storepic[pNum-1].style.display = 'block';
}
// e value : Select Item's ID (ex. gachonhall, collegeofit...)
function mapselects(e) {
    switch(e) {
        case 'gachonhall': 
            alert("가천관임ㅋ");
            break;
        case 'collegeofit':
            alert("IT대학");
            break; 
        default:
            alert(e);
            break;
    }
}
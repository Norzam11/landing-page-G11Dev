//smothscrooll

let posY = 0;
let jarak = 5;
function smoothScroll(id){
    let target = document.getElementById(id).offsetTop;//jarak antara atas dan div

    let scroolAnimate= setTimeout(function () {
        smoothScroll(id);        
    },5)//fungsi dan waktunya
    posY += jarak;
    //berhenti pada bagian tertentu 
    if(posY >= target){
        clearTimeout(scroolAnimate);
        posY = 0;
    }else{
        window.scroll(0, posY)//x dan y
    }

    return false;
}

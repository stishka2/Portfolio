
window.onload = main;

let left = 0;


function main(){
    moveLeftCloud();
    moveRightCloud();
}

let leftCloudId = setInterval(moveLeftCloud, 10)


function moveLeftCloud() {

    const leftCloud = document.getElementById("leftCloud");
    
    if (left == 300) {
        clearInterval(leftCloudId);
    }
    else {
        left++;
        leftCloud.style.left = left + "px";
    }
    
}

let right = 0;
let rightCloudId = setInterval(moveRightCloud, 10)
console.log(right)

function moveRightCloud() {
    const rightCloud = document.getElementById("rightCloud");
    

    if(right == 300) {
        clearInterval(rightCloudId);
    }
    else {
        right++;
        rightCloud.style.right = right + "px";
    }

}


function mode() {
    const theme_top = document.getElementById("top");
    const theme_bottom = document.getElementById("bottom")
    const theme_body = document.body;
    
    

    theme_top.classList.toggle("dark-mode");
    theme_body.classList.toggle("dark-mode-body")
    theme_bottom.classList.toggle("dark-mode");
   

}

function showMenu() {
    const links = document.getElementById("nav");
    if(links.style.display == "flex"){
        links.style.display = "none";
    }
    else {
        links.style.display = "flex";
    }
}
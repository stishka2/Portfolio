
window.onload = main;

let left = 0;


function main(){
    moveLeftCloud();
    moveRightCloud();
    hideMenu();
}

let leftCloudId = setInterval(moveLeftCloud, 10)


function moveLeftCloud() {

    const leftCloud = document.getElementById("leftCloud");
    
    if (left == 230) {
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
    

    if(right == 230) {
        clearInterval(rightCloudId);
    }
    else {
        right++;
        rightCloud.style.right = right + "px";
    }

}


function showMenu() {
    const links = document.getElementById("nav");
    links.classList.toggle("active");
}

function hideMenu() {
    const links = document.getElementById("nav");

    links.classList.remove("active");
}
let count = localStorage.getItem("jarCount") || 0;

document.getElementById("count").innerText = count;

for (let i = 0; i < count; i++){
    placeItem();
}

function addItem(){

    count++;
    localStorage.setItem("jarCount", count);

    document.getElementById("count").innerText = count;

    placeItem();
}

function placeItem(){

    let item = document.createElement("img");
    item.src = "item.png";
    item.className = "item";

    let x = Math.random()*220;
    let y = Math.random()*280;

    item.style.left = x + "px";
    item.style.bottom = y + "px";

    document.getElementById("items").appendChild(item);
}
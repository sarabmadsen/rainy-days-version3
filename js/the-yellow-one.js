const sizeButton = document.querySelectorAll(".box");

sizeButton.forEach(function(button){
    button.onclick = function(event){
        event.target.classList.toggle("box-clicked");
    }
})




const sizeButton = document.querySelectorAll(".box");

sizeButton.forEach(function(button){
    button.onclick = function(event){
        event.target.classList.toggle("box-clicked");
    }
})



const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const url = "https://sanobo.no/rainy-days/wp-json/wc/store/products/" + id;
console.log(url);

const title = document.querySelector("title");
const h1 = document.querySelector("h1");
const imageContainer = document.querySelector(".image");
const textContainer = document.querySelector(".text");
const main = document.querySelector("main");

async function fetchJacket() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);
        
        h1.innerHTML += `${details.name}`
        imageContainer.innerHTML += `<img src="${details.images[0].src}" alt="${details.images[0].alt}" />`
        textContainer.innerHTML += `${details.short_description}
                                    <p>${details.description}</p>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <p>(${details.review_count})</p>
                                    </div>
                                    <div class="heart">
                                        <i class="far fa-heart"></i>
                                    </div>`
    } catch(error) {
        console.log(error);
        main.innerHTML = error;
    }

}



fetchJacket();


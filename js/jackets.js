// Vurdere å fjerne hele delen med refine search - om ikke tid til å gjøre den funksjonell

const url = "https://sanobo.no/rainy-days/wp-json/wc/store/products";

const resultsContainer = document.querySelector(".results");

async function getJackets() {

    const response = await fetch(url);

    const results = await response.json();
    
    console.log(results);

    resultsContainer.innerHTML = "";

    for(let i = 0; i < results.length; i++) {

        resultsContainer.innerHTML += `<div class="jacket">
                                        <div class="image">
                                            <img class="cover" src="${results[i].images[0].src}" alt="The yellow one" />
                                        </div>
                                        <div class="text">
                                            <h2>${results[i].name}</h2>
                                            <p>${results[i].prices.currency_code} ${results[i].prices.price}</p>
                                            <div class="stars">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <p>(${results[i].review_count})</p>
                                            </div>
                                            <div class="heart">
                                                <i class="far fa-heart"></i>
                                            </div>
                                            <div class="add">
                                                <a class="button" href="jackets/the-yellow-one.html">Explore</a>
                                            </div>
                                        </div>
                                    </div>`;
    }
}

getJackets();

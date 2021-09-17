

function rndRestaurants () {
    
    

    const restaurants = ["Kneaders", "Sweeto Burrito", "Magleby's Fresh", "The Smoking Apple", "The Pizza Factory", "Los Hermanos", "Arby's", "Greek-n-Go 2.o", "The Italian Place"]
    const random = Math.floor(Math.random() * restaurants.length);
    const node = document.createTextNode(restaurants[random]);
    const yay = document.querySelector("#chocolate");

    yay.appendChild(node)
   

}

const tasty = document.querySelector("#yummy")
tasty.addEventListener('click', rndRestaurants)



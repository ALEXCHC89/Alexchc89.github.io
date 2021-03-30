let cards = document.getElementsByClassName('card');

const sneakers = [
    { name: "Adidas", model: "Superstar", description: "Originally released in 1969, the Adidas Superstar is one of the longest-lasting classic sneakers.", src: "https://i.insider.com/599ee907289cc61f008b5372?width=800&format=jpeg&auto=webp", href: "http://adidas.7eer.net/c/196318/264102/4270?u=http%3A%2F%2Fwww.adidas.com%2Fus%2Fsuperstar-shoes%2FC77124.html&subid2=1617077102622a5mcc8unz&subId3=xid:fr1617077106575fii"},
    { name: "Adidas", model: "Stan Smith", description: "The Adidas Stan Smith is such an iconic shoe that it will likely live on in the brand's line of products forever.", src: "https://i.insider.com/599ee913614d7949178b517f?width=800&format=jpeg&auto=webp", href: "http://adidas.7eer.net/c/196318/264102/4270?u=http%3A%2F%2Fwww.adidas.com%2Fus%2Fstan-smith-shoes%2FM20324.html&subid2=1617077102622a08givp1d&subId3=xid:fr1617077106575fec"},
    { name: "Nike", model: "Air Force 1", description: "The Air Force 1 originally debuted in 1982 as Nike's premier basketball sneaker.", src: "https://i.insider.com/599efa38289cc61f008b54ca?width=800&format=jpeg&auto=webp", href: "https://www.nike.com/t/air-force-1-07-mens-shoe-5QFp5Z/CW2288-111"},
    { name: "Nike", model: "Air Jordan 1 High", description: "In 1985, Michael Jordan changed the game with a pair of black and red sneakers that he wore against NBA rules.", src: "https://i.insider.com/5a593372f421491f008b4d61?width=800&format=jpeg&auto=webp", href: "https://www.flightclub.com/air-jordans/air-jordan-1"},
    { name: "Puma", model: "Suede Classic", description: "The Suede Classic is the most popular design the brand has ever made, and that can be attributed to its amazing quality and style.", src: "https://i.insider.com/599eeb54289cc620008b537c?width=800&format=jpeg&auto=webp", href: "http://www.gopjn.com/t/S0BMR0lEQERGRklFS0BMTEZJQw?url=http%3A%2F%2Fus.puma.com%2Fen_US%2Fpd%2Fsuede-classic%252B-men%25E2%2580%2599s-sneakers%2Fpna352634.html%3Fdwvar_pna352634_color%3D64%23start%3D2&sid=1617077102622awueefsyq|xid:fr1617077106576cja"},
    { name: "Converse", model: "Chuck Taylor", description: "The shoe is so popular, it once was a the military-issued footwear for soldiers to use recreationally.", src: "https://i.insider.com/599ef808614d791b008b5678?width=800&format=jpeg&auto=webp", href: "http://www.anrdoezrs.net/links/6415797/type/dlg/sid/1617077102622awez2g55v-xid-fr1617077106576fbb/https://store.nike.com/us/en_us/pd/converse-chuck-taylor-all-star-high-top-unisex-shoe/pid-11214176/pgid-11593146"},
    { name: "Vans", model: "Authentic", description: "The Authentic was once the go-to skate shoe in the 60s, but while its technology has since become outdated, the style remains.", src: "https://i.insider.com/599efb7b289cc61e008b550d?width=800&format=jpeg&auto=webp", href: "https://www.vans.com/shop/shoes-classics-authentic"},
];

for (let i = 0; i < cards.length; i++) {
    let h3 = cards[i].getElementsByTagName("h3")[0];
    let small = cards[i].getElementsByTagName("small")[0];
    let p = cards[i].getElementsByTagName("p")[0];

    h3.innerText = sneakers[i].name;
    small.innerText = `MODEL: ${sneakers[i].model}`
    p.innerText = p.innerText.replace("DESCRIPTION", sneakers[i].description)

    const img = document.createElement("img");
    img.src = sneakers[i].src;
    img.onclick = function() {
        window.location.href = sneakers[i].href;
    };
    img.width = 150;

    cards[i].appendChild(img);

    // const link = document.createElement("link");
    // link.href = sneakers[i].href;
    
    // cards[i].appendChild(link);

    
} 

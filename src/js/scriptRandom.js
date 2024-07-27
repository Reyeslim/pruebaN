const imagenesRandom = ['../assets/imgBackground/ameenfahmy-7RZj4IrPT9Y-unsplash.jpg',
    '../assets/imgBackground/ishan-seefromthesky-rj8fMHNPXbg-unsplash.jpg',
'../assets/imgBackground/benjamin-elliott-F1U2eSWYV18-unsplash.jpg',
'../assets/imgBackground/dhvani-patel-wqkJZLsT9LY-unsplash.jpg',
'../assets/imgBackground/edgar-chaparro-BU0CttmE7TA-unsplash.jpg',
'../assets/imgBackground/francesco-ungaro-0NivydVzI00-unsplash.jpg',
'../assets/imgBackground/jonathan-greenaway-1E5ql6YSxfw-unsplash.jpg',
'../assets/imgBackground/jono-hirst-JduZyOCGZKc-unsplash.jpg',
'../assets/imgBackground/luke-miller-KqcCR_vAHBk-unsplash.jpg',
'../assets/imgBackground/luke-miller-ZsCF6phPCfc-unsplash.jpg',
'../assets/imgBackground/manos-chainakis-aGZdRBl9jaw-unsplash.jpg',
'../assets/imgBackground/michael-monahan-5hbtzLQWeEs-unsplash.jpg',
'../assets/imgBackground/mike-swigunski-ueBmz9K8zTg-unsplash.jpg',
'../assets/imgBackground/nataliya-melnychuk-aDuimvf3f14-unsplash.jpg',
'../assets/imgBackground/patrycja-chociej-ridmdLS6QbY-unsplash.jpg'
]

    
const cambioImagenes = () => {
    const body = document.body
    const imagenesRandom2 = Math.floor(Math.random() * imagenesRandom.length)
    
    body.style.backgroundImage = `url(${imagenesRandom[imagenesRandom2]})`
    
}
setInterval(cambioImagenes,15000)

cambioImagenes()

import { imgElements, ProductDetail, priceLevel } from "./helperJs.js"

const createPost = () => {
    const mainDiv = document.querySelector('.mainDiv')
    const h3 = document.createElement('h3')
    const img = document.createElement('img')
    const description = document.createElement('p')

        // create image and h3 tag
    img.setAttribute('src', './img/shirt.jpeg')
    img.setAttribute('alt', 'this is an image of shirt')
    h3.classList.add('mainHeader')
    h3.innerHTML = ProductDetail
    h3.style.fontSize = '25px'
    h3.style.fontWeight = 'normal'
    mainDiv.append(img, h3)

        // create button
    const button = document.createElement('button')
    button.innerText = 'Change Background Color'
    button.classList.add('btn')
    button.classList.add('btn-outline-success')
    mainDiv.append(button)  
  
    // price level
    if (imgElements.price >= priceLevel.expensive){
        description.innerHTML = `<small>The Product Is Too Expensive.<small/>`
        mainDiv.append(description)
    } else if (imgElements.price <= priceLevel.expensive && 
        imgElements.price >= priceLevel.higher_than_medium_price) {
            description.innerHTML = `<small>The Product Is Not Too Expensive.<small/>`
            mainDiv.append(description)
    } else if (imgElements.price <= priceLevel.higher_than_medium_price &&
        imgElements.price >= priceLevel.medium_price
        ){
            description.innerHTML = `<small>The Product Is Medium Price.<small/>`
            mainDiv.append(description)    
        } else if (imgElements.price <= priceLevel.medium_price &&
            imgElements.price >= priceLevel.lower_than_medium_price) {
                description.innerHTML = `<small>The Product Is Lower Than Medium Price.<small/>`
                mainDiv.append(description)    
    } else if (imgElements.price <= priceLevel.lower_than_medium_price &&
        imgElements.price >= priceLevel.cheap) {
            description.innerHTML = `<small>The Product Is Too Cheap.<small/>`
            mainDiv.append(description) 
    } else {
        description.innerHTML = `<small>The Product's price is less than 20 $   .<small/>`
        mainDiv.append(description) 
    }

    const changeBaCol = () => {
        mainDiv.style.backgroundColor  === '' ?  mainDiv.style.backgroundColor  = 'yellow' :
         mainDiv.style.backgroundColor  === 'white' ? mainDiv.style.backgroundColor = 'yellow': 
         mainDiv.style.backgroundColor = 'white'
    }
    

    //button click
    button.addEventListener('click', changeBaCol)
}   

createPost()

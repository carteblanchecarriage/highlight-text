let h1 = document.querySelectorAll('h1');
let h2 = document.querySelectorAll('h2');
let p = document.querySelectorAll('p');
let div1 = document.getElementById('div1')
let div2 = document.getElementById('div2')

/* Find all the letters 'e', replace them with a new span element and make them a random color. 
Make the background color of the body the opposite/complimentary color*/
function searchAndColor() {
    const a = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const c = Math.floor(Math.random() * 255)
    let rgbValue = `rgb(${a}, ${b}, ${c})`;
    let rgbValue2 = `rgb(${255 - a}, ${255 - b}, ${255 - c})`;

    p.forEach(function (node) {
        let searchString = node.innerText;
        node.innerText = '';
        for (let i = 0; i < searchString.length; i++) {
            if (searchString[i].toLowerCase() === 'e') {
                let spanLetter = document.createElement('span');
                spanLetter.innerHTML = searchString[i];
                node.append(spanLetter);
                spanLetter.style.color = rgbValue;
            } else {
                node.innerHTML += searchString[i]
            }
        }
        document.body.style.backgroundColor = rgbValue2;
    })

    h1.forEach(function (node) {
        let searchString = node.innerText;
        node.innerText = '';
        for (let i = 0; i < searchString.length; i++) {
            if (searchString[i].toLowerCase() === 'e') {
                let spanLetter = document.createElement('span');
                spanLetter.innerHTML = searchString[i];
                node.append(spanLetter);
                spanLetter.style.color = rgbValue;
            } else {
                node.innerHTML += searchString[i]
            }
        }
    })

    h2.forEach(function (node) {
        let searchString = node.innerText;
        node.innerText = '';
        for (let i = 0; i < searchString.length; i++) {
            if (searchString[i].toLowerCase() === 'e') {
                let spanLetter = document.createElement('span');
                spanLetter.innerHTML = searchString[i];
                node.append(spanLetter);
                spanLetter.style.color = rgbValue;
            } else {
                node.innerHTML += searchString[i]
            }
        }
    })

    div1.style.backgroundColor = rgbValue;
    div2.style.backgroundColor = rgbValue2;
    div1.innerHTML = rgbValue;
    div2.innerHTML = rgbValue2;
}

div1.addEventListener('click', searchAndColor)

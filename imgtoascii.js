const { Image } = require('image-js')
const fs = require('fs')
Image.load('./img.jpeg').then(function (image) {
    let characters = "@%#*+=-:. "
    const size = Math.round(255/characters.length)
    let grey = image.resize({ width: 1000, height: 400 }).grey()
    let finalimg = ""
    

    for (let i = 0; i < grey.height; i++) {
        for (let j = 0; j < grey.width; j++) {
            let index = Math.floor(grey.getPixelXY(j, i)[0] / size)
            finalimg += j == grey.width - 1 ? `${characters[index]}\n` : `${characters[index]}`
        }

    }
    fs.writeFile("./image.txt", finalimg, function (error) {
        if (error) {
            console.log(error);
        }
    })

});



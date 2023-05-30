// HASTA AQUI LLEGUE PROFE SE ME QUEMO LA CABEZA JAJA ESPERO LO LEA. TRABAJO HONESTO NADA DE GPT
const range_vision = (n) => {
    let numeroAString = n.toString();
    let numArray = []
    let rangoDeVision = [];
    if (!!!Number(n) || Math.sign(n) == - 1) {
        return "Ingrese un Número Positivo válido mayor a 0 ";
    }
    for (let i = 0; i < numeroAString.length; i++) {
        numArray.push(numeroAString[i])

    }

    for (let indiceArray = 0; indiceArray < numArray.length - 1; indiceArray++) {
        let obj = {
            num:numArray[indiceArray],
            rangoVision:[]
        }
        for (let siguienteIndice = indiceArray + 1; siguienteIndice < numArray[indiceArray + 1]; siguienteIndice++) {

            if (numArray[siguienteIndice] == undefined) {
                console.log("es undefined");
                let arrayReverse = numArray.reverse()
             
                arrayReverse.forEach((num,index) => {
                    console.log(`rango de vision de { ${numArray[indiceArray]} } hasta: ${arrayReverse[index +1]}`)
                    if (arrayReverse[index +1] !== undefined) {
                        obj.rangoVision.push(arrayReverse[index +1])
                        rangoDeVision.push(obj)
                    }
                    
                })
                
            } else {
                console.log(`rango de vision de { ${numArray[indiceArray]} } hasta: ${numArray[siguienteIndice]}`)
                obj.rangoVision.push(numArray[siguienteIndice])
                rangoDeVision.push(obj)
            }

        }
        console.log("/n");
    }
    rangoDeVision.forEach((el, index) => {
        console.log(rangoDeVision);
       /*  rangoDeVision[index].rangoVision = rangoDeVision[index].rangoVision.reduce((acc, item) => {
            if (item !== undefined) {
                return acc = Number(acc) + Number(item)    
            }
            
        }) */
    })
};
range_vision(34315)
module.exports = { range_vision };

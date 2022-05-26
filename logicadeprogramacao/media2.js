var janeiro = 6250
var fevereiro = 6655
var marco = 2122.22
var abril = 9588
var media = (janeiro + fevereiro + marco + abril)/4

if(media >= 5000) {
    console.log(`Parabéns vc vai receber um abono pois vendeu um tanto de ${media} nos últimos 4 meses`)
} else {
    console.log(`Infelizmente nao bateu a meta pois vendeu apenas ${media} , talvez na proxima`)
}


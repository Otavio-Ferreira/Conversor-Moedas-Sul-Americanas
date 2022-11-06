function useApi(){
    
    //const api = 'https://economia.awesomeapi.com.br/last/BRL-USD,BRL-ARS,BRL-VEF,BRL-PYG,BRL-UYU,
    //BRL-COP,BRL-PEN,BRL-BOB,BRL-CLP,BRL-PYG'

    var entrada = document.getElementById('entrada').value
    var resp = document.getElementById('res')

    var select = document.getElementById('seletor');
    var valor = select.options[select.selectedIndex].value

    if(valor == 1){
        const api = 'https://economia.awesomeapi.com.br/last/'
        const moedas = 'BRL-ARS'
        
        fetch(api + moedas)
        .then(function(response){
            return response.json()
        })
        .then(function(data){

            var moeda = data.BRLARS
            var valorconvertido = (moeda.low) * entrada
            var final = valorconvertido.toLocaleString('es-AR', {style: 'decimal'})
            resp.innerHTML = final
           
        })
    } 
    
    else if(valor == 2){
        const api = 'https://economia.awesomeapi.com.br/last/'
        const moedas = 'BRL-BOB'
        
        fetch(api + moedas)
        .then(function(response){
            return response.json()
        })
        .then(function(data){

            var moeda = data.BRLBOB
            var valorconvertido = (moeda.low) * entrada
            var final = valorconvertido.toLocaleString('es-BO', {style: 'decimal'})
            resp.innerHTML = final
           
        })
    }

    else if(valor == 3){
        const api = 'https://economia.awesomeapi.com.br/last/'
        const moedas = 'BRL-CLP'
        
        fetch(api + moedas)
        .then(function(response){
            return response.json()
        })
        .then(function(data){

            var moeda = data.BRLCLP
            var valorconvertido = (moeda.low) * entrada
            var final = valorconvertido.toLocaleString('es-CL', {style: 'decimal'})
            resp.innerHTML = final
           
        })
    }

    else if(valor == 4){
        const api = 'https://economia.awesomeapi.com.br/last/'
        const moedas = 'BRL-COP'
        
        fetch(api + moedas)
        .then(function(response){
            return response.json()
        })
        .then(function(data){

            var moeda = data.BRLCOP
            var valorconvertido = (moeda.low) * entrada
            var final = valorconvertido.toLocaleString('es-CO', {style: 'decimal'})
            resp.innerHTML = final
           
        })
    }

    else if(valor == 5){
        const api = 'https://economia.awesomeapi.com.br/last/'
        const moedas = 'BRL-USD'
        
        fetch(api + moedas)
        .then(function(response){
            return response.json()
        })
        .then(function(data){

            var moeda = data.BRLUSD
            var valorconvertido = (moeda.high) * entrada
            var final = valorconvertido.toLocaleString('en-US', {style: 'decimal'})
            resp.innerHTML = final
           
        })
    }

    else if(valor == 6){
        const api = 'https://economia.awesomeapi.com.br/last/'
        const moedas = 'BRL-PYG'
        
        fetch(api + moedas)
        .then(function(response){
            return response.json()
        })
        .then(function(data){

            var moeda = data.BRLPYG
            var valorconvertido = ((moeda.low) * entrada)* 1000
            var final = valorconvertido.toLocaleString('es-PY', {style: 'decimal'})
            resp.innerHTML = final
           
        })
    }

    else if(valor == 7){
        const api = 'https://economia.awesomeapi.com.br/last/'
        const moedas = 'BRL-PEN'
        
        fetch(api + moedas)
        .then(function(response){
            return response.json()
        })
        .then(function(data){

            var moeda = data.BRLPEN
            var valorconvertido = (moeda.low) * entrada
            var final = valorconvertido.toLocaleString('es-PE', {style: 'decimal'})
            resp.innerHTML = final
           
        })
    }

    else if(valor == 8){
        const api = 'https://economia.awesomeapi.com.br/last/'
        const moedas = 'BRL-UYU'
        
        fetch(api + moedas)
        .then(function(response){
            return response.json()
        })
        .then(function(data){

            var moeda = data.BRLUYU
            var valorconvertido = (moeda.low) * entrada
            var final = valorconvertido.toLocaleString('es-UY', {style: 'decimal'})
            resp.innerHTML = final
           
        })
    }

    else if(valor == 9){
        const api = 'https://economia.awesomeapi.com.br/last/'
        const moedas = 'BRL-VEF'
        
        fetch(api + moedas)
        .then(function(response){
            return response.json()
        })
        .then(function(data){

            var moeda = data.BRLVEF
            var valorconvertido = (moeda.high) * entrada
            var final = valorconvertido.toLocaleString('es-VE', {style: 'decimal'})
            resp.innerHTML = final
           
        })
    }

 
}

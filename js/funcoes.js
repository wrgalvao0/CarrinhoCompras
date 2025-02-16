function adicionarCelular(){
    let totalCelular = parseFloat(document.getElementById('total-celular').innerHTML)
    let quantidadeCelular = parseInt(document.getElementById('quantidade-celular').innerHTML)
    let valorCelular = parseFloat(document.getElementById('valor-celular').innerHTML)
    quantidadeCelular++
    totalCelular = quantidadeCelular * valorCelular
    document.getElementById('total-celular').innerHTML = totalCelular
    document.getElementById('quantidade-celular').innerHTML = quantidadeCelular
    return totalCelular
}

function retirarCelular(){
    let totalCelular = parseFloat(document.getElementById('total-celular').innerHTML)
    let quantidadeCelular = parseInt(document.getElementById('quantidade-celular').innerHTML)
    let valorCelular = parseFloat(document.getElementById('valor-celular').innerHTML)
    if(quantidadeCelular > 0){
        quantidadeCelular--
    }
    else{
        quantidadeCelular = 0
    }
    totalCelular = quantidadeCelular * valorCelular
    document.getElementById('total-celular').innerHTML = totalCelular
    document.getElementById('quantidade-celular').innerHTML = quantidadeCelular
    return totalCelular
}

function adicionarNotebook(){
    let totalNotebook = parseFloat(document.getElementById('total-notebook').innerHTML)
    let quantidadeNotebook = parseInt(document.getElementById('quantidade-notebook').innerHTML)
    let valorNotebook = parseFloat(document.getElementById('valor-notebook').innerHTML)
    quantidadeNotebook++
    totalNotebook = quantidadeNotebook * valorNotebook
    document.getElementById('total-notebook').innerHTML = totalNotebook
    document.getElementById('quantidade-notebook').innerHTML = quantidadeNotebook
    return totalNotebook
}

function retirarNotebook(){
    let totalNotebook = parseFloat(document.getElementById('total-notebook').innerHTML)
    let quantidadeNotebook = parseInt(document.getElementById('quantidade-notebook').innerHTML)
    let valorNotebook = parseFloat(document.getElementById('valor-notebook').innerHTML)
    if(quantidadeNotebook > 0){
        quantidadeNotebook--
    }
    else{
        quantidadeNotebook = 0
    }
    totalNotebook = quantidadeNotebook * valorNotebook
    document.getElementById('total-notebook').innerHTML = totalNotebook
    document.getElementById('quantidade-notebook').innerHTML = quantidadeNotebook
    return totalNotebook
}

function adicionarMonitor(){
    let totalMonitor = parseFloat(document.getElementById('total-monitor').innerHTML)
    let quantidadeMonitor = parseInt(document.getElementById('quantidade-monitor').innerHTML)
    let valorMonitor = parseFloat(document.getElementById('valor-monitor').innerHTML)
    quantidadeMonitor++
    totalMonitor = quantidadeMonitor * valorMonitor
    document.getElementById('total-monitor').innerHTML = totalMonitor
    document.getElementById('quantidade-monitor').innerHTML = quantidadeMonitor
    return totalMonitor
}

function retirarMonitor(){
    let totalMonitor = parseFloat(document.getElementById('total-monitor').innerHTML)
    let quantidadeMonitor = parseInt(document.getElementById('quantidade-monitor').innerHTML)
    let valorMonitor = parseFloat(document.getElementById('valor-monitor').innerHTML)
    if(quantidadeMonitor > 0){
        quantidadeMonitor--
    }
    else{
        quantidadeMonitor = 0
    }
    totalMonitor = quantidadeMonitor * valorMonitor
    document.getElementById('total-monitor').innerHTML = totalMonitor
    document.getElementById('quantidade-monitor').innerHTML = quantidadeMonitor
    return totalMonitor
}
function calcular(){
    let totalCelular = parseFloat(document.getElementById('total-celular').innerHTML)
    let totalNotebook = parseFloat(document.getElementById('total-notebook').innerHTML)
    let totalMonitor = parseFloat(document.getElementById('total-monitor').innerHTML)
    let totalGeral = totalCelular + totalNotebook + totalMonitor
    document.getElementById('total-geral').innerHTML = totalGeral
}

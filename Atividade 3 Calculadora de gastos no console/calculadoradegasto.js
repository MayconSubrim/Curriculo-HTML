const gastos = [{ descricao: "Aluguel", valor: 1200, categoria: "moradia" }, { descricao: "Mercado", valor: 650, categoria: "alimentacao" }, { descricao: "Transporte", valor: 210, categoria: "transporte" }, { descricao: "Internet", valor: 99, categoria: "moradia" }, { descricao: "Lanches", valor: 180, categoria: "alimentacao" }, { descricao: "Curso", valor: 300, categoria: "educacao" }]; 



function calcularTotal(valor) {
    return gastos.reduce((total, gasto) => total + gasto[valor], 0);
}

console.log("Total de gastos: R$", calcularTotal("valor").toFixed(2));

function gastoMaisCaro() {
    let gastoMax = gastos[0];
    for (let i = 1; i < gastos.length; i++) {
        if (gastos[i].valor > gastoMax.valor) {
            gastoMax = gastos[i];
        }
    }
    return gastoMax;
}

console.log("Gasto mais caro: ", gastoMaisCaro().descricao, "- R$", gastoMaisCaro().valor.toFixed(2));


function filtrarPorCategoria(categoria) {
    return gastos.filter(gasto => gasto.categoria === categoria);
}

console.log("Gastos na categoria 'moradia':", filtrarPorCategoria("moradia"));

function totalPorCategoria(gastos) {
    return gastos.reduce((totais, gasto) => {
        if (!totais[gasto.categoria]) {
            totais[gasto.categoria] = 0;
        }

        totais[gasto.categoria] += gasto.valor;

        return totais;
    }, {});
}

console.log("Total por categoria:", totalPorCategoria(gastos));

function calcularMedia(gastos) {
    const soma = gastos.reduce((total, gasto) => {
        return total + gasto.valor;
    }, 0);

    return (soma / gastos.length).toFixed(2);
}

console.log("Média de gastos: R$", calcularMedia(gastos));


function classificarOrcamento(total, limite) {
    if (total < limite) {
        return "dentro do orçamento";
    } else if (total === limite) {
        return "no limite";
    } else {
        return "acima do orçamento";
    }
}

console.log("Classificação do orçamento:", classificarOrcamento(calcularTotal("valor"), 2500));
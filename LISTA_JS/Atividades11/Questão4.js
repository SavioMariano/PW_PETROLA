document.getElementById('tabela').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const price = parseFloat(document.getElementById('Preco').value);
    const parcela = parseInt(document.getElementById('parcela').value);
    const parcel = document.getElementById('parcelado').checked;
    const vista = document.getElementById('avista').checked;

    if (price && vista) {

        let desconto = price * 0.025;
        console.log("Preço total: $" + (price - desconto));

    }else if (price && parcel && parcela >= 2 && parcela <= 5) {
        let PriceParcel = price / parcela;
        console.log("Preço de cada parcela: $" + PriceParcel.toFixed(2) + " por mês");
        console.log("Preço total: $" + price);
    }else if (price && parcel && parcela >= 6 && parcela <= 10) {
        let juros = 0.06;
        let PriceParcel = (price / parcela);
        let PriceParcelJu = PriceParcel * juros;
        let PriceJu = price * juros; 
        console.log("Preço de cada parcela: $" + PriceParcelJu.toFixed(2) + " por mês");
        console.log("Preço total: $" + (price +  PriceJu) );
    }else if (price && parcel && parcela >= 11 && parcela <= 15) {
        let juros = 0.13;
        let PriceParcel = (price / parcela);
        let PriceParcelJu = PriceParcel * juros;
        let PriceJu = price * juros; 
        console.log("Preço de cada parcela: $" + PriceParcelJu.toFixed(2) + " por mês");
        console.log("Preço total: $" + (price +  PriceJu) );
    }else{
        alert("digite valor válido");
    }
    
});

let carrinho = [];
let total = 0;

function adicionarItem(nome, preco) {
    carrinho.push({ nome, preco });
    total += parseFloat(preco);
    atualizarCarrinho();
}

function removerItem(index) {
    total -=  carrinho[index].preco;
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('listaCarrinho');
    listaCarrinho.innerHTML = '';
    carrinho.forEach((item, index) => {
        listaCarrinho.innerHTML += `
            <div class="carrinho-item">
                <span>${item.nome} - R$${item.preco}</span>
                <button class="remover" onclick="removerItem(${index})">Remover</button>
            </div>
        `;
    });
    
    document.getElementById('totalCarrinho').innerText = `TOTAL: R$${total.toFixed(2)}`;
}

function enviarWhatsApp() {
    const cidade = document.getElementById('cidade').value;
    const bairro = document.getElementById('bairro').value;
    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const troco = document.getElementById('troco').value;
    const pagamento = document.getElementById('pagamento').value;

    const mensagem = `Pedido:\n${carrinho.map(item => `${item.nome} - R$${item.preco}`).join('\n')}\n*Entrega em:*\n*Rua:* ${rua}\n*Número:* ${numero}\n*Bairro:* ${bairro}\n*Cidade:* ${cidade}\n*CEP:* ${cep}\n*Pagamento:* ${pagamento}\n*Precisa de troco? Valor:* ${troco}\n*Total:* R$${total}\n`;
    const numeroWhatsApp = '5511937457836'; // Substitua pelo número desejado
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url);
}
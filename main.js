let carrinho = [];
let total = 0;
let itemCarrinho = 0;

function adicionarItem(nome, preco) {
    carrinho.push({ nome, preco });
    total += parseFloat(preco);
    itemCarrinho++;
    atualizarCarrinho();
}

function removerItem(index) {
    total -= carrinho[index].preco;
    itemCarrinho--;
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('listaCarrinho');
    listaCarrinho.innerHTML = '';
    carrinho.forEach((item, index) => {
        listaCarrinho.innerHTML += `
            <div class="carrinho-item" >
                <span>${item.nome} - R$${item.preco.toFixed(2)}</span>
                <button class="remover" onclick="removerItem(${index})">Remover</button>
            </div>
        `;
    });

    document.getElementById('itensCarrinho').innerText = `ITENS ADICIONADOS: ${itemCarrinho}`;
    document.getElementById('totalCarrinho').innerText = `TOTAL: R$${total.toFixed(2)}`;
}


function enviarWhatsApp() {
    const nome = document.getElementById('nome').value;
    const cidade = document.getElementById('cidade').value;
    const bairro = document.getElementById('bairro').value;
    const cep = document.getElementById('cep').value;
    const rua = document.getElementById('rua').value;
    const numero = document.getElementById('numero').value;
    const troco = document.getElementById('troco').value;
    const pagamento = document.getElementById('pagamento').value;
    const retirar = document.getElementById('retirar').value;

    const mensagem = `Pedido:\n${carrinho.map(item => `${item.nome} - R$${item.preco}`).join('\n')}\n*Total da compra sem taxa de entrega:* R$${total.toFixed(2)}\n*Nome:* ${nome}\n*Entrega em:*\n*Rua:* ${rua}\n*Número:* ${numero}\n*Bairro:* ${bairro}\n*Cidade:* ${cidade}\n*CEP:* ${cep}\n*Pagamento:* ${pagamento}\n*Precisa de troco? Valor:* ${troco}\n*Vai retirar o pedido:* ${retirar}`;
    const numeroWhatsApp = '5511968559541'; // Substitua pelo número desejado
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url);
}

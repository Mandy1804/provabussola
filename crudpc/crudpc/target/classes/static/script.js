const url = "http://localhost:8080/computadores";
let idEdicao = null;

function salvar() {
    const checkboxes = document.querySelectorAll('input[name="periferico"]:checked');
    const perifericosSelecionados = Array.from(checkboxes).map(cb => ({ nome: cb.value }));

    const computador = {
        nome: document.getElementById("nome").value,
        cor: document.getElementById("cor").value,
        dataFabricacao: parseInt(document.getElementById("data").value),
        perifericos: perifericosSelecionados
    };

    if (idEdicao) {
        computador.id = idEdicao;
    }

    const metodo = idEdicao ? "PUT" : "POST";
    const endpoint = idEdicao ? `${url}/${idEdicao}` : url;

    fetch(endpoint, {
        method: metodo,
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(computador)
    })
    .then(() => {
        limparFormulario();
        listar();
    });
}

function listar() {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const lista = document.getElementById("lista");
        lista.innerHTML = "";

        data.forEach(c => {
            const nomesPerifericos = c.perifericos ? c.perifericos.map(p => p.nome).join(", ") : "Nenhum";
            lista.innerHTML += `
                <li>
                    <span>${c.nome} - ${c.cor} (${c.dataFabricacao}) <br> <small>Periféricos: ${nomesPerifericos}</small></span>
                    <div class="acoes">
                        <button class="btn-editar" onclick="preencherFormulario(${c.id}, '${c.nome}', '${c.cor}', ${c.dataFabricacao}, ${JSON.stringify(c.perifericos).replace(/"/g, '&quot;')})">Editar</button>
                        <button class="btn-excluir" onclick="deletar(${c.id})">X</button>
                    </div>
                </li>
            `;
        });
    });
}

function preencherFormulario(id, nome, cor, data, perifericos) {
    idEdicao = id;
    document.getElementById("nome").value = nome;
    document.getElementById("cor").value = cor;
    document.getElementById("data").value = data;

    document.querySelectorAll('input[name="periferico"]').forEach(cb => {
        cb.checked = perifericos.some(p => p.nome === cb.value);
    });

    document.querySelector(".formulario button").innerText = "Atualizar";
}

function limparFormulario() {
    idEdicao = null;
    document.getElementById("nome").value = "";
    document.getElementById("cor").value = "";
    document.getElementById("data").value = "";
    document.querySelectorAll('input[name="periferico"]').forEach(cb => cb.checked = false);
    document.querySelector(".formulario button").innerText = "Salvar";
}

function deletar(id) {
    if(confirm("Tem certeza que deseja excluir?")) {
        fetch(`${url}/${id}`, {
            method: "DELETE"
        }).then(() => listar());
    }
}

listar();
let computadores = JSON.parse(localStorage.getItem("computadores")) || [];

function salvar () {
    localStorage: 
}

function adicionarComputador(){
    const nome = document.getElementById("nome").value;
    const marca = document.getElementById("marca").value;

if (nome === "" || marca === "" ){
    alert("Prencha todos os campos");
    return;

}

const computador ={
    id: Date.now(),
    nome,
    marca,
    prerifericos:[]
};

    computadores.push(computador);
    salvar();
    listarComputadores();
} 

function adicionarPeriferico(id) {
    const nome = prompt ("Nome do periferico:");
    const tipo = prompt ("Tipo (mouse, teclado):");

    if (!nome || !tipo) return;

    const comp = computadores.find (c => c.id === id);

}
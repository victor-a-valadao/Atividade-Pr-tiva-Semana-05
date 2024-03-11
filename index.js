const prompt = require('prompt-sync')();
var array_headsets = [];

do {
  console.log("Sistema de Cadastro de Headsets");
  console.log("1 - Inserir Headset");
  console.log("2 - Excluir Headset");
  console.log("3 - Listar Headset");
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo Headset...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    let marca = prompt("Digite a marca: ");
    let modelo = prompt("Digite o modelo: ");
    let cor = prompt("Digite a cor: ");
    let conexao = prompt("Digite o tipo de conexão: ");

    // Neste trecho estamos declarando um objeto
    const headset = {
      codigo: codigo,
      marca: marca,
      modelo: modelo,
      cor: cor,
      conexao: conexao
    }
    // Chamar a função inserir  
    inserir_headset(headset);

  } else if (opcao == 2) {
    console.log("\n\nExcluindo Headset...\n");
    let codigo = prompt("Digite o código do headset: ");
    // Chamar a função excluir
    excluir_headset(codigo);

  } else if (opcao == 3) {
    console.log("\n\nListando Headsets...\n");
    // Chamar a função listar
    listar_headset();


  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_headset(headset) {
  // Implementar corpo da função
  array_headsets.push(headset);
}

function excluir_headset(codigo) {
  // Implementar corpo da função
  for (let i = 0; i < array_headsets.length; i++) {
    if (codigo == array_headsets[i].codigo) {
      array_headsets.splice(i, 1);
    }
  }
}

function listar_headset() {
  // Implementar corpo da função
  for (let i = 0; i < array_headsets.length; i++) {
    console.log(array_headsets[i].codigo, array_headsets[i].marca, array_headsets[i].modelo, array_headsets[i].cor, array_headsets[i].conexao);
  }
}
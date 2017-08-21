var EnqueteDao = require("./enqueteDAO");

var result;

// 1 - Criar Enquete
result = EnqueteDAO.criarEnquete("Compras");
EnqueteDAO.criarEnquete("Presentes");
console.log("1: " + result.message);

// 2 - Renomear Enquete
result = EnqueteDAO.renomearEnquete("enquete-0", "Enquete renomeada");
console.log("2: " + result.message);

// 3 - Apagar Enquete
result = EnqueteDao.apagarEnquete("enquete-1");
console.log("3: " + result.message);

// 4 - Listar todas as enquetes
console.log(EnqueteDao.getEnquetes());

// 5 - Criar nova Opcao em uma Enquete
result = EnqueteDao.novaOpcao("Comprar leite", "enquete-0");
console.log("5: " + result.message);

// 6 - Listar tarefas de uma lista
console.log(EnqueteDAO.getOpcao("enquete-0"));

// 7 - Votar em uma opção
result = EnqueteDao.voto("enquete-0")
console.log("7:" + result.message)
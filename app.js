// 1. Importar módulos
var express = require("express");
var bodyParser = require("body-parser");
// 2. Importar o módulo da nossa aplicação
var EnqueteDAO = require("./enqueteDAO");
// 3. Iniciar aplicação Express
var app = express();
// 4. Configurar método para ler a propriedade `body` da requisições
app.use(bodyParser.json());

// - Criar nova enquete
app.post("/Enquete", function(request, response) {
    // Pega as informações provenientes da requisição
    var nome = request.body.nome;
    // Cria a nova enquete
    var result = EnqueteDAO.criarEnquete(nome);

    response.status(200);
    response.json(result);
    response.end();
});

// - Renomear enquete
app.put("/enquete/:id_enquete", function(request, response) {
    // Pega as informações provenientes da requisição
    var novoNome = request.body.nome;
    var idDaEnquete = request.params.id_enquete;
    // Renomeia a enquete
    var result = EnqueteDAO.renomearEnquete(idDaEnquete, novoNome);

    response.status(200);
    response.json(result);
    response.end();
});

// - Apagar Enquete
app.delete("/enquete/:id_enquete", function(request, response) {
    // Pega as informações provenientes da requisição
    var idDaEnquete = request.params.id_enquete;
    // Apaga a enquete com o identificador correspondente
    var result = EnqueteDAO.apagarEnquete(idDaEnquete);

    response.status(200);
    response.json(result);
    response.end();
});

// - Listar todas as enquetes
app.get("/enquete", function(request, response) {
    response.status(200);
    response.json(EnqueteDAO.getEnquetes());
    response.end();
});

// - Criar nova opção em uma enquete
app.post("/enquete/:id_enquete", function(request, response) {
    // Pega as informações provenientes da requisição
    var idDaEnquete = request.params.id_enquete;
    var descricaoDaOpcao = request.body.descricao;
    // Adiciona a nova tarefa na lista de tarefas
    var result = EnqueteDAO.novaOpcao(descricaoDaOpcao, idDaEnquete);

    response.status(200);
    response.json(result);
    response.end();
});

// - Listar opções de uma enquete
app.get("/enquete/:id_enquete/opcao", function(request, response) {
    // Pegar o identificador da lista na rota
    var idDaEnquete = request.params.id_enquete;

    response.status(200);
    response.json(EnqueteDAO.getOpcoes(idDaEnquete));
    response.end();
});

app.post("/enquete/:id_enquete/:id_opcao", function(request, response) {

    var idDaEnquete = request.params.id_enquete;
    var idOpcao = request.params.id_opcao;

    response.status(200);
    response.json(EnqueteDAO.voto(idDaEnquete));
    response.end();
});

// 5. Associar nossa API com a porta 8080
app.listen(8080);
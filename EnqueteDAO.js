function EnqueteDAO() {

    this.enquetes = {};

    // - Criar nova Enquete
    this.criarEnquete = function(nome) {
        // 1. Gerar ID
        var novoID = "enquete-" + Object.keys(this.enquetes).length;
        // 2. Criar objeto da enquete
        var novaEnquete = {
            id: novoID,
            nome: nome,
            opcoes: [],
            numeroDeOpcoes: 0,
            numeroDeVotos: 0
        };
        // 3. Adicionar nova enquete ao objeto enquetes
        this.enquetes[novoID] = novaEnquete;

        return {
            success: true,
            message: "Enquete \'" + nome + "\' criada."
        };
    };

    // - Renomear lista
    this.renomearEnquete = function(enqueteID, novoNome) {
        // 1. Testa se a lista existe
        if (this.enquetes.hasOwnProperty(enqueteID)) {
            // 2. Troca o nome da lista pelo novo nome
            this.enquetes[enqueteID].nome = novoNome;
            console.log();
            return {
                success: true,
                message: "Enquete renomeada para \'" + novoNome + "\'."
            };
        } else {
            return {
                success: false,
                message: "Enquete não pode ser encontrada."
            };
        }
    };

    // - Apagar enquete
    this.apagarEnquete = function(enqueteID) {
        // 1. Testa se a enquete existe
        if (this.enquetes.hasOwnProperty(enqueteID)) {
            var nomeEnquete = this.enquetes[enqueteID].nome;
            // 2. Exclui a enquete
            delete this.enquetes[enqueteID];
            return {
                success: true,
                message: "Enquete \'" + nomeEnquete + "\' apagada com sucesso."
            };
        } else {
            return {
                success: false,
                message: "Enquete não pode ser encontrada."
            };
        }
    };

    // - Listar todas as Enquetes
    this.getEnquetes = function() {
        return this.enquetes;
    };

    // - Criar nova Opção em uma enquete
    this.novaOpcao = function(descricao, enqueteID) {
        // 1. Cria identificador da questao
        //console.log("numero de opcoes na enquete" + numeroDeOpcoes);
        var idOpcao = "opcao-" + this.enquetes[enqueteID].numeroDeOpcoes;
        // 2. Cria o objeto da opção
        var opcao = {
            id: idOpcao,
            descricao: descricao,
            numeroVotos: 0
        };
        // 3. Adiciona a opção na lista de opções
        this.enquetes[enqueteID].opcoes.push(opcao);
        this.enquetes[enqueteID].numeroDeOpcoes += 1;
        this.enquetes[enqueteID].numeroDeVotos += 1;

        return {
            success: true,
            message: "Opcão adicionada na enquete " + this.enquetes[enqueteID].nome
        };
    };

     // - Listar opcoes de uma enquete
    this.getOpcoes = function(enqueteID) {
        return this.enquetes[enqueteID].opcoes;
    };

    // - Adiciona o voto a uma Opção
    this.voto = function(enqueteID, idOpcao){

        var opcao = this.enquetes[enqueteID].opcoes.push(idOpcao);
        console.log("ESSA É A OPCAO" + this.enquetes[enqueteID].opcao)
        //this.enquetes[enqueteID].numeroDeVotos += 1;
        //this.enquetes[enqueteID].opcao.numeroVotos += 1;
        
        return{

            success: true,
            //message: "Voto computado" + this.enquetes[enqueteID].opcao.numeroVotos
        };
    };


}

module.exports = new EnqueteDAO();
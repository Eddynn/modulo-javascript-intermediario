let usuario = { 
    nome: 'Edgard', 
    excluir: function(){
        console.log('O usuário, ' + this.nome + ' foi excluido!')
    }
}

usuario.excluir()
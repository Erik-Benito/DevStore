import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {

    async cadastrarProduto(nome, categoria, estoque, avaliacao, image, desc, precoDe, precoPor){
        let r = await api.post('/produto', {produto: nome, categoria, estoque, avaliacao, img:image, descricao: desc, precoDe, precoPor});
        return r.data;
    };

    async listar(){
        let r = await api.get('/produto');
        return r.data;
    };
    async deletar(id){
        let r = await api.delete(`/produto/${id}`);
        return r.data;
    }
    async alterar(idalterado ,nome, categoria, estoque, avaliacao, image, desc, precoDe, precoPor){
        let id= idalterado;
        let r = await api.put(`/produto/${id}`,{produto: nome, categoria, estoque, avaliacao, img:image, descricao: desc, precoDe, precoPor});
        return r.data;

    }


}
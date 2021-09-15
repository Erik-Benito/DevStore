import db from './db.js';
import express from 'express'
import cors from 'cors'
const app = express();
app.use(cors());
app.use(express.json());

app.get('/produto', async(req, resp) => {
    try {
        let r = await db.tb_produto.findAll({order: [['id_produto', 'desc']]});
        resp.send(r);
    } catch(e) {
        resp.send(e.toString());
    }
})


app.post('/produto', async(req,resp)=>{
    try{
        let {produto, categoria, precoDe, precoPor, avaliacao, descricao, estoque, img } = req.body;
        
        if( produto == ''  ){return resp.send({erro: 'O campo produto não foi preenchido corretamente'})};
        if( categoria == ''){return resp.send({erro: 'O campo categoria não foi preenchido corretamente'})};
        if( descricao == ''){return resp.send({erro: 'O campo descrição não foi preenchido corretamente'})};
        if( img == ''      ){return resp.send({erro: 'O campo imagem não foi preenchido corretamente'})};

        if( !Number(precoDe) > 0){return resp.send({erro: 'O campo Preço de: deve ser preenchido com numeros acima de 0'})};
        if( !Number(precoPor) > 0){return resp.send({erro: 'O campo Preço Por: deve ser preenchido com numeros acima de 0'})};
        if( !Number(avaliacao) > 0){return resp.send({erro: 'O campo avaliação deve ser preenchido com numeros'})};
        if( !Number(estoque) > 0){return resp.send({erro: 'O campo estoque: deve ser preenchido com numeros acima de 0'})};
        if( true != Number.isInteger(estoque)){ return resp.send({erro: 'O numero do estoque tem que ser inteiro'})};
       
        let  rep = await db.tb_produto.findOne({where: {nm_produto: produto}});
        if(  rep != null ){return resp.send({erro: 'Produto já cadastrado'})};

        let d = {
            nm_produto: produto,
            ds_categoria: categoria,
            vl_preco_de: precoDe,
            vl_preco_por: precoPor,
            vl_avaliacao: avaliacao,
            ds_produto: descricao,
            qtd_estoque: estoque,
            img_produto: img,
            bt_ativo: true,
            dt_inclusao: new Date()
        };
        

        let r = await db.tb_produto.create(d);
        resp.send(r);

    } catch(e) { 
        resp.send(e.toString()) 
    }
})

app.put('/produto/:id', async(req, resp) => {

    try {
        
        let { id } = req.params;
        let {produto, categoria, precoDe, precoPor, avaliacao, descricao, estoque, img } = req.body;
        
        if( produto == ''  ){return resp.send({erro: 'O campo produto não foi preenchido corretamente'})};
        if( categoria == ''){return resp.send({erro: 'O campo categoria não foi preenchido corretamente'})};
        if( descricao == ''){return resp.send({erro: 'O campo descrição não foi preenchido corretamente'})};
        if( img == ''      ){return resp.send({erro: 'O campo imagem não foi preenchido corretamente'})};

        if( !Number(precoDe) > 0){return resp.send({erro: 'O campo Preço de: deve ser preenchido com numeros acima de 0'})};
        if( !Number(precoPor) > 0){return resp.send({erro: 'O campo Preço Por: deve ser preenchido com numeros acima de 0'})};
        if( !Number(estoque) > 0){return resp.send({erro: 'O campo estoque: deve ser preenchido com numeros acima de 0'})};
        if( !Number(avaliacao) > 0){return resp.send({erro: 'O campo avaliação deve ser preenchido com numeros'})};
        if( true != Number.isInteger(estoque)){ return resp.send({erro: 'O numero do estoque tem que ser inteiro'})};
        
        let d = {
            nm_produto: produto,
            ds_categoria: categoria,
            vl_preco_de: precoDe,
            vl_preco_por: precoPor,
            vl_avaliacao: avaliacao,
            ds_produto: descricao,
            qtd_estoque: estoque,
            img_produto: img,
            bt_ativo: true,
            dt_inclusao: new Date()
        };

        let r = await db.tb_produto.update(d,{where: {id_produto: req.params.id}});
        resp.sendStatus(200);
    } catch(e) {
        resp.send(e.toString());
    }
})

app.delete('/produto/:id', async(req, resp) =>{
    try  {
        let r = await db.tb_produto.destroy({where: {id_produto: req.params.id}});
        resp.sendStatus(200);
    } catch(e) {
        resp.send(e.toString());
    }
})
app.listen(process.env.PORT, x => console.log(`Server up at port ${process.env.PORT}`))
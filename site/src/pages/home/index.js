import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { useState, useEffect, useRef } from 'react';
import LoadingBar from 'react-top-loading-bar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Menu from "../../components/menu";

import { Container } from "./styled";

import Api from '../../service/api';

const api = new Api();

export default function Home(){
    const loading = useRef(null);
    const [nome , setNome ] = useState('');
    const [categoria , setCategoria ] = useState('');
    const [estoque , setEstoque ] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc ] = useState('');
    const [precoDe, setPrecoDe] = useState('');
    const [precoPor, setPrecoPor] = useState('');
    const [produtos, setProdutos] = useState([]);
    const [idalterado, setIdalterado] = useState();
    
    

    const alterar = async(item) =>{
        setNome(item.nm_produto);
        setEstoque(item.qtd_estoque);
        setCategoria(item.ds_categoria);
        setAvaliacao(item.vl_avaliacao);
        setDesc(item.ds_produto);
        setImage(item.img_produto);
        setPrecoDe(item.vl_preco_de);
        setPrecoPor(item.vl_preco_por);
        setIdalterado(item.id_produto);

    }

    const inserirProduto = async () =>{
        
        if(idalterado > 0){
            const r = await api.alterar(idalterado, nome, categoria, estoque, avaliacao, image, desc, precoDe, precoPor  );
            if(!r.erro){toast.success('alterado'); limpar(); listarProdutos()} else {toast.error(r.erro)};
        } else {
            const r = await api.cadastrarProduto( nome, categoria, estoque, avaliacao, image, desc, precoDe, precoPor );
            if(!r.erro){toast.success('Cadastrado'); limpar(); listarProdutos()} else {toast.error(r.erro)}
        }
        
    }
    const listarProdutos = async() =>{
        loading.current.continuousStart();

        const resp = await api.listar();
        setProdutos(resp);
        loading.current.complete();
    
    }
    const excluir = async(id) =>{
        confirmAlert({
            title: 'Remover Produto',
            message: `Tem certeza que deseja remover o produto ${id}`,
            buttons:[
                {
                    label: 'Sim',
                    onClick: async () => {
                         await api.deletar(id);
                        toast.error('Produto removido');
                        listarProdutos();
                    }
                },
                {label: 'Não'}
            ]
        })
    }
    const limpar = async() =>{
        setNome('');
        setEstoque('');
        setCategoria('');
        setAvaliacao('');
        setDesc('');
        setImage('');
        setPrecoDe('');
        setPrecoPor('');
        setIdalterado(0);
    }
    useEffect(() => {
       listarProdutos();
    }, [])
    return(
        <Container>
            <LoadingBar color='#f11946' ref={loading} />
            <ToastContainer/>
            
            <Menu/>
            <div className="admin">
                <div className="cabecalho">
                    <div className="infos-user">
                        <img src="/assets/images/user.svg" style={{heigth:'3em'}} alt="ft-user"/>
                        Olá, <b> Fulano da Silva</b>
                    </div>
                    <div className="acoes">
                        <div className="atualizar" onClick={listarProdutos}><img src="/assets/images/att.svg" alt="att"/></div>
                        <div className="sair"><img src="/assets/images/sair.svg" alt="sair"/></div>
                    </div>
                </div>
                <div className="nv-produto">
                        <div className="titulo-form">
                            <img src="/assets/images/line.svg" alt="line"/>
                            {idalterado > 0 ? `Alterado o Produto ${idalterado}`: 'Novo Produto' }
                        </div>
                        <div className="inputs">
                            <div className="inp">
                                <div className="cln1">
                                    <div className="sub-titulo">
                                        <p1>Nome:</p1>
                                        <p1>categoria:</p1>
                                        <p1>Avaliação</p1>
                                    </div> 
                                    <div className="sub-input">
                                        <input type="text" value={nome} onChange={e => setNome(e.target.value)}/>
                                        <input type="text" value={categoria} onChange={e => setCategoria(e.target.value)}/>
                                        <input type="number" min="0" value={avaliacao} onChange={e => setAvaliacao(e.target.value)}/>
                                    </div> 
                                </div>
                                <div className="cln1">
                                    <div className="sub-titulo">
                                        <p1>Preço De:</p1>
                                        <p1>Preço Por:</p1>
                                        <p1>Estoque:</p1>
                                    </div> 
                                    <div className="sub-input">
                                        <input  type="number" value={precoDe} onChange={e => setPrecoDe(e.target.value)}/>
                                        <input  type="number" value={precoPor} onChange={e => setPrecoPor(e.target.value)}/>
                                        <input type="number"  value={estoque} onChange={e => setEstoque(e.target.value)}/>
                                    </div> 
                                </div>
                            </div>
                            <div className="estoque">
                                <p1>Link Imagem:</p1>
                                <input type="text" value={image} onChange={e => setImage(e.target.value)}/>
                            </div>
                            <div className="btm-cad">
                                <p1 >Descrição:</p1>
                                 <textarea rows="5" cols="76" value={desc} onChange={e => setDesc(e.target.value)}>  </textarea>
                                <button onClick={inserirProduto}> {idalterado > 0 ? 'Alterar' : 'Cadastrar' }</button>
                            </div>
                        </div>
                     </div>
                 <div className="matriculados">
                  <div className="titulo-form">
                    <img src="/assets/images/line.svg" alt="line"/>
                        Produtos Cadastrados
                    </div>
                
                    <table class ="table-user">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th> ID </th>
                                    <th> Produto </th>
                                    <th> Categoria </th>
                                    <th> Preço </th>
                                    <th> Estoque </th>
                                    <th class="coluna-acao"> </th>
                                    <th class="coluna-acao"> </th>
                                </tr>
                            </thead>
                            {produtos.map((x,i) => 
                                 <tbody>
                                     <tr className={i % 2 === 0 ? "linha": ""}>
                                        <td><img src={x.img_produto} alt=""/></td>
                                        <td>{x.id_produto}</td>
                                        <td title={x.nm_produto}>{x.nm_produto.length >= 25 ? x.nm_produto.substr(0, 25) + '...' : x.nm_produto}</td>
                                        <td>{x.ds_categoria}</td>
                                        <td>R$ {x.vl_preco_por}</td>
                                        <td>{x.qtd_estoque}</td>
                                        <td className="coluna"  style={{width: '10px'}}>
                                            <button onClick={() => alterar(x)}><img src="/assets/images/edit.svg" alt="edit"/></button>
                                        </td> 
                                        <td className="coluna" >
                                            <button  onClick={() => excluir(x.id_produto)}><img src="/assets/images/lixo.svg" alt="lixo"/></button>
                                        </td>
                                        
                                    </tr>
                                </tbody>
                            )}
                        </table>
                    </div>
            </div>
        </Container>
    )
}
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-width: 100%;
    height: 100%;
    .admin{
            
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 94em;
        background-color: #F5F5F5;
        height: 100%;
        .linha{
            background: #ffff;
        }
        .coluna > button {visibility: hidden; cursor: pointer};
        tr:hover{.coluna > button {visibility: visible}; }
    
        .cabecalho{
            
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 98%;
            height: 5em;
            
            padding: 0px 1%;
            border-bottom: 1px solid #D9D9D9; 
            background: white;
            
            .infos-user{
                display: flex;
                flex-direction: row;
                align-items: flex-end;
                
                width: 15em;
                height: 2em;
                font-family: Roboto;
                font-size: 16px;
                margin-top: 1em;
                
                color: #615858;
                img{
                    margin-right: 1em;
                }
            }
            .acoes{
                
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            
                height:2em;
            
                .atualizar{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 37px;
                    width: 37px;
                    margin-right: 1em;
                    background:  #119FDC;
                    border-radius: 50%;
                    cursor: pointer;
                    &:hover{
                        transform: rotate(360deg);
                        transition: 1s;
                    }
                }
                
                .sair{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background:  #119FDC;
                    
                    height: 37px;
                    width: 37px;
                    cursor: pointer;
                    border-radius: 100%;
                }
            }
        }
        .nv-produto{
            
            display: flex;
            flex-direction: column;
            background: white;
            height: 25em;
            width: 95%;
            margin: 2em 1.5em;
            .inp{
                display: flex;
                .cln1{display: flex;}
                
            }
            
            .titulo-form{
                display: flex;
                flex-direction: row;
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 32px;
                line-height: 37px;
                margin: 25px 0px 25px 50px;
                color: #3C3939;
                
                img{
                    margin-right: 1em;
                }
            
            }
            .estoque{
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 21px;
                    color: #615858;
                    margin-left: 20px;
                    input{
                        padding: 5px 6px;
                        border: 1px solid;
                        margin-top: 14px;
                        margin-left: 19px;
                        background: #FFFFFF;
                        border: 1px solid #A8A8A8;
                        box-sizing: border-box;
                        border-radius: 5px;
                        width: 40em;

                    }
            }
            .inputs{
                
                display: flex;
                flex-direction: column;
                width:90%;
               
                .sub-titulo{
                    display:flex;
                    flex-direction: column;
                    align-items: flex-end;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 21px;
                    
                    text-align: right;
                    color: #615858;
                    margin-left: 50px;
                    p1{margin-top: 20px;}
                }
                .sub-input{
                    display:flex;
                    flex-direction: column;
                    input{
                        padding: 5px 25px;
                        border: 1px solid;
                        margin-top: 15px;
                        margin-left: 15px;
                        background: #FFFFFF;
                        border: 1px solid #A8A8A8;
                        box-sizing: border-box;
                        border-radius: 5px;
                    }
                
                }
                .btm-cad{
                    display: flex;
                    margin-left: 50px;
                    margin-top: 25px;
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 21px;
                    
                    color: #615858;
                
                    textarea{
                        margin-left: 11px;
                        border: 1px solid #A8A8A8;
                        box-sizing: border-box;
                        resize: none;
                        width: 40em;
                    }
                    
                    button{
                                            
                        background: #119FDC;
                        border-radius: 44px;
                        border: 0px;
                        color: white;
                        cursor: pointer;
                        font-family: Roboto;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 16px;
                        text-align: center;
                        margin-left: 15px;
                        width: 6.5em;
                        height: 3em;
                        align-self: flex-end;
                        padding: 14px 8px;

                    }
                }
            }
        }
        .matriculados{
            
            display:flex;
            flex-direction: column;
           
            width: 95%;
            background: white;
            .titulo-form{
            display: flex;
            flex-direction: row;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 32px;
            line-height: 37px;
            margin: 25px 0px 25px 50px;
            color: #3C3939;
                img{
                    margin-right: 1em;
                }
            }
        }
        thead {
            background-color: #119FDC;
        }
        table {
            margin: 2em;
        }
        tbody {
            background-color: #F5F5F5;
        }
        td {
            text-align: left;
            height:  61.93px;
            padding: 1em;
            color: #6D6868;
            font-weight: 600;
            img{
                height: 100%;
                width:100%;
            }
           
        }
        th {
            height: 61.93px;
            text-align: left;
            padding: 1em;
            color: #ffff;
            font-weight: 800;
        } 
        
        .table-user {
            border-collapse: collapse;
        }
        td button {
            border-radius: 50%;
            background-color: #565656;
            border: none;
            width: 31px;
            height: 31px;
            
        }
        
    }
`

export { Container }
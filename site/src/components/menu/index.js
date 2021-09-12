
import { useState } from "react"
import { Container, ItemMenu } from "./style"

export default function Menu(){

    const [ coralt, setCoralt ] = useState('true');
    const [ txtalt, setTxtalt ] = useState('true');
    const [ opcoes, setOpcoes ] = useState([]);
    const [ ops, setOps ] = useState(true);
    
    const ListarOpcoes = () => {
        
        if(ops === true){
            
            setOpcoes(['Produtos']);
            setOps(false);

        } else {

            setOpcoes([]);
            setOps(true);
        }
    
    }
    return(

        <Container>
            <div className="Logo-Tipo" >
                <img src="/assets/images/logo.svg" alt="Logo DevSchool"/>
            </div>
           
            <div className="itemsMenu">
                <ItemMenu
                 color='true' 
                 texto='true'
                 onClick={ListarOpcoes}>
                    Gerenciamento 
                    <img src="/assets/images/Vector.svg" alt="svg-seta"/>
                </ItemMenu>

                { opcoes.map( x => 
                    <ItemMenu 
                        color={coralt} 
                        texto={txtalt} 
                        style={{borderLeft: 'solid 5px #10EAEA'}}
                        onClick={e => {setCoralt(coralt => !coralt); setTxtalt(txtalt => !txtalt)}}
                    > 
                    {x}
                    </ItemMenu>
                )}
            </div>
        </Container>
    )
};
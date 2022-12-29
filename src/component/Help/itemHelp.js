import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';

function ItemHelp(){
    const [ openDescription, setOpenDescription ] = useState(false);
    const title = "O que é Netflix?";
    const description = "A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet.Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.";
    return (
        <section className='container-item-help'>
            <button 
                onClick={()=>setOpenDescription(!openDescription)}
                style={{
                    width: '95%',
                    display: "flex",
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <p>{title}</p>
                {
                    !openDescription ? <BsPlusLg /> : <VscChromeClose />
                }
            </button>
            {
                openDescription&&(
                    <section className='container-description-item-help'>
                        <span>{description}</span>
                    </section>
                )
            }
        </section>           
    )
}
export default ItemHelp;
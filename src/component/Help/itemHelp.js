import { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';

function ItemHelp({ title, description }){
    const [ openDescription, setOpenDescription ] = useState(false);

    return (
        <section className='container-item-help'>
            <button 
                onClick={()=>setOpenDescription(!openDescription)}
                style={{
                    width: '95%',
                    display: "flex",
                    justifyContent: 'space-between',
                    textAlign: "left",
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
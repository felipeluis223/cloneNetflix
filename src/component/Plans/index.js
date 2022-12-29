import { IoIosArrowForward } from 'react-icons/io';

function Plans(){
    return (
        <section className='container'>
            <div className='container-items'>
                <div className='container-describle-new'>
                    <h4>NOVO!</h4>
                </div>
                <p>Planos a partir de <b> R$ 18,90</b>.</p>
                <h3 style={{ marginLeft: 10, display: 'flex', justifyContent: "center", alignItems: "center" }}>
                    Saiba mais 
                    <IoIosArrowForward style={{fontSize: 22}} />
                </h3>
            </div>
        </section>
    )
}
export default Plans;
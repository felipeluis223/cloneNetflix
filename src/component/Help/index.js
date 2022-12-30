import ItemHelp from "./itemHelp";
import allDataDescriptionsHelp from "../../datas/allDescriptionsHelp";

function Help(){
    return(
        <section className='container-help'>
            <div className='contrainer-title-help center'>
                <h2>Perguntas frequentes</h2>
            </div>
            <div className="container-items-help">
                {
                    allDataDescriptionsHelp.map((item, index)=>(
                        <ItemHelp
                            title={ item.title } 
                            description={ item.description } 
                            key={ index } 
                        />
                    ))
                }
            </div>
        </section>
    )
}
export default Help;
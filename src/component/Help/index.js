import ItemHelp from "./itemHelp";

function Help(){
    return(
        <section className='container-help'>
            <div className='contrainer-title-help center'>
                <h2>Perguntas frequentes</h2>
            </div>
            <div className="container-items-help">
                <ItemHelp />
                <ItemHelp />
                <ItemHelp />
            </div>
        </section>
    )
}
export default Help;
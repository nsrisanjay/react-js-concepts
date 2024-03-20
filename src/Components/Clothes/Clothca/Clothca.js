import './Clothca.css'

function Clothca(props)
{
    return(
        <div className="cd">
            <img src={props.data.image} width="100px" className="d-block mx-auto" alt="" />
            <h4 className="text-center p-4">{props.data.category}</h4>
            <h3 className="text-center">{props.data.id}</h3>
            <h4 className="text-center">{props.data.title}</h4>
            <h4 className="text-center p-2">$ {props.data.price}</h4>
            <p className="lead text-center fs-6">{props.data.description}</p>
        </div>
    )
}



export default Clothca;
import "./styles.css"
export default function Card(props)
{
return(
    <div className="card">
        <img alt="" src={props.image} className="img" ></img>
        <div className="card-body">
         <span className="card-title">{props.recipeName}</span>
        <span>{props.recipeInst}</span>
        <div className="card-buttons">
     
            {/* <button className="btn btn-add">Add To Recipies</button> */}
        </div>
        </div>
        
    
    </div>
)
}
import { useRef } from "react"
export default function Navbar(props)
{
  const input=useRef()
    return (
        <div className="nav-bar">

       <div className="searchBox nav-bar">
<input type="text" className="searchInput" placeholder="search" value={props.recipie} onChange={(event)=>{
    const {value}=event.target
    props.setRecipie(value)
}} ref={input}></input>
<button className="searchButton" href="#">
    
</button>
</div>
{/* <button onClick={()=>{
    props.setRecipie((recipie)=>{return input.current.value})
}}>Submit
</button> */}
        </div>
    )
}
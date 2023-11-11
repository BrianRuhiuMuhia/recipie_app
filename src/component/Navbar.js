import { useRef } from "react"
export default function Navbar(props)
{
  const input=useRef()
    return (
        <div className="nav-bar">
<input type="text" className="navbar-input" placeholder="search" value={props.recipie} onChange={(event)=>{
    const {value}=event.target
    props.setRecipie(value)
}} ref={input}></input>
{/* <button onClick={()=>{
    props.setRecipie((recipie)=>{return input.current.value})
}}>Submit
</button> */}
        </div>
    )
}
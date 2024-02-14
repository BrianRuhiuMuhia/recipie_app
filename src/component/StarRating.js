import "./styles.css"
import { FaRegStar } from "react-icons/fa";
import {useState} from 'react'
function StarRating()
{
    const [rating,setRating]=useState(null)
    const [hover,setHover]=useState(null)
    const arr=[]
    for(let index=0;index<5;index++)
    {
        arr.push(<FaRegStar key={index} size={40} onClick={()=>{
            setRating(index)
        }} onMouseOver={()=>{
            setHover(index)
        }} onMouseLeave={()=>{
            setHover(null)
        }} className={index<=(hover||rating ? "active":"inactive")}/>)
    }
    return(
        <div>
{arr}
        </div>
    )
}
export default StarRating
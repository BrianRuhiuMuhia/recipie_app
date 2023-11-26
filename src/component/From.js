import {  Link } from 'react-router-dom';

export default function Form(props){
    return (
        <div className="container d-flex justify-content-center align-items-center  m-5">
             <form method="post" action={props.method} className="
             shadow p-3 mb-5 bg-white rounded w-75">
            <label>Name</label>
            <input name="name"className="form-control" required></input>
            
            <label>Email</label>
            <input name="email"className="form-control"></input>
           
            <label>Password</label>
            <input name="password"className="form-control"></input>
         
            {props.name.length>0 && <>  
    <label>Confirm Password</label>
    <input name="confirmPassword" className="form-control"/>
</>}

<div className="mt-3 t">
<button className="btn btn-primary ml-5"style={{ marginRight: '20px' }} >Submit</button>
<Link to={props.func} className='btn btn-danger ml-3'>{props.link}</Link>
</div>
           
        </form>
        </div>
       
    )
}
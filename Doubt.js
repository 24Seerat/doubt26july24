import {useState,useRef} from "react";
import axios from"axios";

export default function Doubt()
{
	const rName=useRef();
	const rDoubt=useRef();

	const [name,setName]=useState("");
	const [doubt,setDoubt]=useState("");
	const [phone,setPhone]=useState("");
	const [msg,setMsg]=useState("");

	const hName=(event)=>{setName(event.target.value);}
	const hPhone=(event)=>{setPhone(event.target.value);}
	const hDoubt=(event)=>{setDoubt(event.target.value);}

	const save=(event)=>{
		event.preventDefault();
		let data={name,phone,doubt};
		let url="http://localhost:9000/save";
		axios.post(url,data)
		.then(res=>{
			console.log(res.data);
			setMsg("we will get back to you");
			setName("");
			setPhone("");
			setDoubt("");
			rName.current.focus();
		})
		.catch(error=>setMsg("issue"+error));
	}
return(
<>
<center>
	<h1>Ask Your Doubt</h1>
	<form onSubmit={save}>
		<label For="name">Name: </label>
		<input type="text" placeholder="Enter Your Name" onChange={hName} ref={rName} value={name}/><br/><br/>
		<label For="phone">Phone No.: </label>
		<input type="number" placeholder="Enter Your Phone no." onChange={hPhone}value={phone}/><br/><br/>
		<label For="doubt">Doubt: </label>
		<textarea placeholder="Enter Your Doubt" rows={4} cols={30} onChange={hDoubt} ref={rDoubt} value={doubt}></textarea>
		<br/><br/>
		<button type="submit">Submit</button>
	</form>
		<h2>{msg}</h2>
</center>
</>
);
}
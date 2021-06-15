
import './App.css';
import {useState,useEffect} from 'react';

import {FormControl,Button,Input,InputLabel} from '@material-ui/core';
import Message from  "./Message.js";
import db from "./firebase";

function App() {

  
  const [input, setinput] = useState('')
  const [messages,setMessages]=useState([{username:'shubham',message:'hey guys'},
                                         {username:'shraddha',message:'hello there'}]);
  const [username,setUsername]=useState('');
  

  const sendMessage=(event)=>{

    event.preventDefault();

    setMessages([...messages,{username: username,message:input }]);
    setinput('');



  }

  useEffect(() => {
  
    setUsername(prompt('Please enter your name'));


    
  }, [])


  useEffect(() => {
  
      db.collection('messages').onSnapshot(snapshot=> {
        setMessages(snapshot.docs.map(doc=>doc.data()))

      })
  }, [])


 // console.log(input);
return (
    <div className="App">
      <h1>Welcome to Facebook Messenger!</h1>
      <h2>Hello {username}</h2>
        <form>
        <FormControl>
            <InputLabel>Enter the message...</InputLabel>
            <Input  value={input} onChange={event=>setinput(event.target.value)} />
            <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>SEND MESSAGE</Button>
       
            </FormControl>
    
          
            {messages.map((message)=>
             <Message message={message} username={username}/>)}
       
       </form>
      </div>
  );
}

export default App;

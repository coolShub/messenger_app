
import './App.css';
import {useState,useEffect} from 'react';
import SendIcon from '@material-ui/icons/Send';

import {FormControl,Input} from '@material-ui/core';
import Message from  "./Message.js";
import db from "./firebase";
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import {IconButton} from '@material-ui/core';

function App() {

 

  
  const [input, setinput] = useState('')
  const [messages,setMessages]=useState([]);
  const [username,setUsername]=useState('');
  

  const sendMessage=(event)=>{

    event.preventDefault();

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setMessages([...messages,{username: username,message:input }]);
    setinput('');



  }

  useEffect(() => {
  
    setUsername(prompt('Please enter your name'));


    
  }, [])


  useEffect(() => {
  
      db.collection('messages').orderBy('timestamp', 'desc').
      onSnapshot(snapshot=> {
        setMessages(snapshot.docs.map(doc=> ({id:doc.id,message:doc.data()})))

      })
  }, [])


  

 // console.log(input);
return (
    <div className="App">
      <h1>Messenger</h1>
      <h2>Welcome {username} !</h2>
        <form className="app__form"> 
        <FormControl className="app__formControl">
          
            <Input className="app__input" placeholder='Enter a message...' value={input} onChange={event=>setinput(event.target.value)} />

          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
            <SendIcon/>
          </IconButton> 


            </FormControl>
    
          
       </form>


      <FlipMove>
      
        {messages.map(({id,message})=>
             <Message key={id} message={message} username={username}/>)}
    
      </FlipMove>
       
      </div>
  );
}

export default App;

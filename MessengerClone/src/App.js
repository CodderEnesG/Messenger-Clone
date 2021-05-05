import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

import Message from './Message';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    // run once when the app component loads

    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    // const username = prompt(....)
    setUsername(prompt('Please enter your username'));
  }, []); // condition)

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className='App'>
     
      <h1>Hello !!</h1>
      <h2>Welcome {username}</h2>
      <form className='app__form'>
        <FormControl className='app__formControl'>
          <InputLabel>Enter Message!</InputLabel>
          <Input
            className='app__input'
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className='app__iconButton'
            variant='contained'
            color='primary'
            type='submit'
            disabled={!input}
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;

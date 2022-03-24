import React, {useState, useEffect} from 'react'
import { db, auth } from '../firebase'
import SignOut from './SignOut'
import SendMessage from './SendMessage'

function Chat() {
    const [messages, setMessages] = useState([])
    useEffect(()=> {
        db.collection('messages').orderBy('createdAt').limit(50).onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    return (
        <div>
            <SignOut />
            <div className ="msgs">

            </div>
            {messages.map(({id,text,photoURL, uid})=> (
                <div>
                    <div key={id} className={`msg ${uid == auth.currentUser ? 'sent' : 'received'}`}>
                        <img src={photoURL} alt=""/>
                        <p>{text}</p>
                    </div>
                </div>
            ))}
            <SendMessage />
        </div>
    )
}

export default Chat

import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import './App.css';

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
                height="100vh"
                projectID="70b7cdb7-ae7b-4027-ac73-54a4737c89cf"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps}/>}
        />
    )
}

export default App;
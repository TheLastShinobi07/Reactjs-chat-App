import ChatUI from './component/ChatUI';
import './App.css';
import Sidebar from './component/Sidebar';

function App() {
  return (
    <div className="App">
        <Sidebar />
        <ChatUI />
    </div>
  );
}

export default App;

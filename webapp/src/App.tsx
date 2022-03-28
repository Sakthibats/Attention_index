import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Homepage from './pages/Homepage';
import "./app.css"



function App() {
  return (
    <div>
      <Sidebar />
      <div className='container'>
        <Homepage/>
        </div>     
    </div>
  );
}

export default App;

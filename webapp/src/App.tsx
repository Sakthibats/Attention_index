import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Homepage from './components/Homepage';
import "./app.css"



function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Sidebar/>
        <Homepage/>
        </div>     
    </div>
  );
}

export default App;

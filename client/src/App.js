import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import New from './components/New';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/new' element={<New/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

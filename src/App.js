import './App.css';
import Home from './Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MultiLineGraph from './MultiLineGraph';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/multiLineGraph' element={<MultiLineGraph/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

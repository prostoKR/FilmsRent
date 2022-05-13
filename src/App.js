import { Routes, Route } from "react-router-dom";
import Create from './components/Create';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FilmDetails from './components/FilmDetails';
import NotFound from './components/NotFound';
import Edit from './components/Edit';
import CreateProducer from './components/CreateProducer';
import ProducerDetails from './components/ProducerDetails';



function App() {
  return (

    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createProducer" element={<CreateProducer />}></Route>
          <Route path="/producers/:id" element={<ProducerDetails />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/films/:id" element={<FilmDetails />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
          <Route path="*" element={<NotFound />}></Route>
       </Routes>
    </div>
    </div >

  );
}

export default App;

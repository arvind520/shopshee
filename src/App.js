import './App.css';
import Header from './components/Header';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ProductDetail from './components/ProductDetail';
import ProductListing from './components/ProductListing';
import Error404 from './components/Error404';

function App() {
  return (<>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<ProductListing />} />
        <Route path='/product/:productid' element={<ProductDetail />} />
        <Route path='/*' element={<Error404 />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;

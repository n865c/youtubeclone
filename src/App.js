import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';
import WatchVideo from './components/WatchVideo';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/watch" element={<WatchVideo/> } />
          </Routes>
        </BrowserRouter>
      </Provider>
   
    </>
     
   
  );
}

export default App;

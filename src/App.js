import { styled } from '@mui/material';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import Homepage from './Pages/Homepage';

function App() {
  const CustomApp = styled('div')(({ theme }) => ({
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  }))


  return (
    <BrowserRouter>
      <CustomApp>
        <Header />
        <Route path='/' component={Homepage} exact />
        <Route path='/coins/:id' component={CoinPage} />
      </CustomApp>
    </BrowserRouter>
  );
}

export default App;

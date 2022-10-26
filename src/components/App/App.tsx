import { FC } from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Search from '../../pages/Search/Search';
import styles from './App.module.css';

const App: FC = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/address' element={<Search />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

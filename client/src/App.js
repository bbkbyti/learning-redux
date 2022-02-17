
import { Fragment } from 'react';
import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Header />
      <Counter />
    </Fragment>
  );
}

export default App;

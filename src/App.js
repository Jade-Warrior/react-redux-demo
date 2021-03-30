import React from 'react';
import Counter from './components/Counter';
import Modal from './components/modal';
import ActionsCounter from './components/ActionsCounter';

function App() {
  return <div>
    <Counter/>
    <ActionsCounter/>
    <Modal />
  </div>
}

export default App;

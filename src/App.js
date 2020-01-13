import React,{Fragment} from 'react';
import Header from './components/Header';
import CategoryProvider from './context/CategoryContext'



function App() {
  return (
    <Fragment>
      <CategoryProvider>
        <Header/>
      </CategoryProvider>
    </Fragment>
  );
}

export default App;

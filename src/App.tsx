import React, { useState } from 'react';
import './App.css';
import SelectColumnComponent from './modules/common/SelectColumnComponent/SelectColumnComponent';
import ButtonComponent from './modules/common/ButtonComponent/ButtonComponent';
import GridBox from './modules/common/GridBox/GridBox';

function App() {
  const [numberOfCards,setNumberOfCards] = useState(5);
  const [noOfColumns,setNoOfColumns] = useState(3);

  const handleChangeColumns = (event:any) => {
    setNoOfColumns(event.target.value)
  }

  const removeCard = () => {
    setNumberOfCards(numberOfCards - 1);
  }

  const AddCard = () => {
    setNumberOfCards(numberOfCards + 1);
  }

  const ResetCard = () => {
    setNumberOfCards(5);
    setNoOfColumns(0);
  }

  return (
    <div className="App w-100 d-flex justify-content-center">
      <div className='main-container overflow-scroll mt-2 border border-rounded'>
      <h3>
        Crest Data System
      </h3>
      <div className='d-flex p-2 justify-content-between'>
            <SelectColumnComponent handleChangeColumns={handleChangeColumns} noOfColumns={noOfColumns} />
          <div className='mx-2'>
            <ButtonComponent variant="primary" title="Add Box" onChangeHandler={AddCard} />
            <ButtonComponent variant="danger" title="Reset" onChangeHandler={ResetCard} />
          </div>
      </div>
      <hr/> 
      
      <GridBox noOfColumns={noOfColumns} numberOfCards={numberOfCards} onChangeHandler={removeCard} />
     
      </div>
      
    </div>
  );
}

export default App;

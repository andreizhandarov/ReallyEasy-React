import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Accordion';
import { UncontrolAccordion } from './components/Accordion/UncontrolAccordion';
import { Rating, RatingValueType } from './components/Rating/Rating';
import { UncontrolRaiting } from './components/UncontrolRating/UncontrolRating';
import { OnOff } from './components/OnOff/OnOff';
import { UncontrolOnOff } from './components/OnOff/UncontrolOnOff';

function App() {
  let [raitingValue, setRatingValue] = useState<RatingValueType>(4);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  let [on, setOn] = useState<boolean>(false);
  return (

    <div className="App">
      <Rating 
        value={raitingValue} 
        onClick={setRatingValue} 
      />

      <UncontrolRaiting  onChange={()=>{}}/>

      <Accordion 
        titleValue={'Menu'} 
        collapsed={accordionCollapsed} 
        onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
      />
      <UncontrolAccordion />

        <OnOff 
          on={on} 
          onChange={setOn}
        />

        <UncontrolOnOff onChange={()=>{}}/>
    </div>
  );
}

export default App;

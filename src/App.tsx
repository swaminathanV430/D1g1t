import React from 'react';
import './App.css';
import { Highlight } from './Components/highlight';
import { Consecutive } from './Components/consecutive';
import {Tree} from './Components/tree';

function App() {
  return (
    <div className="App">
      <h1>D1g1t Assessment Evaluation</h1>
         <Tree items={[
  {id: 1, values: [100, 101]},
  {id: 2, values: [200, 201]},
  {id: 3, values: [300, 301], children: [
    {id: 10, values: [1000, 1001]},
    {id: 9, values: [900, 901]},
    {id: 8, values: [800, 801], children: [
      {id: 7, values: [700, 701]},
      {id: 6, values: [600, 601]}
    ]}
  ]}
]
} itemValue={1001} />
<Consecutive numbers={[100,103,104,102,105,107,106]} />
<Highlight text='This is Jane Doe' matchString='Jane'/>
       
    
    </div>
  );
}

export default App;

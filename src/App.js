import React from 'react';
import { useState } from 'react';


  const App = () => {
    const [counter, setCounter] = useState(0);

    if (counter === 100) {
      alert('You Complete Level 1')
    } else  if (counter === 200){
      alert('You Complete Level 2')
    } else  if (counter === 300){
      alert('You Complete Level 3')
    } else  if (counter === 400){
      alert('You Complete Level 4')
    } else  if (counter === 500){
      alert('You Complete Level 5')
    } else  if (counter === 600){
      alert('You Complete Level 6')
    } else  if (counter === 700){
      alert('You Complete Level 7')
    } else  if (counter === 800){
      alert('You Complete Level 8')
    } else  if (counter === 900){
      alert('You Complete Level 9')
    } else  if (counter === 1000){
      alert('You Complete Level 10, Contact TYT SOFTWARES For Your Patience Reward +233550034074')
    }


    return (
      <>
        <div className="App">
          <h2>Double Click Goes To '0'</h2>
          <button className="increase" 
            onClick={() => setCounter((incresCount) => incresCount + 1)}
            onDoubleClick={() => setCounter((0))}
          > 
            + 
          </button>

          <h1>
            {counter}
          </h1>

          <button className="decrease" 
            onClick={() => setCounter((decresCount) => decresCount - 1)}
            onDoubleClick={() => setCounter((0))} 
          > 
            - 
          </button>
        </div>
      </>
    );

  }

  export default App;
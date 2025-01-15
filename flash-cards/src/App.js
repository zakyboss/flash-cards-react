import './index.css';
import Cards from './Cards';
import { useState } from 'react';

const data= [
  {
    id:1,
   question:'What is passed from parent to children and is Read only ?',
    answer:'Props'
  },
  {
    id:2,
   question:'What is considered the building blocks of react that combine to form UI',
    answer:'Components'

  }, 
  {
    id:3,
   question:'How do you call the Language used in react ?',
    answer:'JSX'

  },
  {
    id:4,
    question:'What do you call the process where a component is reloaded?',
    answer:'re-rendering'
  }
]


function App() {
  const [flippedCardId, setFlippedCardId]= useState(null)
  function handleCardClick(id){
setFlippedCardId(flippedCardId===id ? null:id)
  }
  return (
   <div className="container">
{
  data.map(content=> 
    <Cards content = {content}  key={content.id} onClick={()=> handleCardClick(content.id)}  isFlipped={flippedCardId===content.id}/>
  )
}
    </div>
  );
}

export default App;

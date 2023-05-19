import { useState } from 'react';
import Card from './components/Card/Card';
import { userFoodData } from './hooks/userFoodData';
import CreateModal from './components/CreateModal/CreateModal.tsx'
import * as C from './App.ts'

function App() {
  const {data} =  userFoodData();
  const [isModelOpen, setIsModelOpen] = useState(false);

  const handleOpenModel = () => {
      setIsModelOpen(current => !current)
  }
  return (
    
    <>
      <C.Container>
        <C.Menu>Cardápio</C.Menu>
         <C.CardGrid>
          {data?.map(foodData => <Card 
          price={foodData.price} 
          title={foodData.title} 
          image={foodData.image} /> )}
       </C.CardGrid>
        {isModelOpen && <CreateModal closeModal={handleOpenModel}/>}
        <C.BtnOpen onClick={handleOpenModel}>Novo</C.BtnOpen>
      </C.Container>
    </>
  )
}

export default App

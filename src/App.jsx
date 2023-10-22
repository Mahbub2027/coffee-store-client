import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {
  const loaderCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loaderCoffee);

  return (
    <>
      <h1 className='text-3xl'>Coffee Store: {coffees.length}</h1>
      
      <div className='grid grid-cols-2 gap-5'>
      {
        coffees.map(coffee => <CoffeeCard key={coffee._id}
         coffee={coffee}
         coffees= {coffees}
         setCoffees={setCoffees}
         >
          
        </CoffeeCard>)
      }
      </div>
    </>
  )
}

export default App



import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App()  {    
  const [items , setItems] = useState([
    {
        id:1,
        checked:false,
        item:"item1",
    },
    {
        id:2,
        checked:false,
        item:"item2",
    },
    {
        id:3,
        checked:false,
        item:"item3",
    }
]);
const handleCheck =(id) =>{
  const listItems = items.map((item) => item.id === id ? {...item,checked: !item.checked } : item);
  setItems(listItems);
  localStorage.setItem('shoppinglist' ,JSON.stringify(listItems));
}
 const handleDelete =(id) => {
  const listItems = items.filter((item) => item.id !== id);
  setItems(listItems);
  localStorage.setItem('shoppinglist' ,JSON.stringify(listItems));
 }
  return ( 
    <div className="App">
      <Header title= "Grocery List"/>
      <Content   
        items={items} 
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer 
      length={items.length}
       />
    </div>
  );
}

export default App; //export statement
/* for an expression with a value <p>{"Apeksha"}<p> render as a string {1} also {[1,2,3]}
{} says its js expresion 
without {} it will render as it is
object are not valid can render to the page same for bollean
*/

//functional component = app component
  
  /* component return JSX(javascript in xml) =all javascirpt
  JSX allows to put js expressions in code
  It renders data as text when it displays it */
 
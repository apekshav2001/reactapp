

import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';

function App()  {    
  const [items , setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));
const [newItem, setNewItem] = useState(' ')
const [search, setSearch] = useState('')

useEffect(() => {
  localStorage.setItem('shoppinglist' ,JSON.stringify(items));
 } , [items]
)

const addItem = (item) => {
  const id = items.length ? items[items.length -1].id + 1 : 1;
  const myNewItem ={id, checked:false, item};
  const listItems = [...items, myNewItem];
  setItems(listItems);
}
const handleCheck = (id) =>{
  const listItems = items.map((item) => item.id === id ? {...item,checked: !item.checked } : item);
   setItems(listItems);

}
 const handleDelete =(id) => {
  const listItems = items.filter((item) => item.id !== id);
   setItems(listItems);

 }
 const handleSubmit = (e) => {
  e.preventDefault();
  if(!newItem) return;
  console.log(newItem);
  addItem(newItem)
  setNewItem('');
  
 }
  return ( 
    <div className="App">
      <Header title= "Grocery List"/>
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
      <SearchItem
      search={search}
      setSearch={setSearch}
      />
      <Content   
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} 
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
 
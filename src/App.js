

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App()  {    //functional component = app component
  
  /* component return JSX(javascript in xml) =all javascirpt
  JSX allows to put js expressions in code
  It renders data as text when it displays it */
  return ( 
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App; //export statement
/* for an expression with a value <p>{"Apeksha"}<p> render as a string {1} also {[1,2,3]}
{} says its js expresion 
without {} it will render as it is
object are not valid can render to the page same for bollean
*/
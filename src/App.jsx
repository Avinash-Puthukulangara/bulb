import React, { useState } from 'react';
import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import bbon from './assets/bon1.png'
import bboff from './assets/boff1.png'


function App() {

  const [toggle1, settoggle1] = useState(false)
  const toggleButton1 = ()=>{
    settoggle1(!toggle1)
  }
  const [toggle2, settoggle2] = useState(false)
  const toggleButton2 = ()=>{
    settoggle2(!toggle2)
  }


  const PropsBackground = styled.div(props => ({
    height: '100vh',
    width: '100%',
    backgroundColor: '#e1e6e6',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center'
  }));

  const Box = styled.div(props=>({
    height: '70vh',
    width:'60%',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: '5%',
    boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'
  }));
  
  const Button = styled.button`
  font-size: 1.1em;
  margin:1em;
  padding: 0.25em 1em;
  border-radius: 10px;

  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.bordercolor};
`;

  return (
      <div>
        <PropsBackground>
          <Box>
            <div className='firstbulb'>
            <img src={toggle1?bbon:bboff} alt='bulb'/>
            <Button onClick={toggleButton1} className='firstbutton'
            theme={{main: "royalblue",bordercolor: "black"}}>{toggle1?'On':'Off'}</Button>
            </div>
            <div className='secondbulb'>
            <img src={toggle2?bbon:bboff} alt='bulb'/>
            <Button onClick={toggleButton2} 
            theme={{main: "darkorange",bordercolor: "black"}}>{toggle2?'On':'Off'}</Button>    
            </div>
          </Box>
        </PropsBackground>
      </div>
  );
}

export default App;

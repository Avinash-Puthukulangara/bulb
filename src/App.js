import React from 'react';
import './App.css';
import styled from 'styled-components';



function App() {

  const PropsBackground = styled.div(props => ({
    background: props.$background,
    height: '100vh',
    width: '100%',
    backgroundColor: '#e1e6e6'
  }));
  

  return (
    <div>
      <div>
        <PropsBackground/>
      </div>
    </div>
  );
}

export default App;

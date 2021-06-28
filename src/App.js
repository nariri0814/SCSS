import React from 'react';
import styled, {ThemeProvider} from 'styled-components'
// import './App.scss'
// import Button from './Component/Button';
// import CheckBox from './Component/CheckBox';
import Button from './Component/Button(styleComponents)'

// const Circle = styled.div`
//   width: 5rem;
//   height: 5rem;
//   background: ${props => props.color};
//   border-radius:50%;
//   ${props => props.huge && `
//     width: 10rem;
//     height: 10rem;
//   `}
// `;

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  // const [check, setCheck] = useState(false);
  // const onChange = (e) => {
  //   setCheck(e.target.checked);
  // }
  return (
    <ThemeProvider theme={{blue: '#228be6', gray: '#496057', pink:'#f06595'}}>
      <AppBlock>
        <Button>BUTTON</Button>
        <Button color="gray">BUTTON</Button>
        <Button color="pink">BUTTON</Button>
      </AppBlock>
    {/* <Circle color="black"/>
    <Circle color="blue" huge/> */}
    </ThemeProvider>

    // <div>
    //   <CheckBox onChange={onChange} checked={check}>다음 약관에 모두 동의</CheckBox>
    // </div>


    // <div className="App">
    //   <div className="buttons">
    //     <Button size="large" onClick={() => console.log('클릭클릭')}>BUTTON</Button>
    //     <Button>BUTTON</Button>
    //     <Button size="small">BUTTON</Button>
    //   </div>
    //   <div className="buttons">
    //     <Button size="large" color="indigo">BUTTON</Button>
    //     <Button color="indigo">BUTTON</Button>
    //     <Button size="small" color="indigo">BUTTON</Button>
    //   </div>
    //   <div className="buttons">
    //     <Button size="large" color="yellow">BUTTON</Button>
    //     <Button color="yellow">BUTTON</Button>
    //     <Button size="small" color="yellow">BUTTON</Button>
    //   </div>

    //   <div className="buttons">
    //     {/*outline 만 써도 outline={true}라고 인식*/}
    //     <Button size="large" outline>BUTTON</Button>
    //     <Button color="indigo" outline>BUTTON</Button>
    //     <Button size="small" color="yellow" outline>BUTTON</Button>
    //   </div>

    //   <div className="buttons">
    //     <Button size="large" fullwidth>BUTTON</Button>
    //     <Button size="large" color="indigo" fullwidth>BUTTON</Button>
    //     <Button size="large" color="yellow" fullwidth>BUTTON</Button>
    //   </div>
    // </div>
  );
}

export default App;

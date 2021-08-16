import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const ColorContext = React.createContext(localStorage.getItem('myColor'));
function ChangeColor(){
    const [color, setColor] = React.useState(localStorage.getItem('myColor'));
    
    const handleChange = (e) => {
        setColor(e.currentTarget.value) 
        localStorage.setItem('myColor', e.currentTarget.value);
        // console.log(e.currentTarget.value);
    }
    
    return (
        <>
            <select name="select"
                onChange = {handleChange}
            >
                <option value="red">red</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
            
            </select>
            <hr/>
            <ColorContext.Provider value={color}>
                <Square value={1}/>
            </ColorContext.Provider>
            
        </>
    )
    
}

function Square(props) {
    // console.log("Props: "+props.value);
    const [counter, setCounter] = React.useState(props.value);
    const onClick = (e) => {
        // console.log(e);
        setCounter(+counter+1);
    }

    return (
        
        <>
            <Inner value={counter} >
                <span>Counter</span>
            </Inner>
            <button className="square" onClick={onClick}>
               {counter}
            </button>
        </>
    )
}

function Inner(props){
        let color= React.useContext(ColorContext);
        // debugger;
        // console.log("this.context: " + color)
        const {value, children} = props
        return (
            <span style={{backgroundColor: color}}>
                {value}
                {children}
            </span>
        )
    
}

function Appp() {
    return <ChangeColor/>
}
ReactDOM.render(
    <Appp />    ,
    document.getElementById('root')
);

reportWebVitals();

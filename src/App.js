import './App.css';
import { useState } from 'react';

function App() {
  const [count,setcount]=new useState(0);
  const [str,setstr]=new useState("");
  const [cstr,setcstr]=new useState("");
  const Bracket=()=>{
    if(count==0){
      setstr(str+"(");
      setcstr(cstr+"(");
      setcount(1);
    }else{
      setcstr(cstr+")");
      setstr(str+")");
      setcount(0);
    }
  }
  const Calculate=()=>{
    setstr(eval(cstr));
    setcstr(eval(cstr));
  }
  const SetOp=(e)=>{
    switch(e){
      case "del":{
        setstr(str.substring(0,str.length-1));
        setcstr(cstr.substring(0,cstr.length-1));
      }break;
      case "":{
        setstr(e);
        setcstr(e);
        
      }break;
      case "X":{
        setstr(str+e);
        setcstr(cstr+"*");
      }break;
      case "÷":{
        setstr(str+e);
        setcstr(cstr+"/");
      }break;
      default:{
        setstr(str+e);
        setcstr(cstr+e);
      }break;
    }
    console.log(cstr)
  }
  return (
    <>
      <div className="calc">
        <div className="display">
          <input defaultValue={str} id="in"/>
          <div id="show">{cstr}</div>
        </div>
        <div className="nums">
          <div>
            <button onClick={()=>{SetOp("del")}}>Del</button>
            <button onClick={()=>{SetOp("7")}}>7</button>
            <button onClick={()=>{SetOp("4")}}>4</button>
            <button onClick={()=>{SetOp("1")}}>1</button>
            <button onClick={()=>{SetOp("")}}>C</button>
          </div>
          <div>
            <button onClick={()=>{Bracket()}}>()</button>
            <button onClick={()=>{SetOp("8")}}>8</button>
            <button onClick={()=>{SetOp("5")}}>5</button>
            <button onClick={()=>{SetOp("2")}}>2</button>
            <button onClick={()=>{SetOp("0")}}>0</button>
          </div>
          <div>
            <button onClick={()=>{SetOp("%")}}>%</button>
            <button onClick={()=>{SetOp("9")}}>9</button>
            <button onClick={()=>{SetOp("6")}}>6</button>
            <button onClick={()=>{SetOp("3")}}>3</button>
            <button onClick={()=>{SetOp(".")}}>.</button>
          </div>
          <div>
            <button onClick={()=>{SetOp("÷")}}>÷</button>
            <button onClick={()=>{SetOp("X")}}>X</button>
            <button onClick={()=>{SetOp("-")}}>-</button>
            <button onClick={()=>{SetOp("+")}}>+</button>
            <button onClick={()=>{Calculate()}}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

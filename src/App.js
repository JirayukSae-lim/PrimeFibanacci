import React,{useState, useEffect} from 'react'
import './App.css';

function App() {

  const [num , setNum] = useState(1);
  const [func , setFunc] = useState('1');
  const [res , setRes] = useState('true');

  useEffect(initialValue,[num,func]);

  function initialValue(){
    calculation();
  }

  const col1Function = (value) =>{
    if(parseInt(value) <= 0){
      setNum(1);
    }else{
      let i = Math.round(value)
      setNum(i);
    }
  }

  const calculation = () =>{
    if(func === '1'){
      if(num === 2 || num === 3){
        setRes('true');
      }else{
        for(var i = 2; i < parseInt(num); i++){
          if(num % i === 0 ) {
            setRes('false');
            break;

          }else{
            setRes('true');
          }
        } 
      }
    }else if(func === '2'){
      let a = 0 ;
      let b = 1 ;
      let c = a+b;
      while(c<=num)
            {
                if(c == num) {setRes('true');}else{setRes('false');}
                a = b;
                b = c;
                c = a + b;
            }
           
      if (num === 0 || num === 1) {
        setRes('true');
      }
    }
  }
  return (
    <div className="App">
     <div className='col1'>
        <input type='number' id='BoxNum' onClick={()=>{setNum(1)}} onChange={(e)=>{col1Function(e.target.value)}}  min='1' value={num}/>
     </div>
     <div className='col2'>
        <select value={func} onChange={(e)=>{setFunc(e.target.value)}}>
          <option value='1'>isPrime</option>
          <option value='2'>isFibonacci</option>
        </select>
     </div>
     <div className='col3'>
       {res?res === 'true'?
       <p>true</p>
       :<p>false</p>

        :null}
     </div>
    </div>
  );
}

export default App;

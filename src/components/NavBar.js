import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './NavBar.css';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { useParams } from '../context';

const NavBar = () => {

  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();


  const generateMap = () => {
    let grid = [];
    for(let i = 0; i < 14; i++){
        let temp = [];
        for(let j = 0; j < 40; j++){
            temp.push({
                r: i,
                c: j,
                isStart : false,
                isEnd : false,
                isWall : false,
                isWeight : false  
            })
        }
        grid.push(temp)
    }
  
    dispatch({
      type: 'UPDATE_MAP',
      map: grid
    })
  }


  const handleStart = (startPoint) => {

    if(!myState.startPoint){
      console.log("START BUTTON CLICKED");
    }

    else{
       return;
    }
    dispatch({
       type: 'START',
       startPoint: true
    })
 }


 const handleEnd = (endPoint) => {

  if(!myState.endPoint){
    console.log("END BUTTON CLICKED");
  }

  else{
     return;
  }
  dispatch({
     type: 'END',
     endPoint: true
  })
}

const handleWall = (wallPoint) => {

  if(!myState.wallPoint){
    console.log("WALL BUTTON CLICKED");
  }

  else{
     return;
  }
  dispatch({
     type: 'WALL',
     wallPoint : true
  })
}

const handleWeight = (weightPoint) => {

  if(!myState.weightPoint){
    console.log("WEIGHT BUTTON CLICKED");
  }

  else{
     return;
  }
  dispatch({
     type: 'WEIGHT',
     weightPoint: true
  })
}


const handleReset = (reset) => {

  if(!myState.reset){
    console.log("RESET BUTTON CLICKED");
  }

  else{
     return;
  }
  dispatch({
     type: 'RESET',
     reset: true
  })
}

  const handlePlay = (play) => {

    if(!myState.play){
      console.log("PLAY BUTTON CLICKED");
    }

    else{
       return;
    }
    dispatch({
       type: 'PLAY',
       play: true
    })
 }

 const handleAlgo = (graphAlgo) => {
  console.log(graphAlgo);
  dispatch({
    type: "UPDATE_ALGORITHM",
    graphAlgorithm: graphAlgo,
  });
};

useEffect(() => {
  console.log("GENERATING MAP!")
  generateMap();
},[])


  // const {mode,setmode,algo,setalgo,setres,setrun}=useParams();
    return (
        <div className="navDiv">
    
          <FormControl  variant="filled" sx={{ m: 1, minWidth: 190 }}>
            <InputLabel>Graph Algorithm</InputLabel>
            <Select
              className="menuClass"
              id="graph"
              value={myState.graphAlgorithm}
              onChange={(e)=>{handleAlgo(e.target.value)}}
              
            >
              <MenuItem className="itmClass" value="bfs">BFS</MenuItem>
              <MenuItem className="itmClass" value="dfs">DFS</MenuItem>
              {/* <MenuItem className="itmClass" value="dijkstra">Dijkstra</MenuItem>
              <MenuItem className="itmClass" value="quick">Quick Sort</MenuItem> */}
            </Select>
          </FormControl>
    
          
          
          {/* IF WANT TO ADD SPEED */}
    
          {/* <FormControl variant="filled" sx={{ m: 1, minWidth: 130 }}>
            <InputLabel>Speed</InputLabel>
            <Select
              className="menuClass"
              id="speed"
              
            >
              <MenuItem className="itmClass" value={1000}> Slow </MenuItem>
              <MenuItem className="itmClass" value={300}> Medium </MenuItem>
              <MenuItem className="itmClass" value={100}> Fast </MenuItem>
            </Select>
          </FormControl> */}


          <button id='start' className="btn" onClick={() => handleStart(true)}> START </button>
          {/* <button id='start' className="btn"> START </button> */}
          {/* <button id='start' className={['btn' , mode=='setstart'? 'selected' : ''].join(' ')} onClick={()=>{
            if(mode == 'setstart') setmode(null)
            else {setmode('setstart')}
          }}> START </button> */}
          
          <button id='end' className="btn" onClick={() => handleEnd(true)}> END </button>
          {/* <button id='end' className="btn"> END </button> */}
          {/* <button id='end' className={['btn' ,mode=='settarget'? 'selected' : ''].join(' ')} onClick={()=>{
            if(mode == 'settarget') setmode(null)
            else {setmode('settarget')}
          }}> END </button> */}

          <button id='wall' className="btn" onClick={() => handleWall(true)}> WALL </button>
          {/* <button id='wall' className="btn"> WALL </button> */}
          {/* <button id='wall' className={['btn' , mode=='addbricks'? 'selected' : ''].join(' ')} onClick={()=>{
            if(mode == 'addbricks') setmode(null)
            else {setmode('addbricks')}
          }}> WALL </button> */}

          {/* <button id='weight' className="btn" onClick={() => handleWeight(true)}> WEIGHT </button> */}
          {/* <button id='weight' className="btn"> WEIGHT </button> */}
          {/* <button id='weight' className={['btn', mode=='addweight'? 'selected' : ''].join(' ')} onClick={()=>{
              if(mode == 'addweight') setmode(null)
              else {setmode('addweight')}
            }}> WEIGHT </button> */}

          {/* <button id='reset' className="btn" onClick={() => handleReset(true)}> RESET </button> */}
          {/* <button id='resrt' className="btn"> RESET </button> */}
          {/* <button id='resrt' className="btn" onClick={()=>{setres((old)=>{ return !old})}}> RESET </button> */}

          <button id='play' className="btn" onClick={() => handlePlay(true)}> PLAY </button>
          {/* <button id='play' className="btn"> PLAY </button> */}
          {/* <button id='play' className="btn" onClick={()=>{setrun((old)=>{ return !old})}}> PLAY </button> */}
    


          {/* IF WANT TO ADD GRID SIZE -> FOR THAT CAN BE USED 2 NUM/TEXT FIELDS OR SLIDE BAR */}

        </div>
      );
} 
export default NavBar;
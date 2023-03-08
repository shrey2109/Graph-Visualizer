import React, { useEffect, useState } from "react";
import { getGrid } from "../startingGrid";
import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from '../context';
import "./Grid.css";
const Grid = () => {
  const hash = (i,j) => {
    return 2001*(i+1000)+(j+1000);
  }
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const grid = [...myState.map];
  let editingFlag = false;
  // const {grid,setgrid,editing,seteditFlag,mode,start,end,run,res,algo} = useParams()
  const hello = () => {
      console.log("MOUSE DOWN START ON...")
      if(editingFlag) editingFlag = false;
      else editingFlag = true;
  }

  const handleBlock = () => {
    console.log("HELLO");
  }


  const generateMap = () => {
    console.log("generatin MAP")
    return(
        grid.map((row,index) => {
          return <div className='map-row' key={index}>
              {row.map(block => {
                  let has = hash(block.r,block.c);
                  {/* return <div className="block" id={has} key={has} style={{transform:`translateX(${block.c*11}px)`}}></div> */}
                  {/* return <div className="block" id={has} key={has} style={{height:'30px', width:'90px', backgroundColor:'lightgray',border:'2px solid black', transform:`translateX(${block.c*11}px)`}} onClick={() => handleBlock()}>{has}</div> */}
                  {/* return <button className="block" id={has} key={has} style={{height:'30px', width:'90px', backgroundColor:'lightgray',border:'2px solid black', transform:`translateX(${block.c*11}px)`}} onClick={() => handleBlock()}>{has}</button> */}
                  {/* return <button className="gridbtn" id={has} onClick={(e) => btnClick(has, block)} onMouseDown={() => onMouseDown()} onMouseUp={() => onMouseDown()} onMouseMove={(e) => btnClick(has, block)}> </button> */}
                  return <button className="gridbtn" id={has} onClick={(e) => btnClick(has, block)} onMouseDown={() => hello()} onMouseUp={() => hello()} onMouseMove={(e) => wallClick(has, block)}> </button>
                  {/* THIS IS ALSO WORKING -> CAN BE USED AFTER SOME(MANY) MODIFICATION. */}
                  {/* return <button className="gridbtn" id={has} onMouseMove={(e) => btnClick(has, block)}> </button> */}
                })
              }
          </div>
      })
    )
  }



  const btnClick = (e, block) => {
    if(myState.startPoint){
      console.log("GRID BUTTON CLICKED" + e);
      block.isStart = true;
      console.log("IS START PROPERTY : " + block.isStart);
      console.log("ROW : " + block.r);
      document.getElementById(e).style.backgroundColor="#5555ff";
      document.getElementById(e).innerText="S";
      myState.startPoint=false
      document.getElementById('start').disabled = true;
      document.getElementById('start').style.backgroundColor = '#CCCCCC';
      document.getElementById('start').style.cursor='not-allowed';
    }

    if(myState.endPoint){
      console.log("GRID BUTTON CLICKED" + e);
      block.isEnd = true;
      console.log("IS END PROPERTY : " + block.isEnd);
      console.log("ROW : " + block.r);
      document.getElementById(e).style.backgroundColor="#00e600";
      document.getElementById(e).innerText="E";
      myState.endPoint=false
      document.getElementById('end').disabled = true;
      document.getElementById('end').style.backgroundColor = '#CCCCCC';
      document.getElementById('end').style.cursor='not-allowed';
    }

    // if(myState.wallPoint && editingFlag){
    //   console.log("GRID BUTTON CLICKED" + e);
    //   block.isWall = true;
    //   console.log("IS WALL PROPERTY : " + block.isWall);
    //   console.log("ROW : " + block.r);
    //   document.getElementById(e).style.backgroundColor="gray";
    //   document.getElementById(e).innerText="W";
    //   // myState.wallPoint=false
    //   // document.getElementById('wall').disabled = true;
    //   // document.getElementById('wall').style.backgroundColor = '#CCCCCC';
    //   // document.getElementById('wall').style.cursor='not-allowed';
    // }
    
    if(myState.reset){
      console.log("GRID BUTTON CLICKED" + e);
      block.reset = true;
      console.log("IS END PROPERTY : " + block.isEnd);
      console.log("ROW : " + block.r);
      generateMap();
    }

  }

  const wallClick = (e, block) => {
    if(myState.wallPoint && editingFlag){
      console.log("GRID BUTTON CLICKED" + e);
      console.log("IS WALL PROPERTY : " + block.isWall);
      console.log("ROW : " + block.r);
      if(block.isStart===false && block.isEnd===false){
        block.isWall = true;
        document.getElementById(e).style.backgroundColor="gray";
        document.getElementById(e).innerText="W";
      }
    }
  }

  return (
    <div className="visuals"
    // onMouseDown={hello()}
    // onMouseUp={hello()}
    >
      <div className='map-container' 
        // onMouseMove={btnClick}
        // onMouseDown={()=>{onMouseDown(e)}} 
        // onMouseMove={onMouseMove}
        // onClick={handleBlock()}
      >
          {generateMap()}        
      </div>
    </div>
  )
};
//     document.getElementById(has).style.backgroundColor = "blue";
// {grid.map((row,index) => {
//   {row.map(block => {
//     let has = hash(block.r,block.c);
//     document.getElementById(has).style.backgroundColor = "blue";
//         })
//       }
// })}

export default Grid;






















// import React, { useEffect, useRef } from 'react'
// import { useState  } from 'react'
// import { getGrid } from '../startingGrid'
// import './Grid.css'
// import { useParams } from '../context'

// export default function Grid() {

//   const {grid,setgrid,editing,seteditFlag,mode,start,end,run,res,algo} = useParams()

//   const [refarray,mm]=useState(getrefarray(grid))
//   const ur = useRef();
//   function getrefarray(grid){
//     let array=[]
//    grid.forEach((elem)=>{
//     elem.forEach((child)=>{
//       // array.push(useRef())
//       array.push()
//     })
//    })
//    return array
//  }

//   function BFS(graph,hashmap,prevmap,start,target){
//     let queue=[start]
//     let count=0
//     hashmap[`${start.x}-${start.y}`]=true
//     while (queue.length > 0){
//       count+=1
//       let c=queue.pop()
//       refarray[c.x+c.y*50].current.style['transition-delay']=`${count * 8}ms`
//       refarray[c.x+c.y*50].current.classList.add('visited')
//       if (c.x == target.x && c.y == target.y) return [c,count]

//       if(c.x+1 < 50 && !hashmap[`${c.x+1}-${c.y}`] && !graph[c.y][c.x+1].iswall){
//         queue.unshift({x:c.x +1,y:c.y})
//         prevmap[`${c.x+1}-${c.y}`]={...c}
//         hashmap[`${c.x+1}-${c.y}`]=true
//       }
//       if(c.x-1 >=0 && !hashmap[`${c.x-1}-${c.y}`] && !graph[c.y][c.x-1].iswall){
//         queue.unshift({x:c.x -1,y:c.y})
//         prevmap[`${c.x-1}-${c.y}`]={...c}
//         hashmap[`${c.x-1}-${c.y}`]=true
//       }
//       if(c.y+1 < 25 && !hashmap[`${c.x}-${c.y+1}`] && !graph[c.y+1][c.x].iswall){
//         queue.unshift({x:c.x ,y:c.y+1})
//         prevmap[`${c.x}-${c.y+1}`]={...c}
//         hashmap[`${c.x}-${c.y+1}`]=true
//       }
//       if(c.y-1 >=0 && !hashmap[`${c.x}-${c.y-1}`] && !graph[c.y-1][c.x].iswall){
//         queue.unshift({x:c.x ,y:c.y-1})
//         prevmap[`${c.x}-${c.y-1}`]={...c}
//         hashmap[`${c.x}-${c.y-1}`]=true
//       }
//     }
//     return null
//   }

//   function BDS(graph,hashmap,prevmap,start,target){
//     let queue=[start]
//     let count=0
//     hashmap[`${start.x}-${start.y}`]=true
//     while (queue.length > 0){
//       count+=1
//       let c=queue[0]
//       queue.shift()
//       refarray[c.x+c.y*50].current.style['transition-delay']=`${count * 8}ms`
//       refarray[c.x+c.y*50].current.classList.add('visited')
//       if (c.x == target.x && c.y == target.y) return [c,count]

//       if(c.y+1 < 25 && !hashmap[`${c.x}-${c.y+1}`] && !graph[c.y+1][c.x].iswall){
//         queue.unshift({x:c.x ,y:c.y+1})
//         prevmap[`${c.x}-${c.y+1}`]={...c}
//         hashmap[`${c.x}-${c.y+1}`]=true
//       }
//       if(c.x-1 >=0 && !hashmap[`${c.x-1}-${c.y}`] && !graph[c.y][c.x-1].iswall){
//         queue.unshift({x:c.x -1,y:c.y})
//         prevmap[`${c.x-1}-${c.y}`]={...c}
//         hashmap[`${c.x-1}-${c.y}`]=true
//       }
//       if(c.y-1 >=0 && !hashmap[`${c.x}-${c.y-1}`] && !graph[c.y-1][c.x].iswall){
//         queue.unshift({x:c.x ,y:c.y-1})
//         prevmap[`${c.x}-${c.y-1}`]={...c}
//         hashmap[`${c.x}-${c.y-1}`]=true
//       }
//       if(c.x+1 < 50 && !hashmap[`${c.x+1}-${c.y}`] && !graph[c.y][c.x+1].iswall){
//         queue.unshift({x:c.x +1,y:c.y})
//         prevmap[`${c.x+1}-${c.y}`]={...c}
//         hashmap[`${c.x+1}-${c.y}`]=true
//       }
//     }
//     return null
//   }

//  useEffect(()=>{

// if (algo == 'BFS'){
//   let hashmap={}
//   let prevmap={}
//   for (let j=0;j<25;j++){
//    for (let i=0;i<50;i++){
//      hashmap[`${i}-${j}`]=false
//      prevmap[`${i}-${j}`]=null
//    }
//  }
//  let result=BFS(grid,hashmap,prevmap,start.current,end.current)
//  let path=[]
//  if (result !=null){
//   let current=result[0]
//   while (prevmap[`${current.x}-${current.y}`] != null){
//     path.push(current)
//     current=prevmap[`${current.x}-${current.y}`]
//   }
//   setTimeout(()=>{path.reverse().forEach((elem,index)=>{
//     refarray[elem.x+elem.y*50].current.style['transition-delay']=`${( index) * 15}ms`
//       refarray[elem.x+elem.y*50].current.classList.add('path')
//   })},result[1]*9)

//  }

// }
// if (algo == 'BDS'){
//   let hashmap={}
//   let prevmap={}
//   for (let j=0;j<25;j++){
//    for (let i=0;i<50;i++){
//      hashmap[`${i}-${j}`]=false
//      prevmap[`${i}-${j}`]=null
//    }
//  }
//   let result=BDS(grid,hashmap,prevmap,start.current,end.current)
//   let path=[]
//   if (result !=null){
//    let current=result[0]
//    while (prevmap[`${current.x}-${current.y}`] != null){
//      path.push(current)
//      current=prevmap[`${current.x}-${current.y}`]
//    }
//    setTimeout(()=>{path.reverse().forEach((elem,index)=>{
//      refarray[elem.x+elem.y*50].current.style['transition-delay']=`${( index) * 15}ms`
//        refarray[elem.x+elem.y*50].current.classList.add('path')
//    })},result[1]*9)

//   }

//  }
//  },[run])

//  useEffect(()=>{
//   refarray.forEach((elem)=>{elem.current.style['transition-delay']='0ms'})
//   refarray.forEach((elem)=>{elem.current.classList.remove('visited');elem.current.classList.remove('path')})
//  },[res])

//   return (
//     <div className='board'>
//       {refarray.map((elem,index)=> {
//         let classList=['cell']

//         let yindex=Math.floor(index/50)
//         let xindex=index % 50
//         let cell=grid[yindex][xindex]

//         if (cell.iswall) {
//           classList.push('wall')
//         }

//         return <div key={`${index}`} ref={elem}  className={classList.join(' ')}
//         onMouseDown={()=>{seteditFlag(true)}} onMouseUp={()=>{seteditFlag(false)}}
//         onMouseMove={()=>{
//           if (!editing) return
//           const current= grid[yindex][xindex]
//            if (current.isstart || current.istarget ) return
//            switch(mode){
//             case 'setstart':
//               var newgrid=grid.map((elem)=>{
//               return elem.map((elem)=>{
//                 if (!elem.isstart) return elem
//                 return {...elem,isstart:false}
//               })
//              })
//              newgrid[yindex][xindex]={...newgrid[yindex][xindex],isstart:true,istarget:false,weight:1,iswall:false}
//              start.current={x:xindex,y:yindex}
//              setgrid(newgrid)
//              break;

//            case 'settarget':
//                 var newgrid=grid.map((elem)=>{
//                 return elem.map((elem)=>{
//                   if (!elem.istarget) return elem
//                   return {...elem,istarget:false}
//                 })
//                })
//                newgrid[yindex][xindex]={...newgrid[yindex][xindex],isstart:false,istarget:true,weight:1,iswall:false}
//                end.current={x:xindex,y:yindex}
//                setgrid(newgrid)
//                break;

//              case 'addbricks':
//                 var newgrid=grid.slice()
//                newgrid[yindex][xindex]={...newgrid[yindex][xindex],weight:1,iswall:true}
//                setgrid(newgrid)
//                break;

//             case 'addweight':
//                 var newgrid=grid.slice()
//                newgrid[yindex][xindex]={...newgrid[yindex][xindex],weight:5,iswall:false}
//                setgrid(newgrid)
//                break;
//            default:
//              return
//             }}}>

//           {/* {cell.weight > 1 ? <i className="bi bi-virus"></i> : null}
//           {cell.isstart ? <i className="bi bi-geo-alt"></i> : null }
//           {cell.istarget ? <i className="bi bi-geo"></i> : null } */}

//          </div>
//       })}
//     </div>
//   )
// }

// const Grid = () => {
//   const {grid,setgrid,editing,seteditFlag,mode,start,end,run,res,algo} = useParams()
//     return(
//       <div className='visuals'>
//       <div className="visualizer" style={{display:'inline-block'}}>
//       hello
//       {grid.map((row,index) => {
//           return <div className='visual__item' style={{diplay:'inline-block'}} key={index}>
//             {/* return <div className="block" style={{backgroundColor:'red' , transform:`translateX(${row.x*11}px)`}}></div> */}
//               {row.map(block => {
//                   {/* let has = hash(block.r,block.c); */}
//                   return <div className="visual" style={{height:'30px', width:'30px', backgroundColor:'lightblue',  transform:`translateX(${block.x*30}px)`, display:'inline-block', margin:'0px', padding:'0px'}}></div>
//                   return <> HI</>
//                   {/* return <div className="block" style={{color:'black', transform:`translateX(${block.y*11}px)`}}></div> */}
//                 })
//              }
//           </div>
//       })}
//       {/* <NavigationIcon id="navigation-icon"/> */}
//   </div>
//   </div>
//     )
// }
// export default Grid;

// <div style={{height:'100px', width:'100px', backgroundColor:'red', display:'inline-block'}}></div>
// <div style={{height:'100px', width:'100px', backgroundColor:'black', display:'inline-block'}}></div>
// <div style={{height:'100px', width:'100px', backgroundColor:'blue', display:'inline-block'}}></div>
// <div style={{height:'100px', width:'100px', backgroundColor:'yellow', display:'inline-block'}}></div>
// <div style={{height:'100px', width:'100px', backgroundColor:'green', display:'inline-block'}}></div>

// import React from 'react';
// import { getGrid } from '../startingGrid';
// // import { useParams } from '../context';
// import './Grid.css';
//       const Grid = () => {
//   // const {grid,setgrid,editing,seteditFlag,mode,start,end,run,res,algo} = useParams()
//     return(
//       <>
//         hello
//         <div className='map-container'>
//         {grid.map((row,index) => {
//             return <div className='map-row' key={index}>
//                 {row.map(block => {
//                     {/* let has = hash(block.r,block.c); */}
//                     return <div className="block" style={{height:'30px', width:'30px', backgroundColor:'lightblue', transform:`translateX(${block.c*11}px)`}}></div>
//                     {/* return <div className="block" style={{transform:`translateX(${block.c*11}px)`}}></div> */}
//                   })
//                 }
//             </div>
//         })}
//         {/* <NavigationIcon id="navigation-icon"/> */}
//     </div>
//       </>
//     )
// }
// export default Grid;






// --------------  FINAL  --------------------

// return (
//   <>
//     hello
//     <div className='map-container' 
//       onMouseDown={onMouseDown}
//       // onMouseDown={()=>{onMouseDown(e)}} 
//       // onMouseUp={onMouseUp}
//       // onMouseMove={onMouseMove}
//       onClick={handleBlock()}
//     >
//         {grid.map((row,index) => {
//             return <div className='map-row' key={index}>
//                 {row.map(block => {
//                     let has = hash(block.r,block.c);
//                     {/* return <div className="block" id={has} key={has} style={{transform:`translateX(${block.c*11}px)`}}></div> */}
//                     {/* return <div className="block" id={has} key={has} style={{height:'30px', width:'90px', backgroundColor:'lightgray',border:'2px solid black', transform:`translateX(${block.c*11}px)`}} onClick={() => handleBlock()}>{has}</div> */}
//                     {/* return <button className="block" id={has} key={has} style={{height:'30px', width:'90px', backgroundColor:'lightgray',border:'2px solid black', transform:`translateX(${block.c*11}px)`}} onClick={() => handleBlock()}>{has}</button> */}
//                     return <button className="gridbtn" id={has} onClick={(e) => btnClick(has, block)}>  </button>
//                   })
//                 }
//             </div>
//         })}
//         {/* <NavigationIcon id="navigation-icon"/> */}
//     </div>
//   </>
// )


























// import React, { useEffect, useState } from "react";
// import { getGrid } from "../startingGrid";
// import { useSelector, useDispatch } from 'react-redux';
// import "./Grid.css";
// const Grid = () => {
//   const hash = (i,j) => {
//     return 2001*(i+1000)+(j+1000);
//   }
//   const myState = useSelector((state) => state.updateProps);
//   const dispatch = useDispatch();
//   const grid = [...myState.map];
//   let editingFlag = false;
//   let count = 1;

//   const hello = () => {
//       console.log("MOUSE DOWN START ON...")
//       if(editingFlag) editingFlag = false;
//       else editingFlag = true;
//   }

//   const handleBlock = () => {
//     console.log("HELLO");
//   }


//   const generateMap = () => {
//     console.log("generatin MAP")
//     return(
//         grid.map((row,index) => {
//           return <div className='map-row' key={index}>
//               {row.map(block => {
//                   let has = hash(block.r,block.c);
//                   {/* return <button className="gridbtn" id={has} onClick={(e) => btnClick(has, block)} onMouseDown={() => hello()} onMouseUp={() => hello()} onMouseMove={(e) => wallClick(has, block)}> </button> */}
//                   return <button className="gridbtn" id={has} onClick={(e) => btnClick(has, block)}> </button>
//                 })
//               }
//           </div>
//       })
//     )
//   }



//   const btnClick = (e, block) => {
//     if(myState.startPoint){
//       console.log("GRID BUTTON CLICKED" + e);
//       block.isStart = true;
//       console.log("IS START PROPERTY : " + block.isStart);
//       console.log("ROW : " + block.r);
//       document.getElementById(e).style.backgroundColor="#5555ff";
//       document.getElementById(e).style.borderRadius="20px";
//       document.getElementById(e).style.height="35px";
//       document.getElementById(e).style.width="35px";
//       document.getElementById(e).innerText="S";
//       myState.startPoint=false
//       document.getElementById('start').disabled = true;
//       document.getElementById('start').style.backgroundColor = '#CCCCCC';
//       document.getElementById('start').style.cursor='not-allowed';
//     }

//     if(myState.endPoint){
//       console.log("GRID BUTTON CLICKED" + e);
//       block.isEnd = true;
//       console.log("IS END PROPERTY : " + block.isEnd);
//       console.log("ROW : " + block.r);
//       document.getElementById(e).style.backgroundColor="#00e600";
//       document.getElementById(e).style.borderRadius="20px";
//       document.getElementById(e).style.height="35px";
//       document.getElementById(e).style.width="35px";
//       document.getElementById(e).innerText="E";
//       myState.endPoint=false
//       document.getElementById('end').disabled = true;
//       document.getElementById('end').style.backgroundColor = '#CCCCCC';
//       document.getElementById('end').style.cursor='not-allowed';
//     }
    
//     if(myState.wallPoint){
//       console.log("GRID BUTTON CLICKED" + e);
//       console.log("IS WALL PROPERTY : " + block.isWall);
//       console.log("ROW : " + block.r);
//       if(block.isStart===false && block.isEnd===false){
//         block.isWall = true;
//         document.getElementById(e).style.backgroundColor="gray";
//         document.getElementById(e).style.borderRadius="20px";
//         document.getElementById(e).style.height="35px";
//         document.getElementById(e).style.width="35px";
//         document.getElementById(e).innerText=`${count}`;
//         count++;
//       }
//     }
    
//     if(myState.reset){
//       console.log("GRID BUTTON CLICKED" + e);
//       block.reset = true;
//       console.log("IS END PROPERTY : " + block.isEnd);
//       console.log("ROW : " + block.r);
//       generateMap();
//     }

//   }

//   return (
//     <div className="visuals">
//       <div className='map-container'>
//           {generateMap()}        
//       </div>
//     </div>
//   )
// };

// export default Grid;
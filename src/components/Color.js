// import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// const Color = () => {
//     const myState = useSelector((state) => state.updateProps);
//     const dispatch = useDispatch();
//     const grid = [...myState.map];
//     const hash = (i,j) => {
//         return 2001*(i+1000)+(j+1000);
//     }
//     const printClick = () => {
//         console.log("CLICK KIYA PRINT HUA??");
//     }

//     {grid.map((row,index) => {
//         {row.map(block => {
//             let has = hash(block.r,block.c);
//             // console.log(block.r);
//             // document.getElementById(has).style.backgroundColor = "lightblue";
//             if(block.isStart === true && myState.play===true){
//                 console.log("PROGRESS.........")
//                 console.log("BLOCK POSITION : " + block.r + " " + block.c);
//                 // let b = {r: block.r+1,
//                 //     c: block.c,
//                 //     isStart : false,
//                 //     isEnd : false,
//                 //     isWall : false,
//                 //     isWeight : false};
//                 // console.log("BLOCK POSITION : " + b.r + " " + b.c);
//                 let queue=[block];
//                 let n = 1;
//                 // while(queue.length > 0){
//                     // let box = queue.pop();
//                     while(queue.length>0){
//                         let box = queue.pop();
//                         setDelay(box);
//                         console.log(queue.length);
//                         n++;

//                         // setTimeout(() => {
//                             if(box.r<19 && box.r>0 && box.c<39 && box.c>0){
//                                 // document.getElementById(2001*(box.r+1000+1)+(box.c+1000)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(2001*(box.r+1000)+(box.c+1000+1)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(2001*(box.r+1000-1)+(box.c+1000)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(2001*(box.r+1000)+(box.c+1000-1)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(2001*(box.r+1000+1)+(box.c+1000+1)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(2001*(box.r+1000-1)+(box.c+1000+1)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(2001*(box.r+1000+1)+(box.c+1000-1)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(2001*(box.r+1000-1)+(box.c+1000-1)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(has+1).style.backgroundColor="black"
//                                 queue.push({r: box.r,c: box.c+1})
//                                 // queue.push({r: box.r+1,c: box.c})
//                                 // queue.push({r: box.r-1,c: box.c})
//                                 // queue.push({r: box.r,c: box.c-1})
//                             }
//                             // else{
//                                 //     continue;
//                                 // }
//                                 // n--;
//                                 // for(let i=1; i<5; i++ ){
//                                     //     let hasofi = hash(block.r+i,block.c+i);
//                                     //     document.getElementById(2001*(block.r+1000+i)+(block.c+1000)).style.backgroundColor = "lightblue";
//                                     //     document.getElementById(2001*(block.r+1000)+(block.c+1000+i)).style.backgroundColor = "lightblue";
//                                     //     document.getElementById(2001*(block.r+1000-i)+(block.c+1000)).style.backgroundColor = "lightblue";
//                                     //     document.getElementById(2001*(block.r+1000)+(block.c+1000-i)).style.backgroundColor = "lightblue";
//                                     //     document.getElementById(2001*(block.r+1000+i)+(block.c+1000+i)).style.backgroundColor = "lightblue";
//                                 //     document.getElementById(2001*(block.r+1000-i)+(block.c+1000+i)).style.backgroundColor = "lightblue";
//                                 //     document.getElementById(2001*(block.r+1000+i)+(block.c+1000-i)).style.backgroundColor = "lightblue";
//                                 //     document.getElementById(2001*(block.r+1000-i)+(block.c+1000-i)).style.backgroundColor = "lightblue";
//                                 // }
//                             // },1000);
//                         }

//                         function setDelay(box){
//                             setTimeout(() => {
//                                 document.getElementById(2001*(box.r+1000+1)+(box.c+1000)).style.backgroundColor = "lightblue";
//                                 document.getElementById(2001*(box.r+1000)+(box.c+1000+1)).style.backgroundColor = "lightblue";
//                                 document.getElementById(2001*(box.r+1000-1)+(box.c+1000)).style.backgroundColor = "lightblue";
//                                 document.getElementById(2001*(box.r+1000)+(box.c+1000-1)).style.backgroundColor = "lightblue";
//                                 document.getElementById(2001*(box.r+1000+1)+(box.c+1000+1)).style.backgroundColor = "lightblue";
//                                 document.getElementById(2001*(box.r+1000-1)+(box.c+1000+1)).style.backgroundColor = "lightblue";
//                                 document.getElementById(2001*(box.r+1000+1)+(box.c+1000-1)).style.backgroundColor = "lightblue";
//                                 document.getElementById(2001*(box.r+1000-1)+(box.c+1000-1)).style.backgroundColor = "lightblue";
//                             }, 1000*n)
//                         }

//                    }
//             })
//         }
//     })}

//     return (
//         <h1>FROM COLOR q</h1>
//     )
// }
// export default Color





















// import React from "react";
// import { useSelector, useDispatch } from 'react-redux';
// const Color = () => {
//     const myState = useSelector((state) => state.updateProps);
//     const dispatch = useDispatch();
//     const grid = [...myState.map];
//     const hash = (i,j) => {
//         return 2001*(i+1000)+(j+1000);
//     }
//     const printClick = () => {
//         console.log("CLICK KIYA PRINT HUA??");
//     }

//     {grid.map((row,index) => {
//         {row.map(block => {
//             let has = hash(block.r,block.c);
//             // console.log(block.r);
//             // document.getElementById(has).style.backgroundColor = "lightblue";
//             if(block.isStart === true && myState.play===true){
//                 console.log("PROGRESS.........")
//                 console.log("BLOCK POSITION : " + block.r + " " + block.c);
//                 // let b = {r: block.r+1,
//                 //     c: block.c,
//                 //     isStart : false,
//                 //     isEnd : false,
//                 //     isWall : false,
//                 //     isWeight : false};
//                 // console.log("BLOCK POSITION : " + b.r + " " + b.c);
//                 let queue=[block];
//                 let n = 1;
//                 // while(queue.length > 0){
//                     // let box = queue.pop();
//                     // while(queue.length>0){
//                         let box = queue.pop();
//                         console.log(queue.length);
//                         n++;
//                         // setTimeout(() => {
//                             if(box.r<19 && box.r>0 && box.c<39 && box.c>0){
//                                 // document.getElementById(2001*(box.r+1000+1)+(box.c+1000)).style['transitionDelay']=`${n * 1000}ms`;
//                                 // document.getElementById(2001*(box.r+1000+1)+(box.c+1000)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(2001*(box.r+1000)+(box.c+1000+1)).style['transitionDelay']=`${n * 1100}ms`;
//                                 // document.getElementById(2001*(box.r+1000)+(box.c+1000+1)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(2001*(box.r+1000-1)+(box.c+1000)).style['transitionDelay']=`${n * 1200}ms`;
//                                 // document.getElementById(2001*(box.r+1000-1)+(box.c+1000)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(2001*(box.r+1000)+(box.c+1000-1)).style['transitionDelay']=`${n * 1300}ms`;
//                                 // document.getElementById(2001*(box.r+1000)+(box.c+1000-1)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(2001*(box.r+1000+1)+(box.c+1000+1)).style['transitionDelay']=`${n * 1400}ms`;
//                                 // document.getElementById(2001*(box.r+1000+1)+(box.c+1000+1)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(2001*(box.r+1000-1)+(box.c+1000+1)).style['transitionDelay']=`${n * 1500}ms`;
//                                 // document.getElementById(2001*(box.r+1000-1)+(box.c+1000+1)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(2001*(box.r+1000+1)+(box.c+1000-1)).style['transitionDelay']=`${n * 1600}ms`;
//                                 // document.getElementById(2001*(box.r+1000+1)+(box.c+1000-1)).style.backgroundColor = "lightblue";
//                                 // document.getElementById(2001*(box.r+1000-1)+(box.c+1000-1)).style['transitionDelay']=`${n * 1700}ms`;
//                                 // document.getElementById(2001*(box.r+1000-1)+(box.c+1000-1)).style.backgroundColor = "lightblue";

//                                 document.getElementById(2001*(box.r+1000+1)+(box.c+1000)).style.backgroundColor = "lightblue";
//                                 document.getElementById(2001*(box.r+1000)+(box.c+1000+1)).style.backgroundColor = "lightblue";
//                                 document.getElementById(2001*(box.r+1000-1)+(box.c+1000)).style.backgroundColor = "lightblue";
//                                 document.getElementById(2001*(box.r+1000)+(box.c+1000-1)).style.backgroundColor = "lightblue";
//                                 document.getElementById(2001*(box.r+1000+1)+(box.c+1000+1)).style.backgroundColor = "lightblue";
//                                 document.getElementById(2001*(box.r+1000-1)+(box.c+1000+1)).style.backgroundColor = "lightblue";
//                                 document.getElementById(2001*(box.r+1000+1)+(box.c+1000-1)).style.backgroundColor = "lightblue";
//                                 document.getElementById(2001*(box.r+1000-1)+(box.c+1000-1)).style.backgroundColor = "lightblue";

//                                 // document.getElementById(has+1).style.backgroundColor="black"
//                                 queue.unshift({r: box.r,c: box.c+1})
//                                 // queue.push({r: box.r+1,c: box.c})
//                                 // queue.push({r: box.r-1,c: box.c})
//                                 // queue.push({r: box.r,c: box.c-1})
//                             // }
//                             // else{
//                                 //     continue;
//                                 // }
//                                 // n--;
//                                 // for(let i=1; i<5; i++ ){
//                                     //     let hasofi = hash(block.r+i,block.c+i);
//                                     //     document.getElementById(2001*(block.r+1000+i)+(block.c+1000)).style.backgroundColor = "lightblue";
//                                     //     document.getElementById(2001*(block.r+1000)+(block.c+1000+i)).style.backgroundColor = "lightblue";
//                                     //     document.getElementById(2001*(block.r+1000-i)+(block.c+1000)).style.backgroundColor = "lightblue";
//                                     //     document.getElementById(2001*(block.r+1000)+(block.c+1000-i)).style.backgroundColor = "lightblue";
//                                     //     document.getElementById(2001*(block.r+1000+i)+(block.c+1000+i)).style.backgroundColor = "lightblue";
//                                 //     document.getElementById(2001*(block.r+1000-i)+(block.c+1000+i)).style.backgroundColor = "lightblue";
//                                 //     document.getElementById(2001*(block.r+1000+i)+(block.c+1000-i)).style.backgroundColor = "lightblue";
//                                 //     document.getElementById(2001*(block.r+1000-i)+(block.c+1000-i)).style.backgroundColor = "lightblue";
//                                 // }
//                             // },1000*n);
//                             }
//                         }
//                     })
//                 }
//     })}

//     return (
//         <h1>FROM COLOR q</h1>
//     )
// }
// export default Color























//---------------------------------- MAIN CODE ----------------------------------------------


import { elementAcceptingRef } from "@mui/utils";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
const Color = () => {
  const myState = useSelector((state) => state.updateProps);
  const dispatch = useDispatch();
  const grid = [...myState.map];
  const hash = (i, j) => {
    return 2001 * (i + 1000) + (j + 1000);
  };
  const printClick = () => {
    console.log("CLICK KIYA PRINT HUA??");
  };

  let hashmap = {};
  let prevmap = {};
  let start, end;
  for (let i = 0; i < 14; i++) {
    for (let j = 0; j < 40; j++) {
      hashmap[hash(i, j)] = false;
      prevmap[hash(i, j)] = null;
    }
  }
//   let queue = [];
grid.map((row, index) => {
    {
        row.map((block) => {
            let has = hash(block.r, block.c);
            // console.log(block.r);
            // document.getElementById(has).style.backgroundColor = "lightblue";

            // if (block.isStart === true && myState.play) {
            //     //   document.getElementById(hash(1,1)).style.backgroundColor='red';
            //     console.log("PROGRESS.........");
            //     console.log("BLOCK POSITION : " + block.r + " " + block.c);
            //     //   queue.push(block);
            //       BFS(block);
            //     }
            // });



            
            if(block.isStart === true) {
              start = block;
            }

            if(block.isEnd === true) {
              end = block;
            }

          });
        }
        
        let result;
        if(start!=null && end!=null && myState.play && myState.graphAlgorithm==='bfs'){
          result = BFS(start, end);
        }
        else if(start!=null && end!=null && myState.play && myState.graphAlgorithm==='dfs'){
          result = DFS(start, end);
        }

          let path=[]
          if (result != null){
            let current = result[0]
            while (prevmap[hash(current.r,current.c)] != null){
              path.push(current)
              current=prevmap[hash(current.r,current.c)]
            }

            setTimeout(()=>{path.reverse().forEach((elem,index)=>{
              // refarray[elem.x+elem .y*50].current.style['transition-delay']=`${( index) * 15}ms`
              // refarray[elem.x+elem.y*50].current.classList.add('path')
              document.getElementById(hash(elem.r, elem.c)).style['transition-delay']=`${( index) * 85}ms`
              document.getElementById(hash(elem.r, elem.c)).style.backgroundColor = "#d00000";
            })},result[1]*16)
        }
        
    });

    // let count = 0;
    // if(queue.length > 0){

    //     let start = queue.pop();
    //     hashmap[hash(start.r, start.c)]=true;
    // }

    function BFS(start, end){
        // console.log("IS WALL PROPERTY : SACH KA SAMNA : " + document.getElementById(hash(1,1)).style.backgroundColor'red');
        let queue=[start]
        let count=0
        hashmap[hash(start.r, start.c)]=true
        while (queue.length > 0){
            count++;
            let c = queue.pop();
            // document.getElementById(2001*(c.r+1000)+(c.c+1000)).style['transitionDelay']=`${count * 15}ms`
            document.getElementById(hash(c.r, c.c)).style['transitionDelay']=`${count * 15}ms`
            // document.getElementById(2001*(c.r+1000)+(c.c+1000)).style.backgroundColor = "#9999ff";
            if(!c.isWall){
                document.getElementById(hash(c.r, c.c)).style.backgroundColor = "#9999ff";
            }
            // MANDATORY TO BLOCK AFTER WALL
            else{
              continue;
            }

            if(c.r == end.r && c.c == end.c) return [c,count]
            
            
            
            // if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)] && !document.getElementById(hash(c.r+1, c.c)).isWall){
            if(c.r+1 <= 13 && !hashmap[hash(c.r+1, c.c)]){
            // if(c.r+1 <= 19 && !hashmap[hash(c.r+1, c.c)] && !grid[c.r+1][c.c].isWall){
              // if(c.r+1 <= 19 && !hashmap[hash(c.r+1, c.c)] && (c.backgroundColor="gray")){
                // console.log("IS WALL PROPERTY : SACH KA SAMNA : " + document.isWall);

                // console.log(grid[c.r+1][c.c].isWall)
                // queue.unshift({r:c.r +1,c:c.c})
                queue.unshift(grid[c.r+1][c.c])
                prevmap[hash(c.r+1, c.c)]={...c}
                hashmap[hash(c.r+1, c.c)]=true
              }

              // if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)] && !document.getElementById(hash(c.r-1, c.c)).isWall){
              //   if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)] && !c.isWall){
              // if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)] && !grid[c.r-1][c.c].iswall){
              if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)]){
              //   if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)] && (c.backgroundColor="gray")){

                // queue.unshift({r:c.r -1,c:c.c})
                queue.unshift(grid[c.r-1][c.c])
                prevmap[hash(c.r-1, c.c)]={...c}
                hashmap[hash(c.r-1, c.c)]=true
              }

              // if(c.c+1 <= 39 && !hashmap[hash(c.r, c.c+1)] && !document.getElementById(hash(c.r, c.c+1)).isWall){
              // if(c.c+1 <= 39 && !hashmap[hash(c.r, c.c+1)] && !c.isWall ){
              // if(c.c+1 <= 39 && !hashmap[hash(c.r, c.c+1)] && !grid[c.r][c.c+1].iswall ){
              if(c.c+1 <= 39 && !hashmap[hash(c.r, c.c+1)]){
              // if(c.c+1 <= 39 && !hashmap[hash(c.r, c.c+1)] && (c.backgroundColor="gray") ){
                
                // queue.unshift({r:c.r ,c:c.c+1})
                queue.unshift(grid[c.r][c.c+1])
                prevmap[hash(c.r, c.c+1)]={...c}
                hashmap[hash(c.r, c.c+1)]=true
              }

              // if(c.c-1 >=0 && !hashmap[hash(c.r, c.c-1)] && !document.getElementById(hash(c.r, c.c-1)).isWall){
              //   if(c.c-1 >=0 && !hashmap[hash(c.r, c.c-1)] && !c.isWall){
              // if(c.c-1 >=0 && !hashmap[hash(c.r, c.c-1)] && !grid[c.r][c.c-1].iswall){
              if(c.c-1 >=0 && !hashmap[hash(c.r, c.c-1)]){
              //   if(c.c-1 >=0 && !hashmap[hash(c.r, c.c-1)] && (c.backgroundColor="gray")){

                // queue.unshift({r:c.r ,c:c.c-1})
                queue.unshift(grid[c.r][c.c-1])
                prevmap[hash(c.r, c.c-1)]={...c}
                hashmap[hash(c.r, c.c-1)]=true
              }
        }
        return null;
    }




    function DFS(start, end){
      let queue=[start]
        let count=0
        hashmap[hash(start.r, start.c)]=true
        while (queue.length > 0){
            count++;
            let c = queue[0];
            queue.shift();
            document.getElementById(hash(c.r, c.c)).style['transitionDelay']=`${count * 15}ms`
            if(!c.isWall){
                document.getElementById(hash(c.r, c.c)).style.backgroundColor = "#9999ff";
            }
            else{
              continue;
            }

            if(c.r == end.r && c.c == end.c) return [c,count]
            
              if(c.c+1 <= 39 && !hashmap[hash(c.r, c.c+1)]){
                queue.unshift(grid[c.r][c.c+1])
                prevmap[hash(c.r, c.c+1)]={...c}
                hashmap[hash(c.r, c.c+1)]=true
              }

              
              if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)]){
                queue.unshift(grid[c.r-1][c.c])
                prevmap[hash(c.r-1, c.c)]={...c}
                hashmap[hash(c.r-1, c.c)]=true
              }


              if(c.c-1 >=0 && !hashmap[hash(c.r, c.c-1)]){
                queue.unshift(grid[c.r][c.c-1])
                prevmap[hash(c.r, c.c-1)]={...c}
                hashmap[hash(c.r, c.c-1)]=true
              }

              if(c.r+1 <= 13 && !hashmap[hash(c.r+1, c.c)]){
                  queue.unshift(grid[c.r+1][c.c])
                  prevmap[hash(c.r+1, c.c)]={...c}
                  hashmap[hash(c.r+1, c.c)]=true
                }
            }
        return null;
    }
    
    

  return <h1>FROM COLOR q</h1>;
};
export default Color;



















// import { elementAcceptingRef } from "@mui/utils";
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// const Color = () => {
//   const myState = useSelector((state) => state.updateProps);
//   const dispatch = useDispatch();
//   const grid = [...myState.map];
//   const hash = (i, j) => {
//     return 2001 * (i + 1000) + (j + 1000);
//   };
//   const printClick = () => {
//     console.log("CLICK KIYA PRINT HUA??");
//   };

//   let hashmap = {};
//   let prevmap = {};
//   let start, end;
//   for (let i = 0; i < 14; i++) {
//     for (let j = 0; j < 40; j++) {
//       hashmap[hash(i, j)] = false;
//       prevmap[hash(i, j)] = null;
//     }
//   }
// //   let queue = [];
// grid.map((row, index) => {
//     {
//         row.map((block) => {
//             let has = hash(block.r, block.c);
//             // console.log(block.r);
//             // document.getElementById(has).style.backgroundColor = "lightblue";

//             // if (block.isStart === true && myState.play) {
//             //     //   document.getElementById(hash(1,1)).style.backgroundColor='red';
//             //     console.log("PROGRESS.........");
//             //     console.log("BLOCK POSITION : " + block.r + " " + block.c);
//             //     //   queue.push(block);
//             //       BFS(block);
//             //     }
//             // });



            
//             if(block.isStart === true) {
//               start = block;
//             }

//             if(block.isEnd === true) {
//               end = block;
//             }

//           });
//         }
        
//         let result;
//         if(start!=null && end!=null && myState.play){
//           result = BFS(start, end);
//         }

//           let path=[]
//           if (result != null){
//             let current = result[0]
//             while (prevmap[hash(current.r,current.c)] != null){
//               path.push(current)
//               current=prevmap[hash(current.r,current.c)]
//             }

//             setTimeout(()=>{path.reverse().forEach((elem,index)=>{
//               // refarray[elem.x+elem .y*50].current.style['transition-delay']=`${( index) * 15}ms`
//               // refarray[elem.x+elem.y*50].current.classList.add('path')
//               document.getElementById(hash(elem.r, elem.c)).style['transition-delay']=`${( index) * 85}ms`
//               document.getElementById(hash(elem.r, elem.c)).style.backgroundColor = "#d00000";
//             })},result[1]*16)
//         }
        
//     });

//     // let count = 0;
//     // if(queue.length > 0){

//     //     let start = queue.pop();
//     //     hashmap[hash(start.r, start.c)]=true;
//     // }

//     function BFS(start, end){
//         // console.log("IS WALL PROPERTY : SACH KA SAMNA : " + document.getElementById(hash(1,1)).style.backgroundColor'red');
//         let queue=[start]
//         let count=0
//         hashmap[hash(start.r, start.c)]=true
//         while (queue.length > 0){
//             count++;
//             let c = queue.pop();
//             // document.getElementById(2001*(c.r+1000)+(c.c+1000)).style['transitionDelay']=`${count * 15}ms`
//             document.getElementById(hash(c.r, c.c)).style['transitionDelay']=`${count * 15}ms`
//             // document.getElementById(2001*(c.r+1000)+(c.c+1000)).style.backgroundColor = "#9999ff";
//             if(!c.isWall){
//                 document.getElementById(hash(c.r, c.c)).style.backgroundColor = "#9999ff";
//             }
//             // MANDATORY TO BLOCK AFTER WALL
//             else{
//               continue;
//             }

//             if(c.r == end.r && c.c == end.c) return [c,count]
            
            
            
//             // if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)] && !document.getElementById(hash(c.r+1, c.c)).isWall){
//             if(c.r+1 <= 13 && !hashmap[hash(c.r+1, c.c)]){
//             // if(c.r+1 <= 19 && !hashmap[hash(c.r+1, c.c)] && !grid[c.r+1][c.c].isWall){
//               // if(c.r+1 <= 19 && !hashmap[hash(c.r+1, c.c)] && (c.backgroundColor="gray")){
//                 // console.log("IS WALL PROPERTY : SACH KA SAMNA : " + document.isWall);

//                 // console.log(grid[c.r+1][c.c].isWall)
//                 // queue.unshift({r:c.r +1,c:c.c})
//                 queue.unshift(grid[c.r+1][c.c])
//                 prevmap[hash(c.r+1, c.c)]={...c}
//                 hashmap[hash(c.r+1, c.c)]=true
//               }

//               // if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)] && !document.getElementById(hash(c.r-1, c.c)).isWall){
//               //   if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)] && !c.isWall){
//               // if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)] && !grid[c.r-1][c.c].iswall){
//               if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)]){
//               //   if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)] && (c.backgroundColor="gray")){

//                 // queue.unshift({r:c.r -1,c:c.c})
//                 queue.unshift(grid[c.r-1][c.c])
//                 prevmap[hash(c.r-1, c.c)]={...c}
//                 hashmap[hash(c.r-1, c.c)]=true
//               }

//               // if(c.c+1 <= 39 && !hashmap[hash(c.r, c.c+1)] && !document.getElementById(hash(c.r, c.c+1)).isWall){
//               // if(c.c+1 <= 39 && !hashmap[hash(c.r, c.c+1)] && !c.isWall ){
//               // if(c.c+1 <= 39 && !hashmap[hash(c.r, c.c+1)] && !grid[c.r][c.c+1].iswall ){
//               if(c.c+1 <= 39 && !hashmap[hash(c.r, c.c+1)]){
//               // if(c.c+1 <= 39 && !hashmap[hash(c.r, c.c+1)] && (c.backgroundColor="gray") ){
                
//                 // queue.unshift({r:c.r ,c:c.c+1})
//                 queue.unshift(grid[c.r][c.c+1])
//                 prevmap[hash(c.r, c.c+1)]={...c}
//                 hashmap[hash(c.r, c.c+1)]=true
//               }

//               // if(c.c-1 >=0 && !hashmap[hash(c.r, c.c-1)] && !document.getElementById(hash(c.r, c.c-1)).isWall){
//               //   if(c.c-1 >=0 && !hashmap[hash(c.r, c.c-1)] && !c.isWall){
//               // if(c.c-1 >=0 && !hashmap[hash(c.r, c.c-1)] && !grid[c.r][c.c-1].iswall){
//               if(c.c-1 >=0 && !hashmap[hash(c.r, c.c-1)]){
//               //   if(c.c-1 >=0 && !hashmap[hash(c.r, c.c-1)] && (c.backgroundColor="gray")){

//                 // queue.unshift({r:c.r ,c:c.c-1})
//                 queue.unshift(grid[c.r][c.c-1])
//                 prevmap[hash(c.r, c.c-1)]={...c}
//                 hashmap[hash(c.r, c.c-1)]=true
//               }
//         }
//         return null;
//     }
    

//   return <h1>FROM COLOR q</h1>;
// };
// export default Color;




































// import { elementAcceptingRef } from "@mui/utils";
// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// const Color = () => {
//   const myState = useSelector((state) => state.updateProps);
//   const dispatch = useDispatch();
//   const grid = [...myState.map];
//   const hash = (i, j) => {
//     return 2001 * (i + 1000) + (j + 1000);
//   };
//   const printClick = () => {
//     console.log("CLICK KIYA PRINT HUA??");
//   };

//   let hashmap = {};
//   let prevmap = {};
//   let start, end;
//   for (let i = 0; i < 14; i++) {
//     for (let j = 0; j < 40; j++) {
//       hashmap[hash(i, j)] = false;
//       prevmap[hash(i, j)] = null;
//     }
//   }

// grid.map((row, index) => {
//     {
//         row.map((block) => {
//             if(block.isStart === true) {
//               start = block;
//             }

//             if(block.isEnd === true) {
//               end = block;
//             }

//           });
//         }
        
//         let result;
//         if(start!=null && end!=null && myState.play){
//           result = BFS(start, end);
//         }

//           let path=[]
//           if (result != null){
//             let current = result[0]
//             while (prevmap[hash(current.r,current.c)] != null){
//               path.push(current)
//               current=prevmap[hash(current.r,current.c)]
//             }

//             setTimeout(()=>{path.reverse().forEach((elem,index)=>{
//               document.getElementById(hash(elem.r, elem.c)).style['transition-delay']=`${( index) * 85}ms`
//               document.getElementById(hash(elem.r, elem.c)).style.backgroundColor = "#d00000";
//             })},result[1]*16)
//         }
        
//     });

//     function BFS(start, end){
//         let queue=[start]
//         let count=0
//         hashmap[hash(start.r, start.c)]=true
//         while (queue.length > 0){
//             count++;
//             let c = queue.pop();
//             document.getElementById(hash(c.r, c.c)).style['transitionDelay']=`${count * 15}ms`
//             if(c.isWall){
//                 document.getElementById(hash(c.r, c.c)).style.backgroundColor = "#9999ff";
//             }
//             if(c.r == end.r && c.c == end.c) return [c,count]



//             if(c.r+1 <= 13 && !hashmap[hash(c.r+1, c.c)]){
//                 queue.unshift(grid[c.r+1][c.c])
//                 prevmap[hash(c.r+1, c.c)]={...c}
//                 hashmap[hash(c.r+1, c.c)]=true
//               }

//               if(c.r-1 >=0 && !hashmap[hash(c.r-1, c.c)]){
//                 queue.unshift(grid[c.r-1][c.c])
//                 prevmap[hash(c.r-1, c.c)]={...c}
//                 hashmap[hash(c.r-1, c.c)]=true
//               }

//               if(c.c+1 <= 39 && !hashmap[hash(c.r, c.c+1)]){
//                 queue.unshift(grid[c.r][c.c+1])
//                 prevmap[hash(c.r, c.c+1)]={...c}
//                 hashmap[hash(c.r, c.c+1)]=true
//               }

//               if(c.c-1 >=0 && !hashmap[hash(c.r, c.c-1)]){
//                 queue.unshift(grid[c.r][c.c-1])
//                 prevmap[hash(c.r, c.c-1)]={...c}
//                 hashmap[hash(c.r, c.c-1)]=true
//               }
//         }
//         return null;
//     }
    

//   return <h1>FROM COLOR q</h1>;
// };
// export default Color;



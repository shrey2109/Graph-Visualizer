const initialState = {
    graphAlgorithm:"",
    startPoint : false,
    endPoint: false,
    wallPoint:false,
    weightPoint:false,
    reset:false,
    playSpeed: 300,
    play: false,
    map: [],
    path: [],
  };
  
  const updateProps = (state = initialState, action) => {
    switch (action.type) {

      case "UPDATE_MAP":{
         return {...state, map: action.map};
     }

        case "UPDATE_ALGORITHM": {
            return { ...state, graphAlgorithm: action.graphAlgorithm };
          }
      
        case 'START': {
            return {...state,startPoint:action.startPoint};
         }

         case 'END': {
            return {...state,endPoint:action.endPoint};
         }

         case 'WALL': {
            return {...state,wallPoint:action.wallPoint};
         }

         case 'WEIGHT': {
            return {...state,weightPoint:action.weightPoint};
         }

         case 'RESET': {
            return {...state,reset:action.reset};
         }

  
      case 'PLAY': {
        return {...state,play:action.play};
     }
  
      default:
        return state;
    }
  };
  export default updateProps;
  
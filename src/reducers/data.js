// data reducer
export default function data(state = {}, action) {
  switch (action.type) {

    //Saves the retirieved data in state
    case 'SAVE_DATA':
      return {
        "result" : []
      };

      
    // initial state
    default:
    console.log("default reducer triggerd");
    return state;
  }
}
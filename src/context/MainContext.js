import {createContext, useReducer} from 'react';

const initialState = {
  open: false,
  fileName: null,
};

const actionCreators = {
  open(fileName) {
    return {type: 'open', payload: fileName};
  },
  close() {
    return {type: 'close'};
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'open':
      return {...state, open: true, fileName: action.payload};
    case 'close':
      return {...state, open: false, fileName: null};
    default:
      return state;
  }
}

const MainContext = createContext({});

function Provider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const actions = {
    openModal(fileName) {
      dispatch(actionCreators.open(fileName));
    },
    closeModal() {
      dispatch(actionCreators.close());
    },
  };

  return (
    <MainContext.Provider value={{state, actions}}>
      {props.children}
    </MainContext.Provider>
  );
}

export default {Provider, Ctx: MainContext};

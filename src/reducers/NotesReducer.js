const initialState = {
  list: [{ title: 'Primeira Nota', body: 'Testando 1,2,3...' }],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NODE':
      break;

    default:
      return state;
  }
};
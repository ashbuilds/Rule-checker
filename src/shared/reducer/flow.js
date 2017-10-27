export const CREATE_NEW_FLOW = 'flow/CREATE_NEW_FLOW';

const initialState = {};

export default (state = initialState, action) => {
  const flow = state.data || [];
  switch (action.type) {
  case CREATE_NEW_FLOW: {
    const currentFlow = flow.find(item => item.id === action.data.id);
    if (!currentFlow && action.data.name) {
      flow.push({
        id: action.data.id,
        name: action.data.name,
      });
    } else if (action.data.name) {
      currentFlow.name = action.data.name;
    }

    return {
      ...state,
      data: flow,
    };
  }
  default:
    return state;
  }
};

export const createNewFlow = data => (dispatch) => {
  dispatch({
    type: CREATE_NEW_FLOW,
    data,
  });
};

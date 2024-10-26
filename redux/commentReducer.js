import { ADD_COMMENT } from './commentActions';

const initialState = {
  comments: [
    { id: 1, name: 'Hamza', avatar: 'https://mighty.tools/mockmind-api/content/human/25.jpg', text: 'harum quidem rerum facilis est...', time: '1 day ago' },
    { id: 2, name: 'Mohammed', avatar: 'https://mighty.tools/mockmind-api/content/human/59.jpg', text: 'Sure, Thanks', time: '12 hrs ago' }
  ],
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [action.payload, ...state.comments], 
      };
    default:
      return state;
  }
};

export default commentReducer;
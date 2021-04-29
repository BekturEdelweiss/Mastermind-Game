import axios from "axios";

//Initial State
const initialState = {
  guessInputs: ["x", "x", "x", "x"],
  sideScores: [],
  secretCode: [],
};

//Action Types
const GET_NUMBERS_SUCCESS = "GET_NUMBERS_SUCCESS";

//Action Creators
const getNumbers = (numbers) => ({ type: GET_NUMBERS_SUCCESS, numbers });

// Thunk Creators
export const fetchNumbersfromApi = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new"
    );

    // console.log(res.data);

    dispatch(getNumbers(res.data || initialState));
  } catch (err) {
    console.log(err);
  }
};

//Reducer
export default function numbersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NUMBERS_SUCCESS:
      return {
        ...state,
        secretCode: [...state.secretCode, action.numbers],
      };
    default:
      return state;
  }
}

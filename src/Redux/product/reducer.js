const initState = {
  loading: "false",
  err: false,
  phones: [],
  
  
  
};

const productReducer = (state = initState, action) => {
  switch (action.type) {
    case "DATA_REQUEST":
      return { ...state, loading: true };
    case "DATA_SUCCESS":
      return { ...state, loading: false, err: false, phones: action.payload };
    case "DATA_FAIL":
      return { ...state, loading: false, err: true };
    case "CURRENT_DATA_REQUEST":
      return { ...state, loading: true };
    case "CURRENT_DATA_SUCCESS":
      return { ...state, loading: false, err: false, currentPhones: action.payload };
    case "CURRENT_DATA_FAIL":
      return { ...state, loading: false, err: true };
    default:
      return state;
  }
};

export { productReducer };

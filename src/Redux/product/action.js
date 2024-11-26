import { DATA_REQUEST, DATA_SUCCESS,DATA_FAIL ,CURRENT_DATA_REQUEST, CURRENT_DATA_SUCCESS,CURRENT_DATA_FAIL} from "./actionType";

export const dataRequest = () =>({
	type:DATA_REQUEST,
})

export const dataSuccess =(phones) =>({
	type:DATA_SUCCESS,
	payload:phones,
})
export const dataFail =(error)=>({
    type:DATA_FAIL,
    payload:error,
})


 const getData = () =>{
	return async (dispatch) =>{
		dispatch(dataRequest())
		try{
			const response = await fetch("http://localhost:8000/phones")
			const data = await response.json();
			dispatch(dataSuccess(data))
		}
		catch(err){
			// console.log(object)
			dispatch(dataFail(err.message))
		}
	}
}

 export const currentDataRequest =() =>({
	type:CURRENT_DATA_REQUEST,
})
 export const  currentDataSuccess=(phone)=>({
	type:CURRENT_DATA_SUCCESS,
	payload:phone
 })
 export const currentDataFail =(error)=>({
	type:CURRENT_DATA_FAIL,
	payload:error
 })

//  const getCurrentData = (id) =>(dispatch) =>{
// 	dispatch(currentDataRequest());
// 	fetch(`http://localhost:8000/phones/${id}`)
// 	.then((res)=> res.json())
// 	.then((res)=> dispatch(currentDataSuccess(res)))
// 	.catch(()=>dispatch(currentDataFail()))

//  }

const getCurrentData = (id) => async (dispatch) => {
	dispatch(currentDataRequest());
	try {
	  const response = await fetch(`http://localhost:8000/phones/${id}`);
	  if (!response.ok) throw new Error("Failed to fetch phone details");
	  const data = await response.json();
	  dispatch(currentDataSuccess(data));
	} catch (err) {
	  dispatch(currentDataFail(err.message));
	}
  };
  

  

export {getData, getCurrentData}
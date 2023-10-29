import { GET_FOOD } from "../modules/foodModule";
import { Dispatch, AnyAction } from "redux"; // AnyAction를 가져옴
import { Store } from "redux";

export const callFoodAllListAPI = (): (dispatch: Dispatch<AnyAction>, getState: () => Store<any, AnyAction>) => Promise<void> => {
    
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/menu/food`;

    return async (dispatch, getState) => {
      
        const response = await fetch(requestURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
        })
        .then(response => response.json());

        if (response.status === 200) {
           
            dispatch({ type: GET_FOOD, payload: response.data });
        } else {

            console.log("food list get response false")
        }
    };
};

// export const callFoodAllListAPI = (): (dispatch: Dispatch<AnyAction>, getState: () => Store<any, AnyAction>) => Promise<void> => {
//     return async (dispatch, getState) => {
//         try {
//             const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/menu/food`;
            
//             const response = await fetch(requestURL, {
//                 method: "GET",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "*/*",
//                 },
//             });
//             if (response.status === 200) {
//                 const data = await response.json();
//                 dispatch({ type: GET_FOOD, payload: data });
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     };
// };
import { GET_CART } from "../modules/cartModule";
import { Dispatch, AnyAction } from "redux";
import { Store } from "redux";

export const callCARTListAPI = ({tableCode}: { tableCode: String }): (dispatch: Dispatch<AnyAction>, getState: () => Store<any, AnyAction>) => Promise<void> => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/cartList/${tableCode}`;

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

            console.log("cart list get response true")
           
            dispatch({ type: GET_CART, payload: response.data });

        } else {

            console.log("cart list get response false")
        }
    };
};
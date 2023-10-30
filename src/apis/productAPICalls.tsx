import { GET_PRODUCT } from "../modules/productModule";
import { Dispatch, AnyAction } from "redux";
import { Store } from "redux";

export const callProductAllListAPI = ({categoryCode}: { categoryCode: String }): (dispatch: Dispatch<AnyAction>, getState: () => Store<any, AnyAction>) => Promise<void> => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/api/productList/${categoryCode}`;

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

            console.log("product list get response true")
           
            dispatch({ type: GET_PRODUCT, payload: response.data });

        } else {

            console.log("product list get response false")
        }
    };
};
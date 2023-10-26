import { GET_COCKTAIL } from "../modules/cocktailModule";
import { Dispatch, AnyAction } from "redux"; // AnyAction를 가져옴
import { Store } from "redux";

export const callCocktailAllListAPI = (): (dispatch: Dispatch<AnyAction>, getState: () => Store<any, AnyAction>) => Promise<void> => {
    return async (dispatch, getState) => {
        try {
            const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}:8888/menu/cocktail`;
            const response = await fetch(requestURL, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                },
            });
            if (response.status === 200) {
                const data = await response.json();
                dispatch({ type: GET_COCKTAIL, payload: data });
            }
        } catch (error) {
            console.error(error);
        }
    };
};

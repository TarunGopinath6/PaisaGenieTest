import { useState } from "react";

import API from "./../../API/internal/Goals"
import useIdentStore from "../storages/IdentStore";


export default function useGoals() {

    const [loading, setLoading] = useState(false);

    const apiObject = new API();
    const { phone } = useIdentStore();

    return {

        loading, 

        async getGoals() {
            setLoading(true);
            const response = await apiObject.getGoals(phone);
            setLoading(false);
            return response
        },


        async setGoals() {
            setLoading(true);
            const response = await apiObject.setGoals(phone);
            setLoading(false);
            return response
        },

    }
}

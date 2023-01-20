import { useState } from "react";

import API from "./../../API/internal/Loans"
import useIdentStore from "../../storages/IdentStore";


export default function useLoans() {

    const [loading, setLoading] = useState(false);

    const apiObject = new API();
    const { phone } = useIdentStore();

    return {

        loading, 

        async getLoans() {
            setLoading(true);
            const response = await apiObject.getLoans(phone);
            setLoading(false);
            return response
        },


        async setLoans(value1, value2, value3) {
            setLoading(true);
            const response = await apiObject.setLoans(phone, value1, value2, value3);
            setLoading(false);
            console.log(response)
            return response
        },

    }
}

import { useState } from "react";

import API from "../../API/internal/Insurance"
import useIdentStore from "../../storages/IdentStore";


export default function useInsurance() {

    const [loading, setLoading] = useState(false);

    const apiObject = new API();
    const { phone } = useIdentStore();

    return {

        loading, 

        async getInsurance() {
            setLoading(true);
            const response = await apiObject.getInsurance(phone);
            setLoading(false);
            return response
        },


        async setInsurance(value1, value2, value3) {
            setLoading(true);
            const response = await apiObject.setInsurance(phone, value1, value2, value3);
            setLoading(false);
            console.log(response)
            return response
        },

    }
}

import { useState } from "react";

import API from "../../API/internal/EMI"
import useIdentStore from "../../storages/IdentStore";


export default function useEMIs() {

    const [loading, setLoading] = useState(false);

    const apiObject = new API();
    const { phone } = useIdentStore();

    return {

        loading, 

        async getEMIs() {
            setLoading(true);
            const response = await apiObject.getEMIs(phone)
            setLoading(false);
            return response
        },


        async setEMIs(value1, value2, value3) {
            setLoading(true);
            const response = await apiObject.setEMIs(phone, value1, value2, value3);
            setLoading(false);
            console.log(response)
            return response
        },

    }
}

import { useState } from "react";

import API from "../../API/internal/Invest"
import useIdentStore from "../../storages/IdentStore";


export default function useInvests() {

    const [loading, setLoading] = useState(false);

    const apiObject = new API();
    const { phone } = useIdentStore();

    return {

        loading, 

        async getInvests() {
            setLoading(true);
            const response = await apiObject.getInvests(phone)
            setLoading(false);
            return response
        },


        async setInvests(value1, value2, value3, value4) {
            setLoading(true);
            const response = await apiObject.setInvests(phone, value1, value2, value3, value4);
            setLoading(false);
            console.log(response)
            return response
        },

    }
}

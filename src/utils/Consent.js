import { useState } from "react";

import API from "./../API/Consent"
import useAuthStore from "../storages/AuthStore";


export default function useConsent() {

    const [loading, setLoading] = useState(false);
    const [authStatus, setAuthStatus] = useState(false);

    const apiObject = new API();
    const { setTrackingID, setReferenceID, trackingID, referenceID } = useAuthStore();


    function makeID(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    return {

        loading, authStatus,

        async getConsent(phone) {
            setLoading(true);
            //console.log(API_KEY)
            const response = await apiObject.getConsent(process.env.REACT_APP_API_KEY,
                phone, "ONETIME", makeID(16), process.env.REACT_APP_HOST_URL + '/dash');
            setLoading(false);

            if (response['code'] === 200) {
                setAuthStatus(true);
                setReferenceID(response.data.referenceId);
                setTrackingID(response.data.trackingId);
            }

            return response
        },
    }
}

import { useState } from "react";

import API from "./../API/Consent"
import useAuthStore from "../storages/AuthStore";
import useDataStore from "../storages/DataStore";


export default function useConsent() {

    const [loading, setLoading] = useState(false);
    const [authStatus, setAuthStatus] = useState(false);
    const [dataStatus, setDataStatus] = useState(false);
    const [responseStatus, setResponseStatus] = useState(false);

    const apiObject = new API();
    const { setTrackingID, setReferenceID, trackingID, referenceID } = useAuthStore();
    const { setData } = useDataStore();


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

        loading, authStatus, dataStatus, responseStatus, 

        async getConsent(phone) {
            setLoading(true);
            //console.log(API_KEY)
            const response = await apiObject.getConsent("915d5866ebcdf53684fd37128a", 
            phone, "ONETIME", makeID(16), 'https://express-server.loca.lt');
            setLoading(false);

            if (response['code'] === 200) {
                setAuthStatus(true);
                setReferenceID(response.data.referenceId);
                setTrackingID(response.data.trackingId);
            }

            return response
        },

        async getData() {
            setLoading(true);
            //console.log(API_KEY)
            let response = await apiObject.getAnalytics("915d5866ebcdf53684fd37128a", 
            'KjH0qXuxQvC3dG0c', 'a0df2bc7-8f07-4ae2-af53-4ecb69751e27');
            
            if (response['code'] === 200) {
                setData(response['data']);
                setResponseStatus(true);
            }
            // else{
            //     response = await apiObject.getDataFetch("915d5866ebcdf53684fd37128a", 
            //     trackingID, referenceID);

            //     if (response['code'] === 200) {
            //         setData(response['data']);
            //         setResponseStatus(true);
            //     }
            // }
            setLoading(false);
            setDataStatus(true);
            setResponseStatus(false);
            return response
        },
    }
}

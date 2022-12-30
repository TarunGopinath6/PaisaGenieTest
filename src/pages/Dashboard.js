import React from 'react'
import useAuthStore from "../storages/AuthStore"

const Dashboard = () => {

    const { trackingID, referenceID } = useAuthStore();
    
    return (
        <div>{trackingID} {referenceID}</div>
    )
}

export default Dashboard
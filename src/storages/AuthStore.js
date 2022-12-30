import create from 'zustand'
import { persist } from 'zustand/middleware'


const useAuthStore = create(
    persist(
        (set, get) => ({
            token: "",
            trackingID: "",
            referenceID: "",

            setTrackingID: (trackingID_) => set(state => ({ trackingID: trackingID_ })),
            setReferenceID: (referenceID_) => set(state => ({ referenceID: referenceID_ })),

            UserDeleteEverything: () => set(state => ({ trackingID:"", referenceID:"" })),
        }),
        {
            name: 'auth-storage',
            getStorage: () => sessionStorage,
        }
    )

);

export default useAuthStore;
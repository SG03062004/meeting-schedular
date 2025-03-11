"use client"
import React, { useEffect, useState } from 'react'
import MeetingTimeDateSelection from '../_components/MeetingTimeDateSelection'
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore'
import { app } from '@/config/FirebaseConfig'

function SharedMeetingEvent({ params }) {
    const db = getFirestore(app);
    const unwrappedParams = React.use(params); // Unwrap params here

    const [businessInfo, setBusinessInfo] = useState();
    const [eventInfo, setEventInfo] = useState();
    const [Loading, setLoading] = useState(false);

    useEffect(() => {
        if (unwrappedParams) {
            getMeetingBusinessAndEventDetails(unwrappedParams);
        }
    }, [unwrappedParams]); // Ensure useEffect runs when unwrappedParams changes

    const getMeetingBusinessAndEventDetails = async (unwrappedParams) => {
        setLoading(true);
        const q = query(collection(db, 'Business'), where('businessName', '==', unwrappedParams.business));
        const docSnap = await getDocs(q);
        docSnap.forEach((doc) => {
            setBusinessInfo(doc.data());
        });

        const docRef = doc(db, 'MeetingEvent', unwrappedParams?.meetingEventId);
        const result = await getDoc(docRef);
        setEventInfo(result.data());
        setLoading(false);
    };

    return (
        <div>
            <MeetingTimeDateSelection eventInfo={eventInfo} businessInfo={businessInfo}/>
        </div>
    );
}

export default SharedMeetingEvent;

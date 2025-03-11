"use client"
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScheduledMeetingList from './_components/ScheduledMeetingList';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import { app } from '@/config/FirebaseConfig';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { format } from 'date-fns';

function ScheduledMeetings() {
    const db = getFirestore(app);
    const { user } = useKindeBrowserClient();
    const [meetingList, setMeetingList] = useState([]);

    // Fetch meetings when user is available
    useEffect(() => {
        user && getScheduledMeetings();
    }, [user]);

    const getScheduledMeetings = async () => {
        try {
            if (!user?.email) return; // Ensure user email exists
    
            const q = query(
                collection(db, 'ScheduledMeetings'),
                where('businessEmail', '==', user.email)
            );
    
            const querySnapshot = await getDocs(q);
            let meetings = [];
    
            querySnapshot.forEach((doc) => {
                let data = doc.data();
                // Ensure timestamp is converted correctly
                data.formatedTimeStamp = data.formatedTimeStamp?.seconds 
                    ? new Date(data.formatedTimeStamp.seconds * 1000) 
                    : new Date(data.formatedTimeStamp);
                meetings.push(data);
            });
    
            console.log("Fetched Meetings:", meetings); // Debugging
            setMeetingList(meetings);
        } catch (error) {
            console.error("Error fetching scheduled meetings:", error);
        }
    };
    
    const filterMeetingList = (type) => {
        return meetingList.filter((item) => {
            const meetingTime = item.formatedTimeStamp instanceof Date ? item.formatedTimeStamp : new Date(item.formatedTimeStamp);
            return type === 'upcoming' ? meetingTime >= new Date() : meetingTime < new Date();
        });
    };
    

    return (
        <div className='p-10'>
            <h2 className='font-bold text-2xl'>Scheduled Meetings</h2>
            <hr className='my-5' />

            <Tabs defaultValue="upcoming" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                    <TabsTrigger value="expired">Expired</TabsTrigger>
                </TabsList>
                <TabsContent value="upcoming">
                    <ScheduledMeetingList meetingList={filterMeetingList('upcoming')} />
                </TabsContent>
                <TabsContent value="expired">
                    <ScheduledMeetingList meetingList={filterMeetingList('expired')} />
                </TabsContent>
            </Tabs>
        </div>
    );
}

export default ScheduledMeetings;

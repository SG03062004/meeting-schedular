import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import React from 'react';

function TimeDateSelection({ date, handleDateChange, timeSlots, setSelectedTime, enableTimeSlot, selectedTime,prevBooking }) {
    const checkTimeSlot = (time) => {
        return prevBooking.some(item => item.selectedTime === time); // ✅ Use `some()` instead of `filter()`
    };
    
    return (
        <div className='md:col-span-2 flex px-4'>
            <div className='flex flex-col'>
                <h2 className='font-bold text-lg'>Select Date and Time</h2>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(d) => handleDateChange(d)}
                    className="rounded-md border mt-5"
                    disabled={(d) => d <= new Date()} 
                />
            </div>
            <div className='flex flex-col w-full overflow-auto gap-4 p-5' style={{ maxHeight: '400px' }}>
                {timeSlots?.map((time, index) => (
                    <Button
                        key={index}
                        disabled={!enableTimeSlot||checkTimeSlot(time)}
                        onClick={() => setSelectedTime(time)}
                        className={`border-2 border-blue-500 text-blue-500 bg-white hover:bg-blue-100 transition-all duration-300 ${
                            time === selectedTime ? 'bg-blue-500 text-white' : ''
                        }`}
                    >
                        {time}
                    </Button>
                ))}
            </div>
        </div>
    );
}

export default TimeDateSelection;

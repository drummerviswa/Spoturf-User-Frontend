import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/authContext';

export default function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const {userData} = useContext(AuthContext)
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`/bookings/customer/${userData.CID}`);
        console.log(response.data);
        
        setBookings(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load bookings');
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);
  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Handle error state
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">Booking History</h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-4 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase">Turf Name</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase">Date</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase">Status</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase">Amount</h5>
          </div>
        </div>

        {/* Map through bookings and display in table rows */}
        {bookings.map((booking, key) => (
          <div
            className={`grid grid-cols-4 sm:grid-cols-5 ${key === bookings.length - 1 ? '' : 'border-b border-stroke dark:border-strokedark'}`}
            key={key}
          >
            <div className="p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{booking.turfName}</p>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <p className="text-black dark:text-white">{booking.date}</p>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <p className="text-black dark:text-white">{booking.status}</p>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <p className="text-black dark:text-white">{booking.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

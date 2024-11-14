import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext";
import moment from "moment";
import BookingSection from "../../components/BookingSection";
import { useDispatch, useSelector } from "react-redux";
import { setBookingDetails } from "../../slice/bookingSlice";

export default function TurfDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [turfData, setTurfData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { userData, isAuthenticated } = useContext(AuthContext);
  const { games, selectedTimeSlots, selectedDate } = useSelector(
    (state) => state.booking
  );

  useEffect(() => {
    const fetchTurfData = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/turfs/${id}`);
        setTurfData(response.data);
      } catch (error) {
        console.error("Error fetching turf data:", error);
      } finally {
        setLoading(false);
      }
    };
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:8800/reviews/${id}`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching review:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTurfData();
    fetchReviews();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!turfData) return <p>Turf data not found</p>;

  const handleBooking = async () => {
    if (!games.length) {
      setErrorMessage("Please select at least one game.");
    } else if (!selectedDate) {
      setErrorMessage("Please select a date.");
    } else if (selectedTimeSlots.length === 0) {
      setErrorMessage("Please select at least one time slot.");
    } else {
      setErrorMessage(null);
      // Proceed with form submission or further logic
      console.log("Booking Submitted!");
    }
    if (isAuthenticated) {
      console.log("!", userData);
      try {
        const response = await axios.post("http://localhost:8800/book/new", {
          CID: userData.CID,
          TID: turfData.TID,
          date: moment(selectedDate).format(),
          slots: selectedTimeSlots,
          gamePreference: games,
        });
        dispatch(setBookingDetails(response.data));
        navigate(`/booking/${response.data.BID}`);
      } catch (error) {
        console.error("Error booking turf:", error);
      }
    } else {
      navigate("/login", {
        state: {
          from: `/listing/${turfData.TID}`,
        },
      });
      console.log(window.location.pathname);
    }
  };

  return (
    <div className="bg-white">
      {/* Turf Detail Layout */}
      <div className="pt-2 flex flex-col">
        <nav aria-label="Breadcrumb">
          <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li className="text-2xl font-black underline ">
              <p
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                Turfs
              </p>
            </li>
            {" / "}
            <li className="text-xl font-bold font-Mulish">
              <p
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {turfData.turfName}
              </p>
            </li>
          </ol>
        </nav>

        {/* Carousel and Booking Section */}
        <div className="max-w-full grid grid-cols-1 lg:grid-cols-12 lg:gap-4 mx-auto">
          <div className="mx-auto px-3 col-span-1 lg:col-span-8 flex flex-col items-center mt-16 sm:p-6 lg:max-w-6xl lg:gap-x-4 lg:p-12">
            <div className="carousel carousel-end rounded-box w-full flex items-center justify-center">
              {turfData.images?.map((image, index) => (
                <div
                  className="carousel-item flex justify-center items-center"
                  key={index}
                >
                  <img
                    alt={image || "Turf Image"}
                    src={image || "/default-image.jpg"}
                    className="object-cover h-96 w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Booking Section */}
          <div className="col-span-1 lg:col-span-3 flex flex-col items-center w-full p-4">
            <BookingSection
              startTime={turfData.startTime}
              endTime={turfData.endTime}
              gamesAvailable={turfData.gamesAvailable}
              blockedSlots={turfData.blockedSlots}
            />
            <button
              onClick={handleBooking}
              className="mt-4 w-full sm:w-3/4 lg:w-full text-center items-center justify-center rounded-md border border-transparent bg-primary px-6 py-2 text-base font-medium text-white hover:bg-darkTheme focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Book Now!
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto lg:mx-32 px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8 lg:pt-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
            <div className="lg:pr-8">
              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">
                {turfData.turfName}
              </h1>
              <h3 className="text-lg sm:text-2xl">{turfData.address}</h3>
              <p className="mt-2 sm:mt-4 text-lg sm:text-3xl">
                ₹{turfData.price} / Hour
              </p>
              <p className="mt-4 text-base sm:text-lg">
                {`${moment(`2024-01-01T${turfData.startTime}`).format(
                  "hh:mm A"
                )} - ${moment(`2024-01-01T${turfData.endTime}`).format(
                  "hh:mm A"
                )}`}
              </p>
            </div>
            <div className="mt-10 sm:mt-12 lg:mt-0">
              <h2 className="text-sm font-medium text-gray-900 my-2">
                Amenities
              </h2>
              <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                {/* Amenities list with optional chaining */}
                {turfData.amenities?.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="font-manrope font-bold text-4xl text-black text-center mb-11">
            Ratings
          </h2>
          {reviews.length ? (
            reviews.map((r) => (
              <div className="grid grid-cols-1 gap-8">
                <div className="grid grid-cols-12 max-w-sm sm:max-w-full mx-auto">
                  <div className="col-span-12 lg:col-span-10 ">
                    <div className="sm:flex gap-6">
                      <img
                        src="https://pagedone.io/asset/uploads/1704364459.png"
                        alt="Robert image"
                        className="w-32 h-32 rounded-full object-cover"
                      />
                      <div className="text">
                        <p className="font-medium text-lg leading-8 text-gray-900 mb-2">
                          {r.name}
                        </p>
                        <p className="font-normal text-base leading-7 text-gray-400 mb-4 lg:pr-8">
                          {r.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-2 max-lg:hidden flex lg:items-center flex-row lg:flex-col justify-center max-lg:pt-6 ">
                    <p className="font-medium text-xl leading-8 lg:text-center whitespace-nowrap">
                      ⭐ {r.rating}
                    </p>
                    <p className="font-medium text-lg leading-8 text-gray-400 lg:text-center whitespace-nowrap">
                      {moment(r.createdAt).format("ll")}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p className="text-center text-xl">No reviews</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

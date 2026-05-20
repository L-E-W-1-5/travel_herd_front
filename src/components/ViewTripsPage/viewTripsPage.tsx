import "./viewTripsPage.css"
import TripCard from "./TripCard/TripCard";
import {useRef, useState} from 'react';
import leftArrow from '../../images/left-arrow.png'
import rightArrow from '../../images/right-arrow.png'

//let count = 0

const ViewTrips = ({ setTripDetails, pageSelect, currentTrips }: any) => {

  const myRef = useRef<HTMLDivElement | null>(null);

  const scrollAmount = 580;

  function scrollWinRight() {

    if (!myRef.current) return;

    myRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  }

  function scrollWinLeft() {

    if (!myRef.current) return;

    myRef.current.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  }

  return (

    <div className='view-trips-div'>

      <h1>your trips</h1>

      <div ref={myRef} className="view-trip-form-item">

        {currentTrips.fullTripData?.map((trip:any) => (

          <TripCard
            key={trip.id}
            className="trip-card"
            setTripDetails={setTripDetails}
            handlePage={pageSelect}
            trip={trip}
          />

        ))}

      </div>

      <img
        className="carousel-button-left"
        src={leftArrow}
        alt="left-arrow"
        onClick={scrollWinLeft}
      />

      <img
        className="carousel-button-right"
        src={rightArrow}
        alt="right-arrow"
        onClick={scrollWinRight}
      />

      <button
        className="view-trip-cancel-button cancel-button"
        onClick={() => {pageSelect("dashboard")}}
      >
        cancel
      </button>

    </div>
  );
}


export default ViewTrips;
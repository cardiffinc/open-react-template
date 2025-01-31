import React from 'react';

interface BookFormProps  {
  id: string
}

const BookForm = ({id} : BookFormProps) => {
  return (
    <form
      action="https://formspree.io/f/meoekene" // replace with your Formspree endpoint
      method="POST"
      className="p-6 bg-gray-800 rounded-md sm:mx-48 mx-8"
      id={id}
    >
      <h2 className="text-2xl text-white mb-4">Bring the Groove to Your Event</h2>
      
      <div className="mb-4">
        <label htmlFor="name" className="text-white">Your Name</label>
        <input
          id="name"
          type="text"
          name="name"
          className="w-full p-2 mt-2 text-black"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="text-white">Email Address</label>
        <input
          id="email"
          type="email"
          name="email"
          className="w-full p-2 mt-2 text-black"
          required
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="text-white">Phone Number</label>
        <input
          id="phone"
          type="text"
          name="phone"
          className="w-full p-2 mt-2 text-black"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="eventType" className="text-white">Type of Event</label>
        <select
          id="eventType"
          name="eventType"
          className="w-full p-2 mt-2 text-black"
          required
        >
          <option value="">Select Event Type</option>
          <option value="corporate">Corporate</option>
          <option value="wedding">Wedding</option>
          <option value="festival">Festival</option>
          <option value="private-party">Private Party</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="bookingItem" className="text-white">Booking For</label>
        <select
          id="bookingItem"
          name="bookingItem"
          className="w-full p-2 mt-2 text-black"
        >
          <option value="">Select Booking</option>
          <option value="Band">Band</option>
          <option value="Artist">Artist</option>
          <option value="Emcee">Emcee</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="eventDate" className="text-white">Event Date</label>
        <input
          id="eventDate"
          type="date"
          name="eventDate"
          className="w-full p-2 mt-2 text-black"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="text-white">Event Details/Message</label>
        <textarea
          id="message"
          name="message"
          className="w-full p-2 mt-2 text-black"
        />
      </div>

      <div className="flex justify-center">
        <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-150">
          Submit Request
        </button>
      </div>
    </form>
  );
};

export default BookForm;

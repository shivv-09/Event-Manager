import Event_card from '../components/Event_card'

const Event = ({ events = [] }) => {
  return (
    <div>
      <div className="flex text-center">
        <h1 className="text-2xl mx-auto my-[2rem] font-bold-sm text-purple-950">All Events</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button className="shadow-lg rounded-lg px-[2rem] bg-white py-2">All</button>
        <button className=" shadow-lg rounded-lg px-[1rem] bg-white py-2">Upcoming</button>
        <button className=" shadow-lg rounded-lg px-[1rem] bg-white py-2">Ongoing</button>
        <button className=" shadow-lg rounded-lg px-[1rem] bg-white py-2">Completed</button>
        <button className=" shadow-lg rounded-lg px-[1rem] bg-white  py-2">Cancelled</button>
      </div>

      <div className="flex gap-6 flex-wrap justify-center p-8">
        {events.length > 0 ? (
          events.map((event, index) => (
            <Event_card key={event.id ?? index} event={event} />
          ))
        ) : (
          <div className="text-slate-600">No events available.</div>
        )}
      </div>
    </div>
  )
}

export default Event
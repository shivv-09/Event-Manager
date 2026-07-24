const Event_card = ({ event = {} }) => {
  const {
    title = '',
    organizer = 'Unknown organizer',
    date = '',
    venue = 'Pune',
    attendees = '0',
    status = 'Upcoming',
  } = event

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-85">
      <h1 className="font-bold text-lg text-purple-900 mb-3">{title}</h1>
      <p className="text-slate-600"><strong>Organizer:</strong> {organizer}</p>
      <p className="text-slate-600"><strong>Date:</strong> {date}</p>
      <p className="text-slate-600"><strong>Venue:</strong> {venue}</p>
      <p className="text-slate-600"><strong>Attendees:</strong> {attendees}</p>
      <p className="text-slate-600"><strong>Status:</strong> {status}</p>
      <div className="flex flex-wrap gap-3 mt-4">
        <button className="rounded border border-purple-950 bg-purple-950 px-4 py-2 text-sm font-semibold text-white">View</button>
        <button className="rounded border border-purple-950 bg-purple-950 px-4 py-2 text-sm font-semibold text-white">Edit</button>
        <button className="rounded border border-purple-950 bg-purple-950 px-4 py-2 text-sm font-semibold text-white">Delete</button>
      </div>
    </div>
  )
}

export default Event_card
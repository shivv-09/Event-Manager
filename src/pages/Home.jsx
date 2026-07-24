import { Link } from 'react-router-dom'

const Home = ({ events = [] }) => {
  const counts = events.reduce(
    (acc, event) => {
      const status = (event.status || 'Upcoming').toLowerCase()
      if (status === 'ongoing') acc.ongoing += 1
      else if (status === 'completed') acc.completed += 1
      else if (status === 'cancelled') acc.cancelled += 1
      else acc.upcoming += 1
      return acc
    },
    {
      upcoming: 0,
      ongoing: 0,
      completed: 0,
      cancelled: 0,
    }
  )

  const totalEvents = events.length
  const featuredEvents = events.slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <section className="rounded-[2rem]  p-10 ">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-purple-900/80">Event Hub</p>
            <h1 className="mt-4 text-4xl font-bold text-slate-900">Manage all your events in one place</h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              Get a quick overview of upcoming, ongoing, completed, and cancelled events. Create new events, view your schedule, and keep everything organized.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/add-event"
              className="rounded-full bg-purple-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-purple-800"
            >
              Add New Event
            </Link>
            <Link
              to="/event"
              className="rounded-full border border-purple-900 px-6 py-3 text-sm font-semibold text-purple-900 transition hover:bg-purple-50"
            >
              View Events
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Total events</p>
            <p className="mt-3 text-4xl font-semibold text-slate-900">{totalEvents}</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Upcoming</p>
            <p className="mt-3 text-4xl font-semibold text-slate-900">{counts.upcoming}</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Ongoing</p>
            <p className="mt-3 text-4xl font-semibold text-slate-900">{counts.ongoing}</p>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-500">Completed</p>
            <p className="mt-3 text-4xl font-semibold text-slate-900">{counts.completed}</p>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-purple-900">Upcoming Events</h2>
          <p className="mt-3 text-slate-600">{counts.upcoming} events scheduled soon.</p>
          <div className="mt-6 space-y-4">
            {events.filter((event) => (event.status || 'Upcoming').toLowerCase() === 'upcoming').slice(0, 3).map((event, idx) => (
              <div key={event.id ?? idx} className="rounded-3xl bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">{event.title || event.name || 'Untitled Event'}</h3>
                <p className="mt-1 text-sm text-slate-500">{event.date || 'Date not set'}</p>
              </div>
            ))}
            {events.filter((event) => (event.status || 'Upcoming').toLowerCase() === 'upcoming').length === 0 && (
              <div className="rounded-3xl border border-dashed border-slate-300 p-5 text-center text-slate-500">
                No upcoming event titles yet.
              </div>
            )}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-purple-900">Ongoing Events</h2>
          <p className="mt-3 text-slate-600">{counts.ongoing} events happening now.</p>
          <div className="mt-6 space-y-4">
            {events.filter((event) => (event.status || '').toLowerCase() === 'ongoing').slice(0, 3).map((event, idx) => (
              <div key={event.id ?? idx} className="rounded-3xl bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">{event.title || event.name || 'Untitled Event'}</h3>
                <p className="mt-1 text-sm text-slate-500">{event.date || 'Date not set'}</p>
              </div>
            ))}
            {events.filter((event) => (event.status || '').toLowerCase() === 'ongoing').length === 0 && (
              <div className="rounded-3xl border border-dashed border-slate-300 p-5 text-center text-slate-500">
                No ongoing event titles yet.
              </div>
            )}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-purple-900">Completed Events</h2>
          <p className="mt-3 text-slate-600">{counts.completed} events finished.</p>
          <div className="mt-6 space-y-4">
            {events.filter((event) => (event.status || '').toLowerCase() === 'completed').slice(0, 3).map((event, idx) => (
              <div key={event.id ?? idx} className="rounded-3xl bg-slate-50 p-4">
                <h3 className="font-semibold text-slate-900">{event.title || event.name || 'Untitled Event'}</h3>
                <p className="mt-1 text-sm text-slate-500">{event.date || 'Date not set'}</p>
              </div>
            ))}
            {events.filter((event) => (event.status || '').toLowerCase() === 'completed').length === 0 && (
              <div className="rounded-3xl border border-dashed border-slate-300 p-5 text-center text-slate-500">
                No completed event titles yet.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
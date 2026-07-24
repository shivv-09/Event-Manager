import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const API_BASE = 'https://6a60576ab1933e9d25fd1438.mockapi.io/API/event'

const statusClass = (status) => {
  if (!status) return 'bg-slate-400 text-slate-700'
  const state = status.toLowerCase()
  if (state === 'active' || state === 'ongoing') return 'bg-emerald-500 text-white'
  if (state === 'upcoming') return 'bg-sky-500 text-white'
  if (state === 'completed') return 'bg-rose-500 text-white'
  if (state === 'cancelled') return 'bg-orange-500 text-white'
  return 'bg-slate-400 text-slate-700'
}

const Event_dets = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [event, setEvent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const loadEvent = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await axios.get(`${API_BASE}/${id}`)
        setEvent(response.data)
      } catch (err) {
        setError('Unable to load event details.')
      } finally {
        setLoading(false)
      }
    }

    if (id) loadEvent()
  }, [id])

  if (loading) {
    return <div className="text-center py-10 text-slate-700">Loading event details...</div>
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">{error}</div>
  }

  if (!event) {
    return <div className="text-center py-10 text-slate-700">No event found.</div>
  }

  const {
    title = 'Untitled event',
    category = 'General',
    venue = 'Unknown venue',
    date = 'TBD',
    time = 'TBD',
    organizer = 'Unknown organizer',
    attendees = '0',
    capacity = 'N/A',
    status = 'Upcoming',
    description = 'No description available.',
  } = event

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <button
        onClick={() => navigate('/event')}
        className="mb-8 inline-flex rounded-full border border-slate-300 bg-white px-5 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
      >
        Back to events
      </button>

      <div className="rounded-[2rem] bg-slate-950 p-10 text-white shadow-2xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Event Details</p>
            <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-200">
              <span className={`inline-flex h-2.5 w-2.5 rounded-full ${statusClass(status)}`} />
              {status}
            </div>
          </div>

          <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Category</p>
              <p className="mt-2 text-lg font-semibold text-white">{category}</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Organizer</p>
              <p className="mt-2 text-lg font-semibold text-white">{organizer}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="space-y-5 rounded-[2rem] bg-white/5 p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Venue</p>
              <p className="mt-2 text-xl font-semibold text-white">{venue}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Date</p>
              <p className="mt-2 text-xl font-semibold text-white">{date}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Time</p>
              <p className="mt-2 text-xl font-semibold text-white">{time}</p>
            </div>
          </div>

          <div className="space-y-5 rounded-[2rem] bg-white/5 p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Participants</p>
              <p className="mt-2 text-xl font-semibold text-white">{attendees} / {capacity}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Location</p>
              <p className="mt-2 text-xl font-semibold text-white">{venue}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white">Description</h2>
          <p className="mt-4 leading-8 text-slate-300">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Event_dets

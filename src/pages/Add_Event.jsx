import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Add_Event = ({ refreshEvents = () => {} }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    organizer: '',
    date: '',
    venue: '',
    attendees: '',
    status: 'Upcoming',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitError('')

    try {
        const API = "https://6a60576ab1933e9d25fd1438.mockapi.io/API/event";

      const response = await axios.post(API, formData)
      refreshEvents()
      navigate('/event')
      alert('Event created successfully.')
    } catch (err) {
      setSubmitError('Unable to save event. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl mt-10">
      <h1 className="text-3xl font-bold text-purple-900 mb-6">Add New Event</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {submitError && <div className="text-red-600">{submitError}</div>}

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Event Title
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
              placeholder="Event title"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Organizer
            <input
              name="organizer"
              value={formData.organizer}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
              placeholder="Organizer name"
              required
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Date
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Venue
            <input
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
              placeholder="Event venue"
              required
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Attendees
            <input
              name="attendees"
              value={formData.attendees}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
              placeholder="Number of attendees"
              required
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium text-slate-700">
            Status
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-3"
            >
              <option>Upcoming</option>
              <option>Ongoing</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </label>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-purple-900 px-6 py-3 text-white transition hover:bg-purple-800 disabled:opacity-50"
        >
          {submitting ? 'Saving…' : 'Submit Event'}
        </button>
      </form>
    </div>
  )
}

export default Add_Event

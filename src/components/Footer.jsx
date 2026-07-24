const Footer = () => {
  return (
    <footer className="mt-10 border-t border-slate-200 bg-white text-slate-700">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xl font-semibold text-slate-900">
            <h1 className="text-lg font-semibold text-slate-900">
              Event<span className="text-purple-900">Hub</span>
            </h1>
          </div>
          <p className="max-w-xl text-sm text-slate-500">
            Build, track and control your events from a single dashboard. Designed for simplicity, speed and clarity.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900">Quick links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="/" className="hover:text-purple-900">Home</a></li>
              <li><a href="/event" className="hover:text-purple-900">Events</a></li>
              <li><a href="/add-event" className="hover:text-purple-900">Add Event</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>Email: support@eventhub.com</li>
              <li>Phone: +1 555 010 3456</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900">Follow</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-purple-900">LinkedIn</a></li>
              <li><a href="#" className="hover:text-purple-900">Twitter</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Event Hub. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer

"use client";
import Card from "../components/Card";

export default function Page() {
  return (
    <div className="scroll-smooth bg-white">

      {/* SECTION 1 */}
      <div className="bg-gray-300 min-h-screen py-16">
        <div className="space-y-6 flex flex-col items-center">

          <Card
            image="/img1.jpg"
            title="Programming for everyone"
            date="May 12, 2026"
            location="Somestreet 26, 12345 San Somewhere"
          />

          <Card
            image="/img2.jpg"
            title="Networking for introverts"
            date="May 30, 2026"
            location="New Wall Street 5, 98765 New Work"
          />

          <Card
            image="/img3.jpg"
            title="Networking for extroverts"
            date="April 10, 2026"
            location="My Street 12, 10115 Broke City"
          />

        </div>
      </div>

      {/* SECTION 2 */}
      <section className="min-h-screen bg-white flex flex-col">

        {/* Header */}
        <div className="bg-[#00bcc9] h-64 flex items-center justify-center">
          <h1 className="text-5xl text-white font-medium text-center px-4">
            Programming for everyone
          </h1>
        </div>

        {/* Event Card */}
        <div className="flex justify-center -mt-24 px-4">
          <div className="bg-[#2d3748] rounded-2xl p-10 flex flex-col md:flex-row items-center gap-12 w-full max-w-4xl shadow-2xl">

            {/* Image */}
            <div className="w-56 h-56 rounded-full overflow-hidden border-8 border-white/20">
              <img
                src="/img4.jpg"
                alt="event"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="text-[#38b2ac] space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-3xl">📅</span>
                <p className="text-2xl font-bold">2026-02-24</p>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-3xl">📍</span>
                <p className="text-lg">
                  Somestreet 26, 12345 San Somewhere
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Description */}
        <div className="text-center mt-16 max-w-3xl mx-auto px-6 pb-20">
          <p className="text-gray-700 text-xl">
            Everyone can learn to code! Yes, everyone! In this live event,
            we are going to go through all the key basics and get you started
            with programming.
          </p>
        </div>

      </section>

    </div>
  );
}
import Image from "next/image";

const EventHighlights = () => {
  return (
    <section className="mt-12">
      <h2 className="text-center text-4xl font-bold mb-8 text-gray-800">Event Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="relative">
          <Image
            src='/img/workshops.jpg'
            alt="Workshop"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            width={500}
            height={500}
          />
          <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg w-full">
            <h3 className="text-2xl font-semibold">Workshops</h3>
            <p>Hands-on coding sessions led by experts.</p>
          </div>
        </div>
        <div className="relative">
          <Image
            src='/img/networking.jpg'
            alt="Networking"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            width={500}
            height={500}
          />
          <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg w-full">
            <h3 className="text-2xl font-semibold">Networking</h3>
            <p>Meet fellow developers from around the world.</p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/img/keynotes.jpg"
            alt="Keynote"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            width={500}
            height={500}
          />
          <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg w-full">
            <h3 className="text-2xl font-semibold">Keynotes</h3>
            <p>Talks from the top voices in the industry.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;

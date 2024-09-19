import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio - I Love Shollakhuddin Kurniawan</title>
        <meta name="description" content="John Doe's Personal Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 text-gray-800 min-h-screen">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl font-bold md:text-6xl">Hi, I'm I Love Shollakhuddin Kurniawan</h1>
            <p className="mt-4 text-lg md:text-2xl">Fullstack Developer</p>
            <a href="#portfolio" className="mt-8 inline-block bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
              View My Work
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16" id="about">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">About Me</h2>
            <p className="mt-4 text-gray-600">
              I'm a full stack web developer from Indonesia who is currently studying in college and wants to continue innovating in the field of software development.
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 bg-white" id="portfolio">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center">My Portfolio</h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Portfolio Item */}
              <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                <Image src="/img/Screenshot(604).png" alt="Portfolio 1" className="w-full h-40 object-cover rounded-lg" width={200} height={200} />
                <h3 className="mt-4 font-bold">Main personal web</h3>
                <p className="mt-2 text-gray-600">My main personal web using nextjs (under development)</p>
                <Link href="https://luvi-kurniawan.vercel.app">Go to site</Link>
              </div>
              {/* Portfolio Item */}
              <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                <Image src="/img/Screenshot(605).png" alt="Portfolio 2" className="w-full h-40 object-cover rounded-lg" width={200} height={200} />
                <h3 className="mt-4 font-bold">Go Promptopia</h3>
                <p className="mt-2 text-gray-600">Simple CRUD prompt ai source template fullstack nextjs</p>
                <Link href="https://go-promptopia.vercel.app">Go to site</Link>
              </div>
              {/* Portfolio Item */}
              <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
                <Image src="/img/Screenshot(606).png" alt="Portfolio 3" className="w-full h-40 object-cover rounded-lg" width={200} height={200} />
                <h3 className="mt-4 font-bold">Forumophic</h3>
                <p className="mt-2 text-gray-600">Forumophic is a forum website using nextjs and laravel</p>
                <Link href="https://forumophic.vercel.app">Go to site</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gray-900 text-white" id="contact">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">Contact Me</h2>
            <p className="mt-4">Have a question or want to work together? Feel free to reach out!</p>
            <form className="mt-8 max-w-lg mx-auto">
              <div className="mb-4">
                <input type="text" className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <input type="email" className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <textarea className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none" rows="4" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600">
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-400 py-8 text-center">
          <p>&copy; 2024 I Love Shollakhuddin Kurniawan. All Rights Reserved.</p>
        </footer>
      </main>
    </>
  );
}

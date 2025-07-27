import React from "react";

const openLibraries = [
  {
    name: "Open Library",
    url: "https://openlibrary.org/",
    description: "Millions of books available to borrow or read online.",
  },
  {
    name: "Libby / OverDrive",
    url: "https://www.overdrive.com/",
    description: "Borrow ebooks and audiobooks with your library card.",
  },
  {
    name: "Internet Archive",
    url: "https://archive.org/",
    description: "A vast collection of digitized books and cultural artifacts.",
  },
];

const themedGroups = [
  { label: "Books on Black Identity", url: "#" },
  { label: "Books Challenging Power", url: "#" },
  { label: "Books by Queer Authors", url: "#" },
];

export default function Libraries() {
  return (
    <div className="min-h-screen bg-[#f4e0d8] text-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-6 md:px-12">
        <h1 className="text-4xl font-bold mb-12 text-center tracking-wide">📚 Libraries & Access</h1>

        {/* Open Access Libraries */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">Open Access Libraries</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {openLibraries.map((lib) => (
              <a
                key={lib.name}
                href={lib.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl border border-gray-200 hover:border-pink-300 transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-pink-800 mb-2">{lib.name}</h3>
                <p className="text-sm text-gray-600">{lib.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Local Library Search */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-6">Find a Local Library</h2>
          <div className="bg-white border border-gray-300 p-6 rounded-md shadow-sm max-w-xl mx-auto">
            <p className="mb-2 text-gray-700">Search by city, ZIP code, or library system:</p>
            <input
              type="text"
              placeholder="Coming soon..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-600 bg-gray-100 cursor-not-allowed"
              disabled
            />
            <p className="text-xs italic text-gray-500 mt-2">This feature will be available in a future update.</p>
          </div>
        </section>

        {/* Themed Ebook Sections */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-6">Free Ebooks by Theme</h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {themedGroups.map((group) => (
              <a
                key={group.label}
                href={group.url}
                className="block bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md hover:border-pink-400 transition duration-200 text-pink-800 font-medium hover:underline text-center"
              >
                {group.label}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

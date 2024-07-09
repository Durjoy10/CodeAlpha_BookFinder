/* eslint-disable no-unused-vars */
// src/App.js
import React, { useState } from 'react';
import BookCard from './components/BookCard';

const App = () => {
  const [search, setSearch] = useState('');
  const books = [
    {
      title: '1984',
      author: 'George Orwell',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Brave New World',
      author: 'Aldous Huxley',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Fahrenheit 451',
      author: 'Ray Bradbury',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Moby-Dick',
      author: 'Herman Melville',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'Jane Eyre',
      author: 'Charlotte Brontë',
      image: 'https://via.placeholder.com/150'
    },
    {
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      image: 'https://via.placeholder.com/150'
    },
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-900 min-h-screen p-8 text-white">

      <section className="flex justify-around items-center mb-8">
        <div className="text-left">
          <h1 className="text-4xl text-orange-500 font-bold mb-2">Book Finder App</h1>
          <p className="text-lg">Find your favorite books easily and quickly</p>
        </div>
        <img
          src="./src/assets/book.png"
          alt="Hero"
          className="w-full max-w-md animate-move"
        />
      </section>
      <div className="max-w-lg mx-auto mb-8">
        <div className="flex">
          <input
            type="text"
            placeholder="Search for books..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full p-2 rounded-l bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:ring-2 focus:ring-blue-500">
            Search
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {filteredBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </div>
    </div>
  );
};

export default App;

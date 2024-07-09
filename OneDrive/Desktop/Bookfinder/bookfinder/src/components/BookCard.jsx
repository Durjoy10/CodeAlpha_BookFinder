// src/components/BookCard.js
import PropTypes from 'prop-types';


const BookCard = ({ book }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white p-4 transform hover:scale-105 transition-transform duration-300">
            <img className="w-full" src={book.image} alt={book.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{book.title}</div>
                <p className="text-gray-400 text-base">
                    {book.author}
                </p>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default BookCard;

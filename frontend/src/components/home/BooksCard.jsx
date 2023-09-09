import PropTypes from 'prop-types'; // Import PropTypes
import BookSingleCard from './BookSingleCard';

const BooksCard = ({ books }) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
      {books.map((item) => (
        <BookSingleCard key={item._id} book={item} />
      ))}
    </div>
  );
};

// Define propTypes for your component
BooksCard.propTypes = {
  books: PropTypes.array.isRequired, // Ensure books is a required array
};

export default BooksCard;

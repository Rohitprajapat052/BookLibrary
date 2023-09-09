import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
      >
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  );
};

// Define propTypes for your component
BackButton.propTypes = {
  destination: PropTypes.string, // Specify that destination is a string
};

export default BackButton;

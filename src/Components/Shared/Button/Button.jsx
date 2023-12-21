import PropTypes from 'prop-types';
const Button = ({ children }) => {
    return (
        <button className='text-text-col py-2 md:py-3 px-3 md:px-6 bg-secondery-col font-bold rounded hover:drop-shadow-2xl uppercase'>
            {children}
        </button>
    );
};
Button.propTypes= {
    children: PropTypes.node
}

export default Button;
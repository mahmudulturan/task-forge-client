import PropTypes from 'prop-types';
const Container = ({ children, className }) => {
    return (
        <div className={`max-w-7xl min-h-screen mx-auto pt-[104px] ${className}`}>
            {children}
        </div>
    );
};
Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,

}
export default Container;
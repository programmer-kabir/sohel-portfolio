import PropTypes from "prop-types";

const Container = ({ children }) => {
  return <div className="w-[94%] mx-auto px-5">{children}</div>;
};

// Add PropTypes validation
Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
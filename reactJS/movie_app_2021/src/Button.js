import PropTypes from "prop-types";

const Button = ({text}) => {
   return <button style={{backgroundColor:"blue", color:"white",}}>{text}</button>;
};

Button.propTypes = {
   text: PropTypes.string.isRequired,
}

export default Button;
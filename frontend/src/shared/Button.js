import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {

    return (

        <button className='btn' onClick={onClick} style={{ backgroundColor: color }}>{ text }</button>

    )
}

// Default button properties if no properties are passed to the function
Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {

    return (

        <button className='btn' style={{ backgroundColor: color }}>{ text }</button>

    )
}

// Default button properties if no properties are passed to the function
Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string
}

export default Button

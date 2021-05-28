// Boilerplate using "rafce" from the ES7 React/Redux/GraphQL/React-Native snippets extension

import PropTypes from 'prop-types'
import Button from './button'

const Header = ({ title, titleAddition }) => {

    return (

        <header className='header'>
            <h1>{title} {titleAddition}</h1>
            <Button color='green' text='Hi!' />
            <Button color='blue' text='Hi!' />
            <Button color='red' text='Hi!' />
        </header>

    )
}

// Default props passed to Header. Can be defined in the exported Header object too (see App.js)
Header.defaultProps = {
    title: 'Task Tracker',
    titleAddition: ''
}

// Set prop types (i.e. string, int, float...)
Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
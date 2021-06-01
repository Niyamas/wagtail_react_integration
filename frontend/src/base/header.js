// Boilerplate using "rafce" from the ES7 React/Redux/GraphQL/React-Native snippets extension

import PropTypes from 'prop-types'
import Button from '../shared/Button'

const Header = ({ title, titleAddition }) => {

    const onClick = (event) => {

        console.log('event:', event)
    }

    return (

        <header className='header'>
            <h1>{title} {titleAddition}</h1>
            <Button color='green' text='Hi!' onClick={onClick} />
            <Button color='blue' text='Hi!' onClick={onClick} />
            <Button color='red' text='Hi!' onClick={onClick} />
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
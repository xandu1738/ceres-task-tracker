import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showForm}) => {
  return (
    <header>
        <h1>{title}</h1>
        <Button onClick={onAdd} color={showForm?'red':'green'} text={showForm ? 'hide' : 'add'} />
    </header>
  )
}

Header.defaultProps={
    title: 'Ceres Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header
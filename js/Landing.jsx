const React = require('react')
const { Link } = require('react-router')

const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>Lets find music</h1>
      <input className='search' type='text' placeholder='Search' />
      <Link to='/search' className='browse-all'>A</Link>
    </div>
  </div>
)

module.exports = Landing

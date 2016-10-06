var React = require('react')
var ReactDOM = require('react-dom')
const div = React.DOM.div
var MyTitle = require('./MyTitle')

var MyTitleFact = React.createFactory(MyTitle)

const TitleComponent = (
  div(null,
    MyTitleFact({title: 'Spotify App!', color:'papayawhip'})
  )
)

ReactDOM.render(TitleComponent, document.getElementById('app'))

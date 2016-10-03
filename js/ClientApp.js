var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1(null, this.props.title)
      )
    )
  }
})


var MyFirstComponent = (
  div(null,
    
    React.createElement(MyTitle, {title: 'Use props everywhere!'})
    
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
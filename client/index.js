const React = require('react')
const ReactDOM = require('react-dom')

const data = {
  name: 'humans',
  fruit: ['apples', 'oranges', 'bananas', 'apples'],
  showFruit: true,
  admin: true
}

function helloTemplate (props) {
  // console.log(props)
  // const elements = [<div>apples</div>, <div>oranges</div>]
  return (
    <>
    asdfsadfsfd
      <h1>hello {props.name}</h1>
      <form>Yay forms { <h3>{1 + 1} this is horrible, don't do this</h3>}</form>
      {props.showFruit && <FruitList fruit={props.fruit} /> }
      {props.admin ? 'admin!!!' : 'sadness'}
    </>
  )
}

function FruitList (props) {
  return (
    <ul>
      {props.fruit.map((fruit, index) => <Fruit key={index} fruit={fruit} />)}
    </ul>
  )
}

function Fruit (props) {
  const liStyle = { }
  return <li className='liFruit' style={liStyle} id={'fruit-' + props.fruit}>{props.fruit}</li>
}

const view = helloTemplate(data)

const placeToMount = document.getElementById('root')

ReactDOM.render(view, placeToMount)


const links=[
  {
    name:'Google',
    url:'https://www.google.com/'
  },
  {
    name:'Facebook',
    url:'https://www.facebook.com/'
  },
  {
    name:'youtube',
    url:'https://www.youtube.com/'
  }
]
function App() {
  

  return (
    <div>
      <h1>Catalogo de links</h1>
      <hr/>
      <ul>
        <li><a href="https://www.google.com/">Google</a> </li>
        <li><a href="https://www.facebook.com/">Fcaebook</a> </li>
        <li><a href="https://www.youtube.com/">Youtube</a> </li>
      </ul>
    </div>
  )
}

export default App

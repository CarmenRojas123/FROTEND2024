import ListItem from "./Listitem";

const personas =['personas', {
  nombre: 'Maria del Carmen Rojas Torres',
  teléfono: 2871071470,
  email:'rojascarmen641@gmail.com'
},
{nombre: 'Mariana Cado',
  teléfono: 78294,
  email:'mcc@gmail.com'
},
{nombre: 'Dalia',
teléfono:8080,
email:'dalikit@gmail.com'
}
]

function App() {
  return (
    <div>
      <h1>Agenda</h1>
      
      <ul>
        {
          personas.map((persona)=>(
            <ListItem
            key={persona.email}
            nombre={persona.nombre}
            teléfono={persona.teléfono}
            email={persona.email}
            />))
        }
      </ul>
    </div>
  )
}

export default App
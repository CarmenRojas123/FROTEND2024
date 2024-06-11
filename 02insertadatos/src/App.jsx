
const persona={
  nombre: 'Maria del Carmen Rojas Torres',
  edad:22,
  FechaN:'01/10/2001',
  NumTel: 2871071470,
  carrera:'ING.Sistemas computacionales',
  email:'isc20350317@gmail.com',
  pasatiempo:[
    'Pasear a mis mascotas',
    'Ver series y peliculas',
    'ir al cine'],
  CiudadN:'Tuxtepec, Oaxaca'
  }
  
  function App() {
  
    return (
      <div>
        <h1>Informacion personal</h1>
        <hr />
        <ul>
          <li>Nombre Completo: {persona.nombre}</li>
          <li>Edad: {persona.edad}</li>
          <li>Edad: {persona.FechaN}</li>
          <li>Numero de Telefono: {persona.NumTel}</li>
          <li>Carrera: {persona.carrera}</li>
          <li>Correo: {persona.email}</li>
          <li>Pasatiempos:
            <ul>
              {
              persona.pasatiempo.map((pasatiempo)=>{
                return <li key={pasatiempo}>{pasatiempo}</li>
              })
            }
            </ul>
          </li>
          <li>Lugar de nacimiento: {persona.CiudadN}</li>
        </ul>
      </div>
    )
  }
  
  export default App

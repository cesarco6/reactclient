
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Importar nuestros componentes
import ShowProds from './components/ShowProducts'
import EditProds from './components/EditProducts'
import CreateProds from './components/CreateProducts'

function App() {
  
  return (
    <div className="container">
      <BrowserRouter >
        <Routes>
          <Route path='/' element={ <ShowProds/>}/>
          <Route path='/create' element={<CreateProds />}/>
          <Route path='/edit/:id' element={<EditProds />}/>
        </Routes>
      </BrowserRouter>          
    </div>
  )
}

export default App

import CompShowProds from "./prod/ShowProd"
import { BrowserRouter,Routes, Route } from "react-router-dom"

function App() {


  return (
    <div className="App">
    <div className="container">        
        <BrowserRouter>
          <Routes>
            <Route path='/' element={ <CompShowProds /> } />
            {/* <Route path='/create' element={ <CreateProduct/> } />
            <Route path='/edit/:id' element={ <EditProduct/> } /> */}
          </Routes>
      </BrowserRouter>      
    </div>
    </div> 
  )
}

export default App
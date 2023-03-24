import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios'


//const endPoint = 'http://localhost/la9rea18/apibe/public/api/product' endpoint laravel
const endPoint = 'http://localhost:8000/api/product' //endpoint de express

function CreateProducts() {
  const [descrip, setDescrip] = useState('')
  const [stock, setStock] = useState(0)
  const [avail, setAvail] = useState(false)    
  const [price, setPrice] = useState(0)
  const navigate = useNavigate()

  const store = (e) => {   
    e.preventDefault()
    axios.post(endPoint, {
      descrip:descrip, 
      avail:avail, 
      stock:stock, 
      price:price
    })
    navigate('/')
  }
  
  return (  
    <div className="col-6 offset-3">
      <div className="card p-4">
      <h3>Ingresa Producto</h3>
       <form onSubmit={store}>
          <div className="mb-3">
            <label className="form-label">Descripcion:</label>
            <textarea
              value={descrip}
              onChange={ (e) => setDescrip(e.target.value)}              
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Precio:</label>
            <input 
              value={price}
              onChange={ (e) => setPrice(e.target.value)}
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Existencias:</label>
            <input 
              value={stock}
              onChange={ (e) => setStock(e.target.value)}
              type="number"
              className="form-control"
            />
          </div>
          <div className="mb-3 form-check">
            <label className="form-check-label" htmlFor="exaCheck1">Disponible:</label>
            <input 
              checked={avail}
              onChange={ (e) => setAvail(e.target.checked)}
              type="checkbox"
              className="form-check-input"
              id="exaCheck1"
            />
          </div>
          <button type="submit" className="btn btn-success">Ingresar</button>
          <Link to="/" className="btn btn-info ms-2">Lista</Link>
        </form> 
    </div>
  </div>
  )
}

export default CreateProducts

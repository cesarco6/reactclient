import axios from 'axios'
import { useEffect, useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"

//const endPoint = 'http://localhost/la9rea18/apibe/public/api/product/' ep laravel
const URI = 'http://localhost:8000/api/product/' //endpoint de express

function EditProducts() {
  const [descrip, setDescrip] = useState('')
  const [stock, setStock] = useState(0)      
  const [price, setPrice] = useState(0)
  const [avail, setAvail] = useState(false)
  const navigate = useNavigate()
  const {id} = useParams() //el id como objeto en laravel {id}


  const update = async (e) => {
    e.preventDefault()
    //await axios.put(`${URI}${id}`, { para laravel API
      await axios.put(URI+id, {
          descrip:descrip,
          avail:avail,
          stock:stock,
          price:price
    })
    navigate('/')
  }

  useEffect(() => {      
      getProductById()
  }, [])

  const getProductById = async () => {
    //const response = await axios.get(`${URI}${id}`) para laravel API
    const response = await axios.get(URI+id)
    setDescrip(response.data[0].descrip)  // en laravel no es necesario [0]
    setAvail(response.data[0].avail)
    setStock(response.data[0].stock)
    setPrice(response.data[0].price)
  }

 
  return (
    <div className="col-6 offset-3">
      <div className="card p-4">
      <h3>Edita Producto # {id}</h3>
       <form onSubmit={update}>
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
          <button type="submit" className="btn btn-success">Actualiza</button>        
          <Link to="/" className="btn btn-info ms-2">Lista</Link>
        </form> 
    </div>
    </div>
  )
}

export default EditProducts

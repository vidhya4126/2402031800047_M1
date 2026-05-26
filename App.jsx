import {BrowserRouter,Routes, Route,Link,useParams} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import Phone from './Phone'
import Laptop from './Laptop'

function App() {

  function User() {
    console.log(useParams())
    const {id} = useParams()
    return <h2>User Profile ID: {id}</h2>
  }

  function NotFound() {
     return <h2>404 Not Found</h2>
  }


  return (
    <BrowserRouter>
      <h1>React Router Example</h1>

      <nav>
        <Link to="/">Home</Link> <br></br>
        <Link to="/about">About</Link> <br></br>
        <Link to="/contact">Contact</Link> <br></br>
        <Link to="/user/10">User</Link> <br></br>
        <Link to="/products">Products</Link> <br></br>
        
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:id' element={<User />} />
          <Route path='/products' element={<Products />} >
            <Route path='phone' element={<Phone />} />
            <Route path='laptop' element={<Laptop />} />
          </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

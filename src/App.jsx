import { useState , useEffect} from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Blog from './Blogs'
import Display from './Display'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

function App() {
  const[blog, setBlogs] = useState(null)
  useEffect(() =>{
    fetch('http://localhost:8000/books')
    .then(res =>{
      return res.json()
    })
    .then(data =>{
      console.log(data)
      setBlogs(data)
    })
  }),[]

 
 return (
    <div>
      <Router>
        <Navbar/>
      
          <Switch>
            <Route exact path= '/'>
              <Home/>
            </Route>
            <Route exact path= '/blog'>
              <Blog/>
              {blog && blog.map((blog =>(
                  <div key = {blog.id}>
                  <h1>{blog.title}</h1>
                  <p>This book: {blog.title}</p>
          </div>
        )))}
            </Route>
            <Route exact path= '/display'>
              <Display/>
            </Route>
              
          </Switch>
        
        </Router>
    </div>
    
        
  
      
    
  )
}

export default App

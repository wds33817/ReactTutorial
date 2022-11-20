import React from 'react'
import ReactDom from 'react-dom'

//1. npm run build
//2. drag build folder to app.netlify.com

// Component uses a capital case
// CSS:
import './index.css'
// setup variables

// if it is js file, you don't have to write suffix
import { data } from './books'

//
import Book from './Book'

//
import { greeting } from './testing/testing'
/*
const names = ['john', 'peter', 'susan']
const newNames = names.map((name) => {
  console.log(name)
  return <h1>{name}</h1>
})
*/
function Booklist() {
  console.log(greeting)
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        // return <Book key={book.id} book={book}></Book>
        return <Book key={book.id} {...book}></Book> // spread all the props
        // we have in the Book
      })}
    </section>
  )
}

/*
const Image = () => {
  return (
    <img
      src={img}
      alt=''
    />
  )
}

const Title = () => <h1>I love you to the Moon and Back</h1>

const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
    Amelia Hepworth
  </h4>
)
*/
ReactDom.render(<Booklist />, document.getElementById('root'))

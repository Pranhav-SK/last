import React from 'react'
import './App.css'
import { BasicTable } from './components/BasicTable'
import { PaginationTable } from './paginationtable'

function App() {
  return (
    <div className='App'>
        <PaginationTable />
      <BasicTable />
    </div>
  )
}

export default App
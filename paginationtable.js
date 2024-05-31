import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table'
import MOCK_DATA from 'https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json'
import { COLUMNS } from './columns'
import './table.css'

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    
    page,
    nextPage,
    previousPage,
    canNextPage,
    caPreviousPage,
    pageOptions,
    state,
    prepareRow
  } = useTable(
    {

    columns,
    data,
  },
  usePagination
)
const { pageIndex} = state
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div>
        <span>
            page{' '}
            <strong>
                {pageIndex + 1} pf {pageOptions.length}
            </strong>{' '}
        </span>
        <button onclick={() => previousPage()} disabled={!canPrevPage}>
            Previous</button>
        <button onclick={() => nextPage()}disabled={!canNextPage}>
            next</button>
      </div>
    </>

  )
}
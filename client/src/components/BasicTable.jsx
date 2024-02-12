import {useReactTable, 
        getCoreRowModel, 
        flexRender, 
        getPaginationRowModel} from '@tanstack/react-table'
import mdata from '../components/MOCK_DATA_2.json'
import { useMemo } from 'react'
import {DateTime} from 'luxon'

export default function BasicTable() {
  
  
  const data = useMemo(() => mdata, [])

  const columns = [
    
    {
        header: 'ID',
        accessorKey: 'id',
        footer: 'ID',
    },
    {
        header: 'Name',
        accessorKey: 'name',
        footer: 'Name',
    },
    //header grouping
    // {
    //     header: "ID", accessorFn: (row) =>`${row.id} ${row.name}`
    // },
    {
        header: 'Expires',
        accessorKey: 'expires',
        footer: 'Expires',
        // cell: info => DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED)
    },
    {
        header: 'Status',
        accessorKey: 'status',
        footer: 'Status',
    },
    {
        header: 'Actions',
        accessorKey: 'actions',
        footer: 'Actions',
    },

  ]

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
})
   
  return (
    <div className='w3-container'>
        <table className='w3-table-all'>
            <thead>
            {table.getHeaderGroups().map(headerGroup => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => <th key={header.id}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>)}
                </tr>
            ))}
            </thead>

            <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
               
            </tbody>
            {/* <tfoot>
            {table.getFooterGroups().map(footerGroup => (
                <tr key={footerGroup.id}>
                    {footerGroup.headers.map(header => <th key={header.id}>
                        {flexRender(header.column.columnDef.header, header.getContext())}
                    </th>)}
                </tr>
            ))}
            </tfoot> */}
        </table>
        <div>
            <button>First Page</button>
            <button>Previous Page</button>
            <button>Next Page</button>
            <button>Last Page</button>
        </div>
    </div>
  )
}

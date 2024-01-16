import React, {useMemo} from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {TABLE_COLUMNS} from './Columns';

export default function CertsTable() {

    // Memoization caches the TABLE_COLUMNS array to improve performance
    // by preventing unnecessary re-renders, and the empty dependency array [] indicates no dependencies.
    const columns = useMemo(() => TABLE_COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

// create tableInstance
//use useTable hook and pass in an object as argument. 

//destructurize the properties and methods from tableInstance
const {
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow
// define 2 properties on this object ( pass in columns and data(rows) as arguments inside useTable hook)
} =  useTable({
    //remember EC6 shorthand syntax: objProp 'columns: columns' === columns
        columns,
        data
    });
    
    


// TABLE UI
  return (
    <div className='overflow-x-auto'>
        <table {...getTableProps()} className='min-w-full leading-normal'>

            {/* HEAD */}
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} className='text-left border-b border-gray-300'>
                        {
                            headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} className='px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-gray-600 uppercase text-sm'>
                                    {column.render('Header')}
                                </th>
                            ))
                        }
                    </tr>
                ))}
               
            </thead>
            
            {/*BODY  */}
            <tbody {...getTableBodyProps()} className='className="text-gray-700'>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} className='border-b border-gray-300'>
                                {
                                    row.cells.map((cell) => {
                                        return <td {...cell.getCellProps()} className='px-5 py-5 border-b border-gray-300 text-sm'>
                                        {cell.render('Cell')}</td>;
                                    })
                                } 
                            </tr>
                        );
                    })
                }
                
            </tbody>
        </table>

    </div>
  )
}

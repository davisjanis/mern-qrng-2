import React, {useMemo} from 'react';
import { useTable } from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS} from './Columns';

export default function BasicTable() {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])



   const tableInstance = useTable({
        columns,
        data
    });

    const {
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow
    } = tableInstance

  return (
    <div className='overflow-x-auto'>
        <table {...getTableProps()} className='min-w-full leading-normal'>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} className='text-left border-b border-gray-300'>
                        {
                            headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()} className='px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-gray-600 uppercase text-sm'>
                                    {column.render('Header')}
                                </th>
                            ))}
                        <th></th>
                    </tr>
                    ))}
               
            </thead>

            <tbody {...getTableBodyProps()} className='className="text-gray-700'>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()} className='border-b border-gray-300'>
                                {row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()} className='px-5 py-5 border-b border-gray-300 text-sm'>
                                        {cell.render('Cell')}
                                    </td>;
                                })}
                                
                            </tr>
                        );
                    })
                }
                
            </tbody>
        </table>

    </div>
  )
}

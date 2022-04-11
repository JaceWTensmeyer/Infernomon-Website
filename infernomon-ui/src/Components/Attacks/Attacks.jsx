import React from 'react'
import { useTable } from 'react-table'

import attackJSON from '../../jsonData/attacks.json';

function Attacks() {
    const data = React.useMemo(
        () => 
            attackJSON
    ,[])

    const columns = React.useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name', // accessor is the "key" in the data
            },
            {
                Header: 'Type',
                accessor: 'type',
            },
            {
                Header: 'Damage',
                accessor: 'damage',
            },
            {
                Header: 'Atk Category',
                accessor: 'attackCategory',
            },
            {
                Header: 'Dmg Category',
                accessor: 'damageCategory',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Cooldown',
                accessor: 'cooldown',
            },
            {
                Header: 'Cast Duration (seconds)',
                accessor: 'castDuration',
            },
            {
                Header: 'Range',
                accessor: 'range',
            },
        ],
        []
    ) 

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({ columns, data })

    return (
        <table {...getTableProps()} style={{fontSize: '10px'}}>
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th
                        {...column.getHeaderProps()}
                        style={{
                        background: 'aliceblue',
                        color: 'black',
                        fontWeight: 'bold',
                        }}
                    >
                        {column.render('Header')}
                    </th>
                    ))}
                </tr>
                ))}
            </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
    )
}

export default Attacks
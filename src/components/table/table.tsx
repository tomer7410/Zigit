import React from 'react'
import { Column, useTable } from 'react-table'
import { TableType } from '../../interfaces/interfaces';
import './table.css'
const Table =({ columns, data,tableType }:{columns:Column<any>[],data:any,tableType:TableType}) =>{

       
  const {
     getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })
  
  const setProjectsColor=(score:number)=>{
    if(score<70)
        return "red"
    if(score>90)
        return "green"
    return "white"
  }
  return (
    <table {...getTableProps()} >
    <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>{column.render("Header")}</th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody {...getTableBodyProps()}>
      {rows.map((row, i) => { 
        prepareRow(row);
        return (
          <tr {...row.getRowProps()} style={{ background: tableType==TableType.usurDetails ? 'white' : setProjectsColor(row.values.score) }}>
            {row.cells.map(cell => {
               
                if(cell.column.Header=="Avatar"){
                    console.log("yes");
                    
                    return <td > <img  src={row.values.avatar} alt="" /> </td>;
                }
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  </table>
  )
}
export default  Table

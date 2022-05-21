import React,{useState,useEffect,useMemo, useLayoutEffect}from 'react'
import { RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import { IProjectDetails, IUser, TableType } from '../../interfaces/interfaces'
import { getProjectDetails } from '../../services/apiServices'
import Table from '../table/table'
import { Column } from 'react-table'
import {IPersonalDetails} from '../../interfaces/interfaces'
import { projectsTableHeaders, userTableHeaders } from '../../tableColumns'
import './infoPage.css'
const InfoPage = () => {
    const personalDetails = useSelector((state: RootState) => state.userReducer.user?.personalDetails)
    const [projectsList,setProjectsList]=useState<IProjectDetails[]>([])
    const fetchProjects=async ()=>{
      try {
        let res=await getProjectDetails()
        setProjectsList(res.data)
      } catch (error) {
          alert("error while fetching projects");   
      }
    }
    useLayoutEffect(()=>{
        console.log("in use layyyout");
        
        fetchProjects()
    },[])
    let p=new Array<IPersonalDetails|undefined>()
    p.push(personalDetails)
    // const personalDetailsData = useMemo<(IPersonalDetails|undefined)[]>(() => p, []);
    const userColumns = React.useMemo<Column<IPersonalDetails>[]>(()=>userTableHeaders,[]);
    // const projectsData = useMemo<(IProjectDetails)[]>(() =>projectsList, []);
    const projectsCloumns = React.useMemo<Column<IProjectDetails>[]>(()=>projectsTableHeaders,[]);
   
    
  return (
    <div className='Tables-Container'>
        
        {projectsList.length>0&&personalDetails&&<div id='Personal-Details-Container'><Table tableType={TableType.usurDetails} columns={userColumns} data={p}/></div>}
        {projectsList.length>0&& <div id='Projects-Container'><Table tableType={TableType.projctsDetails} columns={projectsCloumns} data={projectsList}/></div>}
       {projectsList.length==0&&<span>Loading wells...</span>} 
    </div>
   
  )
}

export default InfoPage
import { Column } from "react-table";
import { IPersonalDetails, IProjectDetails } from "./interfaces/interfaces";

export const userTableHeaders:Column<IPersonalDetails>[]=
    [
        {
            Header: "Name",
            accessor: "name"
        },
        {
            Header: "Team",
            accessor: "Team"
        },
        {
            Header: "Joined At",
            accessor: "joinedAt"
        },
        {
            Header: "Avatar",
            accessor: "avatar"
        }
    ]
    export const projectsTableHeaders:Column<IProjectDetails>[]=
    [
        {
            Header: "Id",
            accessor: "id"
        },
        {
            Header: "Name",
            accessor: "name"
        },
        {
            Header: "Score",
            accessor: "score"
        },
        {
            Header: "Duration",
            accessor: "durationInDays"
        },
        {
            Header: "Bugs Count",
            accessor: "bugsCount"
        },
        {
            // id:"madeDadeline",
            Header: "Made Dade Line",
            accessor: d => d.madeDadeline.toString()
        }
    ]

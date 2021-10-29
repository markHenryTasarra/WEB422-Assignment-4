import React, { Component } from 'react';

import MainContainer from './MainContainer';

class Teams extends Component {
    state = {
        teams: []
    }

    componentDidMount() {
        fetch("https://fierce-eyrie-59581.herokuapp.com/teams")
            .then(res => res.json())
            .then(returnedData => {
                this.setState({
                    teams: returnedData
                });
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <MainContainer sidebar="Teams">
                <h1 className="page-header">Teams</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Projects</th>
                            <th>Employees</th>
                            <th>TeamLead</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((team, index) => {
                            return (
                                <tr>
                                    <td key={index}>{team.TeamName}</td>
                                    <td key={index}>{team.Projects.map((project, index) => {
                                        return (
                                            <li key={index}>{project.ProjectName}</li>
                                        )
                                    })}</td>
                                    <td key={index}>{team.Employees.length} Employees</td>
                                    <td key={index}>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}

export default Teams;
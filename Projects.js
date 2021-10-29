import React, { Component } from 'react';

import moment from 'moment';

import MainContainer from './MainContainer';

class Projects extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
        fetch("https://fierce-eyrie-59581.herokuapp.com/projects")
            .then(res => res.json())
            .then(returnedData => {
                this.setState({
                    projects: returnedData
                });
            }).catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <MainContainer sidebar="Projects">
                <h1 className="page-header">Projects</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map(project => {
                            let endDate = "";
                            if (project.ProjectEndDate == null || !(project.ProjectEndDate))
                                endDate = "n/a";
                            else
                                endDate = moment(project.ProjectEndDate).utc().format("LL");
                            return (
                                <tr key={project._id}>
                                    <td>{project.ProjectName}</td>
                                    <td>{project.ProjectDescription}</td>
                                    <td>{moment(project.ProjectStartDate).utc().format("LL")}</td>
                                    <td>{endDate}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}

export default Projects;
import React, { Component } from 'react';

import Navbar from './NavBar';
import Sidebar from './SideBar';

class MainContainer extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar highlight={this.props.sidebar} />
                        <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainContainer;
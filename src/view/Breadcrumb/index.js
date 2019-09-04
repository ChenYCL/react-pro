import React from "react";
import {Breadcrumb} from "antd";

class ReactBreadcrumb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BreadList: [
                'Home',
                'List',
                'App'
            ]
        }
    }


    render() {
        return (
            <Breadcrumb style={{margin: '16px 0'}}>
                {
                    this.state.BreadList.map((item, key) => (
                        <Breadcrumb.Item key={key}>
                            {item}
                        </Breadcrumb.Item>
                    ))
                }

            </Breadcrumb>
        )
    }

}

export default ReactBreadcrumb;
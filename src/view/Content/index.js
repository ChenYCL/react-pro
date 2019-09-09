import React from 'react';
import { Layout } from 'antd';
import ReactBreadcrumb from '../Breadcrumb';

class Content extends React.Component {
  // constructor(props) {
  //     super(props)
  // }

  render() {
    // eslint-disable-next-line no-shadow
    const { Content } = Layout;
    return (
      <Layout style={{ padding: '0 24px 24px' }}>
        <ReactBreadcrumb />
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {this.props.children}
        </Content>
      </Layout>
    );
  }
}

export default Content;

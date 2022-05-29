import {Component} from "react";

const styles = {
    layout: {
        color: '#2b2a2a',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'columns'
    },
    content: {
        width: '1200px'
    }
}

class Layout extends Component{
    render() {
        return (
            <div style={styles.layout}>
                <div style={styles.content}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
export default Layout;
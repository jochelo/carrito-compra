import {Component} from "react";

const style = {
    bubbleAlert: {
        background: '#bd5252',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fontSize: '0.8rem',
        width: '20px'
    }
}
class BubbleAlert extends Component {
    render() {
        const {value} = this.props;
        return(
            <span style={style.bubbleAlert}>
                {value}
            </span>
        )
    }
}

export default BubbleAlert;
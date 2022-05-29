import {Component} from "react";
import BubbleAlert from "./bubble-alert";

const styles = {
    carro: {
        background: '#31a826',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '10px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: '12px',
        top: '20px'
    }
}

class Carrito extends Component{
    render() {
        const {carro} = this.props;
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);
        return(
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert value={cantidad}/>
                </span>
                <button style={styles.carro}>
                    Carro
                </button>
            </div>
        )
    }
}

export default Carrito;
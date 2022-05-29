import {Component} from "react";
import Producto from "./producto";
const style = {
    productos: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}
class Productos extends Component{
    render() {
        const {productos, agregar} = this.props;
        return (
            <div style={style.productos}>
                {productos.map((producto, index)=> {
                    return <Producto producto={producto}
                                     agregar={agregar}
                                     key={index}/>
                })}
            </div>
        )
    }
}

export default Productos;
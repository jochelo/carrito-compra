import './App.css';
import {Component} from "react";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";
import Productos from "./components/productos";

/*function App() {
  return ('msg');
}*/

class App extends Component {
    state = {
        productos: [
            {
                name: 'Tomate',
                price: 10,
                img: '/productos/tomate.jpg'
            },
            {
                name: 'Arberjas',
                price: 5,
                img: '/productos/arbejas.jpg'
            },{
                name: 'Lechuga',
                price: 30,
                img: '/productos/lechuga.jpg'
            }
        ],
        carro: [],
    }

    agregarAlCarro = (producto) => {
        const {carro} = this.state;
        if(carro.find((x) => { return x.name === producto.name})) {
            const newCarro = carro.map((x)=> {
                return x.name === producto.name ?
                    ({...x, cantidad: x.cantidad + 1})
                    : x
            })
            // this.state.carro = newCarro;

            return this.setState({carro: newCarro})
        }
        return this.setState({
            carro: this.state.carro.concat({
                ...producto,
                cantidad: 1
            })
        })
    }

    render() {
        return (
            <div>
                <NavBar carro={this.state.carro}/>
                <Layout>
                    <h3>Lista de productos</h3>
                    <Productos
                        agregar={this.agregarAlCarro}
                        productos={this.state.productos}/>
                </Layout>
            </div>
        )
    }
}


export default App;

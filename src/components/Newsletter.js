import React from 'react'

export default class Formulario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nombre: '',
      correo: '',
      mostrarFormulario: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.setState({
      mostrarFormulario: false
    })
  }

  render() {
    return (
        <div className={`appie-signup-area `}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="appie-signup-box2">
                {this.state.mostrarFormulario ? (
                  <form onSubmit={this.handleSubmit}>
                    <div className="input-box"> 
                      <input
                        className="input-box"
                        type="text"
                        name="nombre"
                        placeholder="Ingrese su nombre"
                        value={this.state.nombre}
                        onChange={this.handleChange}
                      />
                    </div>

                

                    <div className="input-box">
                      <input
                        className="input-box"
                        type="text"
                        name="correo"
                        placeholder="Ingrese su correo"
                        value={this.state.correo}
                        onChange={this.handleChange}
                      />
                    </div> 
                    <input
                        className="input-box btn-send"
                        type="submit"
                        value="Registrar"
                      />
                  </form>
                ) : (
                  <h6>Bienvenido {this.state.nombre}</h6>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
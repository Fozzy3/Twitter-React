import React from "react";

class Peticiones extends React.Component {

    constructor(props) {
        super(props)

        this.sendData = this.sendData.bind(this)
        this.sendData()
    }

    async sendData() {
        await console.log("estamos enviando dato");
    }

    render(){
        return 
            <h1>Componente de la peticion</h1>
    }
}

export default Peticiones
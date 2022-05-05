import React from "react";

export default class Footer extends React.Component {
    render() {
        console.log(this.props);
        return (
            <footer>
                <div>
                    <ul className="listaProductos">
                        <li>{this.props.greeting1}</li>
                        <li>{this.props.greeting2}</li>
                        <li>{this.props.greeting3}</li>
                        <li>{this.props.greeting4}</li>
                        <li>{this.props.greeting5}</li>
                    </ul>
                </div>
            </footer>
        );
    }
}
import React from "react";

export default class Footer extends React.Component {
    render() {
        console.log(this.props);
        return (
            <footer>
                <div>
                    <p>Futuro Footer {this.props.greeting} {this.props.greeting2} {this.props.greeting3}</p>
                </div>
            </footer>
        );
    }
}

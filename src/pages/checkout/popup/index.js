import React from 'react';
import './popup.sass';

class Popup extends React.Component {

    close = () => {
        let popup = document.querySelector(".modal");
        popup.style.display = "none"
    }

    submit = () => {
        this.close()
        this.props.submit()
    }

    render() {
        return (
            <div className="modal" id="modal-name">
                <div className="modal-box">
                    <div className="modal-header">
                        <p>Confirmation</p>
                    </div>
                    <div className="modal-body">
                        <p>Submit order</p>
                        <br />
                        <button onClick={ () => this.submit() }>Yes</button>
                        <button className="no" onClick={ () => this.close() }>No</button>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default Popup;

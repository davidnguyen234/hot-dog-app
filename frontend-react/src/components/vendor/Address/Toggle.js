import React from 'react';



class Toggle extends React.Component {
    render() {
        let buttonText;
        const style = {
            width: '340px',
            border: '1px #AAA solid',
            padding: '10px',
            backgroundColor: '#000000' // BLACK
        }

        if (this.props.vendorAvail === 1) {
            buttonText = "Open for Business"
            style.backgroundColor = '#32CD32'; // GREEN
        } else if (this.props.vendorAvail === 0) {
            buttonText = "Closed for Business"
            style.backgroundColor = '#FF0000'; // GREEN
        }
        return (
            <button style={style} onClick={(e) => this.props.myClickHandler(e)}>
                {buttonText}
            </button>
        );
    }
}
export default Toggle;
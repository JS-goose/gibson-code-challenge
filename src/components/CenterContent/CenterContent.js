import React, { Component }from 'react';

class CenterContent extends Component {
    render() {
        return (
            <div>
                CenterContent
                <button onClick={this.props.makePostRequest}>POST REQUEST</button>
            </div>
        )
    }
    
}

export default CenterContent;
import React from 'react'
import ReactDOM from 'react-dom'

const Test = React.createClass({
    render: function() {
        return <div>hello world</div>
    }
});

ReactDOM.render(<Test/>, document.getElementById('react-mount'));

export default Test
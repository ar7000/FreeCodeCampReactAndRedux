class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

    submitMessage() {
        this.setState(state => ({
            messages: [...state.messages, state.input]
        })
        )
        this.setState({
            input: ''
        })
    }

    render() {
        const messages = this.state.messages.map(x => <li>{x}</li>)
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input value={this.state.input} onChange={this.handleChange} />
                <button onClick={this.submitMessage}>Click</button>
                <ul>
                    {messages}
                </ul>
            </div>
        );
    }
};
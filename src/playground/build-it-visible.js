class VisibilityToggle extends React.Component {
    constructor(props){
        super(props);
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleVisibilityToggle() {
        // this.state.visibility = !this.state.visibility;
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleVisibilityToggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility ? <p>Some message</p> : ''}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// let visibility = false;

// let toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// }
// const render = () => {
//     let jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {toggleVisibility}>
//                 {visibility ? 'Hide Details' : 'Show Details'}
//             </button>
//             { visibility && (
//                 <div>
//                     <p>Some message</p>
//                 </div>
//             ) }
//         </div>
//     )
//     ReactDOM.render(jsx, document.getElementById('app'));
// }
// render();
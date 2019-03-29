import React from 'react';

export default class AddOptions extends React.Component {
    state = {
        error: undefined
    }
    
    handleAddOption = (e)=> {
        e.preventDefault();
        let value = e.target.elements.optionAdded.value.trim();
        const error = this.props.handleAddOption(value);
        this.setState(() => ( {error: error} ))
        e.target.optionAdded.value = '';
    }
    render() {
        return (            
                <div>
                    {this.state.error ? <p>{this.state.error}</p> : ''}
                    <form onSubmit={this.handleAddOption}>
                        <input type="text" name="optionAdded"/>
                        <button>Add Option</button>
                    </form>
                </div>            
        ) 
    }
}

// constructor(props){
//     super(props);
//     this.handleAddOption = this.handleAddOption.bind(this);
    
// }
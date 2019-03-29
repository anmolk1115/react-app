class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }
    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options) {
            this.setState(() => ({ options }))
            }
        } catch (e) {
            console.log('catch')
        }
        
    };
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
            // console.log('componentDidUpdate!');
        }
        
    }
    componentWillUnmount() {
      console.log('componentWillUnmount!')
    };
    
    
    handleDeleteOptions() {        
        this.setState(()=> ({ options:[] }));
    }
    handlePick() {
        let pick = Math.floor(Math.random() * this.state.options.length);
        alert(this.state.options[pick]);
    }
    handleAddOption(option) {
        if(!option){
            return 'Type something to add item'
        } else if(this.state.options.indexOf(option) > -1){
            return 'this option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in hands of a computer.';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action
                     hasOptions={this.state.options.length > 0}
                     handlePick = {this.handlePick}     
                />
                <Options
                     options={this.state.options}
                     handleDeleteOptions = {this.handleDeleteOptions}
                     handleDeleteOption = {this.handleDeleteOption}   
                />
                <AddOptions 
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}



const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled = {!props.hasOptions}
            >
                    What Should I Do Now..??
            </button>
        </div>
    )
}



const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please Enter Options to get Started!</p>}
            {
                props.options.map((item)=> (
                <Option 
                    key={item} 
                    optionText={item}
                    handleDeleteOption = {props.handleDeleteOption}
                    />

            ))
        }
            
        </div>
    );
}



const Option = (props) => {
    return (
        <div>
           {props.optionText}
           <button 
                onClick={(e)=>{
                    props.handleDeleteOption(props.optionText)
                }}
            >
            Remove
            </button>
        </div>
    )
}


class AddOptions extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) {
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



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



// class Options extends React.Component {    
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {this.props.options.map((item)=>{
//                     return <Option key={item} optionText={item}/>
//                 }
//             )}                
//             </div>
//         ); 
//     }
// }


// functional components

// const User = (props) => {
//     return (
//         <div>
//             <h1>Name: {props.name}</h1>
//             <h2>Age: {props.age}</h2>
//         </div>
//     );
// }

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                Options: {this.props.optionText}
//             </div>
//         )
//     }    
// }

// class Action extends React.Component {    
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled = {!this.props.hasOptions}
//                 >
//                         What Should I Do Now..??
//                 </button>
//             </div>
//         )
//     }
// }

// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }
// }
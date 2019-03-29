import React from 'react';
import AddOptions from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }
    
    
    
    handleDeleteOptions = () => {        
        this.setState(()=> ({ options:[] }));
    }
    handlePick = () =>  {
        let pick = Math.floor(Math.random() * this.state.options.length);
        // alert(this.state.options[pick]);
        let option = this.state.options[pick]
        this.setState(() => ({
            selectedOption: option
        }));
    }
    handleAddOption = (option) => {
        if(!option){
            return 'Type something to add item'
        } else if(this.state.options.indexOf(option) > -1){
            return 'this option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }
    handleModalClose = () => {
        this.setState(() => ({ selectedOption: undefined }));       
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

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in hands of a computer.';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <div className="container">
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
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleModalClose={this.handleModalClose}
                />
            </div>
        )
    }
}


// constructor(props){
    //     super(props);
    //     // this.state = {
    //     //     options: []
    //     // }
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    // }
    
console.log('App.js is running');

let app = {
    title:'Indecision',
    subTitle:'Created in React.',
    options: []

};
function getSub(title) {
    if(title) {
        return <p>Subtitle: {title}</p>
    }
}
/*function getOption (option) { 
    if(option) {
        return <p>Here Are The Options</p>
    } else {
        return <p>No Options</p>
    }
 }*/
let template = (
    <div>
        <h1>{app.title ? app.title : 'No title given'}</h1>
        {getSub(app.subTitle)}
        {(app.options.length > 0) ? <p>Here are the options</p> : <p>No Options</p>}
    </div>
    );
const user = {

    name:'Anmol Khatri',
    age:26,
    location: 'Delhi'

};
function getLocation(location) {
    if(location){
        return <p>Location: {location}</p>;
    }
}
let templateTwo = (
    <div>
        <h1>Name: {user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18)  && <p>Age: {user.age}</p>}
        {getLocation(user.location)}        
    </div>
    );

let optionValue;
const submitData = (e) => {
    e.preventDefault();
    optionValue = e.target.elements.option.value;
    // console.log(optionValue);
    if(optionValue){
    app.options.push(optionValue);
    e.target.elements.option.value = '';
    rerenderTemplate();
    }
};
const removeAll = () => {
    app.options = [];
    rerenderTemplate();
};
const makeDecision = () => {
    let randomNum = Math.floor(Math.random() * app.options.length);
    const choice = app.options[randomNum];
    alert(choice);
};
const appRoot = document.getElementById('app');

const rerenderTemplate = () => {
    const template3 = (
    <div>
        <button disabled = {app.options.length === 0} onClick={makeDecision}>What should I do..??</button>
        <p>{app.options && app.options.length > 0 ? 'Here are the options' : 'No Options'}</p>
        <p>{app.options.length}</p>
        <button onClick = {removeAll}>Remove All</button>
        <form onSubmit = {submitData}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
        <ol>
            { app.options.map((option) => {
                return <li key={option}>{option}</li>
                // console.log(option);                
                })
            }
        </ol>
    </div>

    );
        ReactDOM.render(template3, appRoot);
}

rerenderTemplate();



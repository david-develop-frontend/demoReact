const heading= React.createElement('h1',{name:"h1 heading"},"Hello New world");
const wrapper=React.createElement('div',{name:'wrapper',style:{height:'20px', width:'20px', backgroundColor:'red'}},heading)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(wrapper);
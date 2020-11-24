import './App.css';
import React from 'react';

class Box extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         bgColor: ""
      };
   }
   
   changeColor = (event) => {
      let randomColor = Math.floor(Math.random()*16777215).toString(16);
      this.setState({bgColor: "#" + randomColor}) 
   }

   render() {
      return (
         <div className="box" onMouseOver={() => this.changeColor()} style={{backgroundColor: this.state.bgColor}}></div>
      );
   }   
}

class App extends React.Component {
   render() {
      const boxes = [];
      for(let i = 0; i < 104; i++)
      {
         boxes.push(<Box></Box>)
      }
      return (
         <div>
            {boxes}
         </div>
      );
   }
}

export default App;

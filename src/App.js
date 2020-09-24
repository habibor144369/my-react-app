import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = "This is my first react application ";
  let habib = {
    name : 'habibor Rahaman',
    profetion: 'Student'
  };
  var style = {
    color: 'blue'
  };
  const artist = ['justin beiber', 'ed sheeran', 'teylor swift', 'cherly puth', 'miron', 'samiol', 'nirob', 'mahammod', 'mucha'];

  const singger2 = ['justin beiber', 'ed sheeran', 'teylor swift', 'cherly puth', 'miron', 'samiol', 'nirob'];

  const singger = ['justin beiber', 'ed sheeran', 'teylor swift', 'cherly puth', 'miron', 'samiol', 'nirob'];
  const result = singger.map(s => s);
  console.log(result);

  const data = [
  'JavaScript Programing Language', 
  'Brendan Eich',
  'December 4, 1995; 24 years ago',
  'Object-oriented programming (OOP)',
  'React.js, Anguler.js, veu.js'
];

const products = [
  {name: 'Adobe Photoshop', price: '$30.00'},
  {name: 'Adobe Illustrator', price: '$20.00'},
  {name: 'Adobe Premiere Pro', price: '$40.00'},
  {name: 'Adobe Design Pro', price: '$40.00'}
]
const prouctsName = products.map(p => p.name);
console.log(prouctsName)

  return (
    <div className="App">
          <header className="App-header">
      <ul>
      {singger2.map(hello => <li style ={{color: 'green'}}>{hello}</li>)}

       
        {/* all most dynamic...but not fully dynamic
        <li>{singger2[0]}</li>
        <li>{singger2[1]}</li>
        <li>{singger2[2]}</li>
        <li>{singger2[3]}</li>
        <li>{singger2[4]}</li> */}
      </ul>
      {products.map(poduct => <li style = {{color: 'orange'}}>{poduct.name}</li> )}
      
          <img src={logo} className="App-logo" alt="logo" />
          <Users></Users>
          <Counter></Counter>
          <h2 className='mama' style={style}>{name}</h2>
          <h4 style={{color:'green', border: '2px solid red', padding: '10px', borderRadius: '10px'}}>Name : {habib.name}<br/>Profetion : {habib.profetion}</h4>
    
          <Person name = 'This is habior rahaman' email = 'onilhabib1@gmail.com 📧' contact = '+880 1768280237 📴'></Person>
          <Person name = 'This is thomas alva edision' email = 'thomasAlva@33gmail.com 📧' contact = '+66 45423432 📴'></Person>

            {/* methods-1 */}
          {/* <Thomas name = 'JavaScript Programing Language' creator = 'Brendan Eich' published = 'December 4, 1995; 24 years ago'
           type = 'Object-oriented programming (OOP)' fremWork = 'React.js, Anguler.js, veu.js'
          ></Thomas> */}
          {/* methods-2 */}
          <Thomas name = {data[0]} creator = {data[1]} published = {data[2]} type = {data[3]} fremWork = {data[4]}></Thomas>

          <Thomas name = 'Python Programming Language' creator = 'Guido van Rossum' published = 'released in 1991 29 years ago'
           type = 'Object-oriented programming (OOP)' fremWork = 'Aiohttp, Bottle, CherryPy, jango'
          ></Thomas>


         {/* methods 1  */}
          {/* <Product name = {products[0].name} price = {products[0].price}></Product>
          <Product name = {products[1].name} price = {products[1].price}></Product>
          <Product name = {products[2].name} price = {products[2].price}></Product> */}

            {/* methods- 2 */}  {/* destructure methods....3 */}
            {/* 
            <Product product ={products[0]}></Product>
            <Product product ={products[1]}></Product>
            <Product product ={products[2]}></Product> */}

            { //its fully dynamic product card creator methods...
               products.map(pd => <Product product = {pd}></Product>)
            }
            <List allArtist = {artist}></List>  
            
  
      </header>
    </div>
  );
};

function Person(props){
  const PersonStyle = {
    margin: '10px',
    padding: '20px',
    backgroundColor: '#F6F6F6',
    borderRadius: '20px',
    color: '#704B74'
  }

  return (
    <div style={PersonStyle}>
        <h2>Name : {props.name} </h2>
        <h4>my email : {props.email}</h4>
        <h4>my contact number : {props.contact}</h4>
        <p>Hi i am habior rahaman. i am a web application developper.
        i am studay at shyamoli ider engineering collage. <br/>
        i know multi programming language this javaScript, python, C, C++, PHP excetra 👍
        </p>
    </div>
  );
};



function Thomas(props){
  const PersonStyle = {
    margin: '10px',
    padding: '20px',
    backgroundColor: '#F6F6F6',
    borderRadius: '20px',
    color: '#704B74',
    width: '800px',
    
  };


  return(

      <div style = {PersonStyle}>
        <h3>{props.name}</h3>
        <p>Creator : {props.creator}</p>
        <p>Published : {props.published}</p>
        <p>Type : {props.type}</p>
        <p>Fram work : {props.fremWork}</p>
        
      </div>
  );
}

function Product(props){
  const proudctStyly = {
    backgroundColor: '#F6F6F6',
    borderRadius: '10px',
    hight: '300px',
    width: '350px',
    float: 'left',
    padding:'20px',
    color:'#704B74',
    margin:'10px'
  };

  const {name, price} = props.product;
    return(
      // methods-1....
        // <div style = {proudctStyly}>
        //     <h2>{props.name}</h2>
        //     <h3>{props.price}</h3>
        //     <button style={{padding: '8px 15px', color:'#704B74'}}>Buy Now</button>
        // </div>

        //meyhods-2.....
        // <div style = {proudctStyly}>
        //     <h2>{props.product.name}</h2>
        //     <h3>{props.product.price}</h3>
        //     <button style={{padding: '8px 15px', color:'#704B74'}}>Buy Now</button>
        // </div>
        
        // destructure methods....3
        <div style = {proudctStyly}>
            <h2>{name}</h2>
            <h3>{price}</h3>
            <button style={{padding: '8px 15px', color:'#704B74'}}>Buy Now</button>
        </div>
    );
};

function List(props){
console.log(props)

  return(
    <div>
      <ul>
        {props.allArtist.map(helo => <li style = {{color: 'blue'}}>{helo}</li> )}
          {/* all most dynamic but not fully dynamic...
          <li>{props.allArtist[0]}</li>
          <li>{props.allArtist[1]}</li>
          <li>{props.allArtist[2]}</li>
          <li>{props.allArtist[3]}</li>
          <li>{props.allArtist[4]}</li>
          */}
      </ul>
  </div>
  )
}


function Counter(){
const style = {
  color: 'red', 
  backgroundColor: 'lightgray',
  padding: '20px 50px',
  borderRadius: '10px'
}
const increase = {
  padding:'10px 20px',
  backgroundColor: 'green',
  margin: '10px',
  border:'none',
  borderRadius:'3px'
}
const decrease = {
  padding:'10px 20px',
  backgroundColor: 'red',
  margin: '10px',
  border:'none',
  borderRadius:'3px'
}

  const [count, setCount] = useState(0);
  // const habdlerIncrease = () => setCount(count + 1)
  /**this is same...
    const habdlerIncrease = () => {
    const newCount = count + 1;
    setCount(newCount)
  }
   */

  // const habdlerDecrease = () => setCount(count - 1)
  /**
   this is same.......
    const habdlerDecrease = () => {
    const newCount = count - 1;
    setCount(newCount)
  }
   */

  return(

    /** for passing handlerIncrease and handler Decrease 
     <div>
      <h1 style ={style}>Count : {count}</h1>
      <button style = {increase} onClick = {habdlerIncrease}> Increase</button>
      <button style = {decrease} onClick = {habdlerDecrease}>Decrease</button>
    </div>
     */

     // its methods direct... function set button increase Decrese...
    <div> 
      <h1 style ={style}>Count : {count}</h1>
      <button style = {increase} onClick = {() => setCount(count + 1)}> Increase</button>
      <button style = {decrease} onClick = {() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
 const[users, setUsers] = useState([]);
 useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(respons => respons.json())
        .then(data => {
          setUsers(data)
        })
 }, [])

  return(
        <div>
            <h3 style = {{color:'green'}}>
              Dynamic Users : {users.length}
            </h3>
            <ul>
            {
              users.map(user => <li style = {{color: 'red'}}>{user.name}</li> )
            }
            </ul>
        </div>
  )
}

export default App;

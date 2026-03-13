const projects = {

  calculator: {
    title: "Mini Project — Console Calculator",

    desc: "สร้างเครื่องคิดเลขใน console เพื่อฝึก variables และ data types",

    example:
      `Input
num1 = 10
num2 = 5

Output
Addition: 15
Subtraction: 5
Multiplication: 50
Division: 2`,

    solution:
      `let num1 = 10;
let num2 = 5;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);`
  },

  randomName: {
    title: "Mini Project — Random Name Generator",

    desc: "สร้างโปรแกรมสุ่มชื่อจาก array",

    example:
      `names = ["John","Mike","Anna"]

Output
Random Name: Mike`,

    solution:
      `const names = ["John","Mike","Anna"];

const random =
names[Math.floor(Math.random()*names.length)];

console.log("Random Name:", random);`
  },

  shoppingList: {
    title: "Mini Project — Shopping List",

    desc: "เก็บรายการของใน array และแสดงผลด้วย loop",

    example:
      `items = ["Milk","Eggs","Bread"]

Output
1. Milk
2. Eggs
3. Bread`,

    solution:
      `const items = ["Milk","Eggs","Bread"];

items.forEach((item,index)=>{
 console.log(index+1 + ". " + item);
});`
  },

  scoreFilter: {
    title: "Mini Project — Student Score Filter",

    desc: "กรองคะแนนนักเรียนที่ผ่านเกณฑ์ (50 คะแนนขึ้นไป) เพื่อฝึกใช้ filter()",


    example:
      `Input
scores = [35,60,80,40,55]

Output
Passed Students:
60
80
55`,


    solution:
      `const scores = [35,60,80,40,55];

const passed = scores.filter(score => score >= 50);

console.log("Passed Students:");

passed.forEach(score=>{
 console.log(score);
});`
  },

  userProfile: {
    title: "Mini Project — User Profile Object",

    desc: "สร้าง object สำหรับเก็บข้อมูลผู้ใช้ และแสดงข้อมูลออกมา",


    example:
      `User Data
name = John
age = 20
country = USA

Output
Hello John
Age: 20
Country: USA`,


    solution:
      `const user = {
 name: "John",
 age: 20,
 country: "USA"
};

console.log("Hello", user.name);
console.log("Age:", user.age);
console.log("Country:", user.country);`
  },

  cloneUserData: {
    title: "Mini Project — Clone User Data",

    desc: "ฝึกใช้ Spread Operator (...) เพื่อ clone object",


    example:
      `Original User
name: Anna
age: 22

Cloned User
name: Anna
age: 22`,


    solution:
      `const user1 = {
 name: "Anna",
 age: 22
};

const user2 = {...user1};

console.log("User1:", user1);
console.log("User2:", user2);`
  },

  randomUserAPI: {
    title: "Mini Project — Random User API",

    desc: "โหลดข้อมูลผู้ใช้จาก API ด้วย fetch และ async/await",


    example:
      `Fetch API
https://randomuser.me/api

Output
Name: John Doe
Country: Canada`,


    solution:
      `async function getUser(){

 const res = await fetch("https://randomuser.me/api");
 const data = await res.json();

 const user = data.results[0];

 const name =
 user.name.first + " " + user.name.last;

 const country =
 user.location.country;

 console.log("Name:",name);
 console.log("Country:",country);

}

getUser();`
  },
  helloReact: {
    title: "Mini Project — Hello React Page",

    desc: "สร้างหน้า React แรกของคุณและแสดงข้อความบนหน้าจอ",

    example:
      `Output
Hello Fullstack Developer
Welcome to React`,

    solution:
      `function App() {
  return (
    <div>
      <h1>Hello Fullstack Developer</h1>
      <p>Welcome to React</p>
    </div>
  );
}

export default App;`
  },

  navbar: {
    title: "Mini Project — Navbar Component",

    desc: "สร้าง Navbar component เพื่อฝึกการแบ่ง component ใน React",

    example:
      `Navbar

Home | Projects | Contact`,

    solution:
      `function Navbar(){
  return(
    <nav>
      <a href="#">Home</a> | 
      <a href="#">Projects</a> | 
      <a href="#">Contact</a>
    </nav>
  )
}

export default Navbar;`
  },

  userProfileCard: {
    title: "Mini Project — Profile Card",

    desc: "สร้าง component card สำหรับแสดงข้อมูลผู้ใช้ และรับข้อมูลผ่าน props",

    example:
      `Profile Card

Name: John
Age: 20
Country: USA`,

    solution:
      `function ProfileCard(props){
  return(
    <div>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Country: {props.country}</p>
    </div>
  )
}

export default ProfileCard;`
  },

  counterApp: {
    title: "Mini Project — Counter App",

    desc: "สร้างแอปนับเลขเพื่อฝึก useState",

    example:
      `Counter

0

[ + ]
[ - ]`,

    solution:
      `import {useState} from "react";

function Counter(){

  const [count,setCount] = useState(0);

  return(
    <div>
      <h2>{count}</h2>

      <button onClick={()=>setCount(count+1)}>
        +
      </button>

      <button onClick={()=>setCount(count-1)}>
        -
      </button>
    </div>
  )
}

export default Counter;`
  },

  formInputPreview: {
    title: "Mini Project — Form Input Preview",

    desc: "ให้ผู้ใช้พิมพ์ชื่อ แล้วแสดง preview แบบ realtime",

    example:
      `Input
John

Output
Hello John`,

    solution:
      `import {useState} from "react";

function FormPreview(){

  const [name,setName] = useState("");

  return(
    <div>

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e)=>setName(e.target.value)}
      />

      <h2>Hello {name}</h2>

    </div>
  )
}

export default FormPreview;`
  },

  todoList: {
    title: "Mini Project — Todo List",

    desc: "สร้าง Todo List ด้วย React และใช้ map() แสดงรายการ",

    example:
      `Todo List

[ ] Study React
[ ] Push to Github`,

    solution:
      `import {useState} from "react";

function Todo(){

  const [todos,setTodos] = useState([
    "Study React",
    "Push to Github"
  ]);

  return(
    <div>

      <h2>Todo List</h2>

      <ul>
        {todos.map((todo,index)=>(
          <li key={index}>{todo}</li>
        ))}
      </ul>

    </div>
  )
}

export default Todo;`
  },

  postList: {
    title: "Mini Project — Fetch Post List",

    desc: "โหลดข้อมูล posts จาก API และแสดงใน React",

    example:
      `API
https://jsonplaceholder.typicode.com/posts

Output
Post Title
Post Body`,

    solution:
      `import {useState,useEffect} from "react";

function Posts(){

  const [posts,setPosts] = useState([]);

  useEffect(()=>{

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res=>res.json())
      .then(data=>setPosts(data.slice(0,5)));

  },[]);

  return(

    <div>

      <h2>Posts</h2>

      {posts.map(post=>(
        <div key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}

    </div>

  )

}

export default Posts;`
  },
  simpleHttpServer: {
    title: "Mini Project — Simple HTTP Server",

    desc: "สร้าง HTTP Server ด้วย Node.js ที่ตอบข้อความเมื่อมีคนเข้าเว็บไซต์",


    example:
      `Visit
http://localhost:3000

Output
Hello from Node Server`,

    solution:
      `const http = require("http");

const server = http.createServer((req,res)=>{

  res.writeHead(200,{
    "Content-Type":"text/plain"
  });

  res.end("Hello from Node Server");

});

server.listen(3000,()=>{
  console.log("Server running on port 3000");
});`
  },

  helloApi: {
    title: "Mini Project — Hello API",

    desc: "สร้าง API ด้วย Express ที่ส่งข้อความ JSON กลับไป",


    example:
      `GET
/api

Response
{
 message: "Hello API"
}`,

    solution:
      `const express = require("express");

const app = express();

app.get("/api",(req,res)=>{
  res.json({
    message:"Hello API"
  });
});

app.listen(3000,()=>{
 console.log("Server running");
});`
  },

  notesApi: {
    title: "Mini Project — Notes API",

    desc: "สร้าง REST API สำหรับเก็บโน้ตแบบง่าย",


    example:
      `GET /notes

Response
[
 "Study Node",
 "Build API"
]`,

    solution:
      `const express = require("express");

const app = express();

let notes = [
 "Study Node",
 "Build API"
];

app.get("/notes",(req,res)=>{
 res.json(notes);
});

app.listen(3000);`
  },

  createPostApi: {
    title: "Mini Project — Create Post API",

    desc: "สร้าง API ที่รับข้อมูล post จาก client",


    example:
      `POST /post

Body
{
 title: "Hello",
 content: "My first post"
}`,

    solution:
      `const express = require("express");

const app = express();

app.use(express.json());

let posts = [];

app.post("/post",(req,res)=>{

 const post = req.body;

 posts.push(post);

 res.json({
   message:"Post created",
   data:post
 });

});

app.listen(3000);`
  },

  saveUsers: {
    title: "Mini Project — Save Users",

    desc: "สร้าง API สำหรับเก็บ users",


    example:
      `POST /users

Body
{
 name: "John",
 email: "john@email.com"
}`,

    solution:
      `const express = require("express");

const app = express();

app.use(express.json());

let users = [];

app.post("/users",(req,res)=>{

 const user = req.body;

 users.push(user);

 res.json({
   message:"User saved",
   data:user
 });

});

app.get("/users",(req,res)=>{
 res.json(users);
});

app.listen(3000);`
  },

  loginApi: {
    title: "Mini Project — Login API",

    desc: "สร้างระบบ login แบบง่ายด้วย email และ password",


    example:
      `POST /login

Body
{
 email: "admin@test.com",
 password: "1234"
}

Response
Login Success`,

    solution:
      `const express = require("express");

const app = express();

app.use(express.json());

const user = {
 email:"admin@test.com",
 password:"1234"
};

app.post("/login",(req,res)=>{

 const {email,password} = req.body;

 if(email === user.email && password === user.password){
   res.json({message:"Login Success"});
 }else{
   res.status(401).json({message:"Invalid Login"});
 }

});

app.listen(3000);`
  },

  fullstackBlog: {
    title: "Mini Project — Fullstack Blog API",

    desc: "สร้าง API สำหรับ blog ที่สามารถสร้าง post และดึง post ทั้งหมดได้",


    example:
      `POST /posts
GET /posts

Output
[
 { title:"My Blog", content:"Hello world"}
]`,

    solution:
      `const express = require("express");

const app = express();

app.use(express.json());

let posts = [];

app.post("/posts",(req,res)=>{

 const post = req.body;

 posts.push(post);

 res.json({
  message:"Post added",
  data:post
 });

});

app.get("/posts",(req,res)=>{
 res.json(posts);
});

app.listen(3000);`
  }

};
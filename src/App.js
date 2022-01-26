import './App.css';
import Header from './MyComponents/Header';
import { Gallery } from "./MyComponents/Gallery";
import { Footer } from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react';
import { AddArt } from "./MyComponents/AddArt";
import {
  BrowserRouter as Router,
  Route,
  Switch
  
} from "react-router-dom"
import { About } from "./MyComponents/About"

function App() {
  let initWork
  if (localStorage.getItem("works") === null) {
    initWork = [];
  }
  else {
    initWork = JSON.parse(localStorage.getItem("works"));
  }

  const onDelete = (work) => {
    // console.log("I am on delete", work)
    //delecting thses way in react doenoy work......
    //let index =works.indexOf(work);
    //todos.splice(index,1);
    setWorks(works.filter((e) => { return e !== work; }))

    localStorage.setItem("works", JSON.stringify(works));
  }
  const addArt = (title, desc) => {
    // console.log("I am adding this Art", title, desc)
    let sno;
    if (works.length === 0) {
      sno = 0;
    }
    else {
      sno = works[works.length - 1].sno + 1;
    }
    const myArt = {
      sno: sno,
      title: title,
      desc: desc,

    }
    setWorks([...works, myArt]);

    //console.log(myArt)
  }

  const [works, setWorks] = useState(initWork)

  useEffect(() => {
    localStorage.setItem("works", JSON.stringify(works));
  }, [works])

  return (
    <>
      <Router>
        <Header title="Art Gallery" searchBar={true} />

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddArt addArt={addArt} />
                <Gallery works={works} onDelete={onDelete} />
              </>)
          }}>

          </Route>
          <Route eaxt path="/about">
            <About />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;

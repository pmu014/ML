import React from 'react'
import logo from '../dalpenguin.png';
import Tab from "./Tab";


export default function Header() {
    
  return (
    <div>
      <main className='mainStyle'>
        <img src={logo} className='logoStyle' alt="logo"/>
        Minuk's Life
      </main>
      <section className='tabStyle'>
        <Tab title="Content" />
        <Tab title="Sports" />
        <Tab title="Health" />
        <Tab title="Diary" />
      </section>
    </div>
  )
}

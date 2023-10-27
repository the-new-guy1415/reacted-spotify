import React from 'react'
import './Player.css';
import SideBar from './SideBar';
import Body from './Body';
import Footer from './Footer';

const Player = ({spotify}) => {
  return (
    <div className='player'>
<div className='player_body'>
  <SideBar/>
  <Body spotify={spotify}/>
{/* Sidebar */}
{/* {body} */}
</div>
<Footer/>
{/* footer */}
    </div>


  )
}

export default Player
import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
// eslint-disable-next-line
import { useDataLayerValue } from './DataLayer';

function Sidebar(){
  const [{ playlists }, dispatch] = useDataLayerValue();
   const arr=playlists.items;
    // console.log(playlists);
    return(
        <div className="sidebar">
         <img
           className="sidebar__logo"
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
         alt=""
         />
      <SidebarOption  Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br/>
      <strong className="sidebar__title">PLAYLISTS</strong>
       <hr />
       <div>
        for(var i=0;arr[i]!=null;i++) 
        <SidebarOption title={arr[i].name}/>
        </div>
      
      
        </div>

    )
}
export default Sidebar
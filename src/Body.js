import React from 'react'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import "./Body.css";
import Header from "./Header";
import SongRow from './SongRow';
function Body({spotify}){
  //  const [{ user }, dispatch] = useDataLayerValue;
    return(
        <div className="body">
          <Header spotify={spotify}/>
          <div className="body_info">
        <img src="https://i.scdn.co/image/6682aad217c11156e6d8985036996f1ea7ebb518" alt="" />
        <div className="body_infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>description</p>
        </div>
      </div>
      <div className="body_songs">
       <div className="body_icons">
       <PlayCircleFilledIcon className="body_shuffle"/>
       <FavoriteIcon fontSize="large"/>
       <MoreHorizIcon/>
       </div>
        {/*list of song*/}
        <SongRow />
      </div >
        </div>

    )
}
export default Body
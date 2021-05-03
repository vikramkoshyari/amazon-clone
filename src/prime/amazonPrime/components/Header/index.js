import React from "react";
import "./header.scss";
import PrimeIcon from "../../assets/logo.png";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link , useHistory} from "react-router-dom";

const Header = () => {


  return (
    <div className="head">
      <div className="iconDiv">
        <img src={PrimeIcon} alt="" className="primeIcon" />
      </div>
      <div>
        <div className="navBarDiv">
          <div className="navLinks">
            <Link to = "/prime">
              <div className="textLink">Home</div>
            </Link>
          </div>
          <div className="navLinks">
            <Link to={'/tvShows'}>
              <div className="textLink">TV Shows</div>
            </Link>
          </div>
          <div className="navLinks">
            <Link to = "/movies">
              <div className="textLink">Movies</div>
            </Link>
          </div>
          {/* <div className="navLinks">
            <a href="/">
              <div className="textLink">Kids</div>
            </a>
          </div> */}
        </div>
      </div>

      <div className="headerAlignEnd">
        <div className="inputOuterDiv">
          <div className="inputDiv">
            <div>
              <SearchOutlinedIcon className="searchIcon" />
            </div>
            <div>
              <input type="text" className="inputBox" placeholder="Search" />
            </div>
          </div>
        </div>
        <div>
            <Link to = '/' className="arrow">
              <ArrowForwardIcon className="account" fontSize="large"  />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

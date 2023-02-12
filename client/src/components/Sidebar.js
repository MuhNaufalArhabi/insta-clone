import Search from "./Search";
import { useState } from "react";

export default function Sidebar() {
  const [search, setSearch] = useState(false);

  return (
    <>
      <nav class="sidebar">
        <div class="top-container">
          <h2>Instagram</h2>
          <div class="icon">
            <button>
              <i class="fa-brands fa-instagram"></i>
            </button>
          </div>
          <div>
            <input type="text" placeholder="Search" />
            <button>
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
        <div class="side-container">
          <div class="sub-menu">
            <button>
              <i class="fa-solid fa-house"></i>
            </button>
          </div>
          <div id="search-btn" class="sub-menu">
            <button onClick={() => {setSearch(!search)}}>
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <div class="sub-menu">
            <button>
              <i class="fa-regular fa-compass"></i>
            </button>
          </div>
          <div class="sub-menu">
            <button>
              <i class="fa-solid fa-clapperboard"></i>
            </button>
          </div>
          <div id="comment-btn" class="sub-menu">
            <button>
              <i class="fa-regular fa-comment"></i>
            </button>
          </div>
          <div class="sub-menu">
            <button>
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
          <div class="sub-menu">
            <img src="https://via.placeholder.com/100x100" />
          </div>
        </div>
        {search ? <Search /> : null}
      </nav>
    </>
  );
}

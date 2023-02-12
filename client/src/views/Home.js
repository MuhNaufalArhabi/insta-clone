import Stories from "../components/Stories";
import axios from "axios";
import { useEffect, useState } from "react";
import Posts from "../components/Posts";

export default function Home() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const {data} = await axios({
      method: "GET",
      url: "https://api.jsonbin.io/v3/b/63bd23fe15ab31599e3290c1"

    })
    console.log(data.record.data)
    setPosts(data.record.data)
  }
  useEffect(() => {
    getPosts()
  }, [])
    
  return (
    <>
      <div class="container">
        <Stories />
        <div class="main-content">
          {posts.length > 0 ? (posts.map((post) => <Posts post={post} />) ) : (<h1>Loading...</h1>)}
        </div>
      </div>
    </>
  );
}

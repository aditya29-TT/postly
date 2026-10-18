import React ,{useState,useEffect}from 'react'
import axios from 'axios'

const feed = () => {
    const [posts, setPosts] = React.useState([
        {
            _id: "1",
            image:"https://i.pinimg.com/1200x/3a/23/67/3a23672dc5c6cefc74da1e93ed7677f5.jpg",
            caption: "mouse on adventure",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
        }
    ])
useEffect(() => {
    void axios.get("https://postly-backend-jiiv.onrender.com/posts")
        .then((res)=>{
           setPosts(res.data.posts)
        })
       
    },[])

  return (
    <section className ="feed-section">
        {
            posts.length > 0 ?(
                posts.map((post)=>(
                    <div key={post._id} className='post-card'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                        <p>{post.description}</p>
                    </div>
                ))
            ) : (
                <h1>No posts available.</h1>
            )
        }
    </section>
  )
}

export default feed

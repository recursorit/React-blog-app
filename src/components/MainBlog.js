import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, Button } from 'react-bootstrap'
import ReactReadMoreReadLess from "react-read-more-read-less";

const MainBlog = () => {
    const [posts,setPosts] = useState([])
    


    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

   

    return (
        <div>
            <h2 className="mt-5 display-3 mb-2">Latest Blogs</h2> 
                {
                    posts.map( (post,id) => 
                        <Card className="my-4" border="dark" key={post.id}  >
                        <Card.Img variant="top" src={"https://source.unsplash.com/random/286x180?sig=" + (id) }/>
                        <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                          <Card.Text>
                            <ReactReadMoreReadLess
                                charLimit={50}
                                readMoreText={"Read more ▼"}
                                readLessText={"Read less ▲"}
                            >
                                {post.body}
                            </ReactReadMoreReadLess>
                            
                          </Card.Text>
                          
                        </Card.Body>
                        </Card>)
                }
            
        </div>
    )
}

export default MainBlog
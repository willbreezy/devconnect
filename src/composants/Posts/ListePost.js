import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";

// Composant pour afficher la liste des publications
const ListePost = () => {
    const [posts, setPosts] = useState([])

    // Récupération des publications depuis l'API
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/posts')
                setPosts(response.data)
            } catch (error) {
                console.error(error);
                
            }
        }

        fetchPosts()
    }, [])

    return (
        <div>
            {posts.map((post) => {
                <Post key={post.id} post={post} />
            })}
        </div>
    )
}

export default ListePost
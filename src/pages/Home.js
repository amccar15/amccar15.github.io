import React, { useState, useEffect } from "react";
import {collection, getDocs, deleteDoc, doc} from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { Link } from 'react-router-dom';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';


function Home({ isAuth }) {
    const [postLists, setPostList] = useState([]);

    const postsCollectionRef = collection(db, "posts");

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    }

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(postsCollectionRef);
            setPostList(data.docs.map((doc) => (
                { ...doc.data(), id: doc.id}
                )
            ));
        };
        getPosts();
    }, [deletePost]);

    const storage = getStorage();
    const starsRef = ref(storage, 'image/image.png');

    return (
        <div className="homePage">
            {postLists.map((post) => {
                return <div className="post"> 
                    <div className="post">
                            <div className="postHeader">
                                <div className="title">
                                    <h1> {post.title} </h1>
                                </div>
                                <div className="deletePost">
                                    {isAuth && post.author.id === auth.currentUser.uid && (
                                        <button 
                                            onClick={() => {
                                                deletePost(post.id);
                                            }}> X 
                                        </button>
                                    )}
                                </div>
                            </div>
                        <div className="postTextContainer"> {post.postText} </div>
                        <h3>@{post.author.name}</h3>
                        <br/>
                        <button key={post.id}>
                            <Link to={{pathname: '/thepost/'+post.id}}> View Post</Link>
                        </button>
                    </div>
                </div>
            })}
        </div>
    );
}

export default Home;
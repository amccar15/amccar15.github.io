import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../firebase-config';
import { Link } from "react-router-dom";

function ShowSearch() {

    const {type, search} = useParams();

    const postsCollectionRef = collection(db, "posts");

    const [post, setPost] = useState([]);

    useEffect(() => {
        if(type === 'title') {
            const q = query(postsCollectionRef, where(type, '>=', search));
            getPosts(q);
        }
        if(type === 'author') {
            const q = query(postsCollectionRef, where(type+".name", '>=', search));
            getPosts(q);
        }
    }, []);

    const getPosts = async (qSearch) => {
        const docData = await getDocs(qSearch);
        setPost(docData.docs.map((doc) => (
                {...doc.data(), id: doc.id}
            )
        ));
    }

    return(
        <div>
            {post !== null && post.map((p) => {
                return <div className="post" style={{backgroundColor: "#7B8D8E", margin: "1em", padding: "1em", borderRadius: "1em"}}> 
                <hr />
                <div className="postHeader">
                    <div className="title">
                        <h1> {p.title} </h1>
                    </div>
                </div>
                <div> 
                    <span className="openBtn" key={p.id}>
                        <Link className="viewPost" to={{pathname: '/thepost/'+p.id}}> View Post</Link>
                    </span>
                </div>
            <div className="postTextContainer"> {p.postText} </div>
                <h3>@{p.author.name}</h3>
            </div>            
            })}
            <div>
                {post && post.length === 0 && (
                    <h1>No posts where found</h1>
                )}
            </div>
        </div>
    );
}

export default ShowSearch;
import React, { useState, useEffect } from "react";
import {addDoc, collection} from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import {useNavigate} from 'react-router-dom';
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function CreatePost({ isAuth }) {

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");
    const [imageExist, setImageExist] = useState("");

    const postsCollectionRef = collection(db, "posts");

    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title, 
            postText, 
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
            imageExist
        });
        navigate("/");
    };

    useEffect(() => {
        if(!isAuth) {
            navigate("login");
        }
    }, []);

    const storage = getStorage();
    const [image, setImage] = useState('');

    const storageRef = ref(storage, 'image/image.png');

    const upload = () => {
        uploadBytes(storageRef, image).then((snapshot) => {
            console.log("Uploaded file");
        });
    }

    return (
        <div className="createPostPage"> 
            <div className="cpContainer">
                <h1> Create a Post</h1>
                <div className="inputGp">
                    <label> Title: </label>
                    <input placeholder="Title..." 
                        onChange={(event) => {
                            setTitle(event.target.value)
                            }
                        }
                    />
                </div>
                <div className="inputGp">
                    <label> Post: </label>
                    <textarea placeholder="Post..."
                        onChange={(event) => {
                            setPostText(event.target.value)
                                }
                        }
                    />
                </div>
                <div>
                    <input type="file" 
                        onChange={(event) => {
                            setImage(event.target.files[0])
                            setImageExist(true);
                            }
                        } 
                    />
                </div>
                <button onClick={() => {upload(); createPost();}}> Submit Post</button>
            </div>
        </div>
    );
}

export default CreatePost;
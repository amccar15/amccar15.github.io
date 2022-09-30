import React, { useState, useEffect, Component } from "react";
import {addDoc, collection} from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import {useNavigate} from 'react-router-dom';
import { getStorage, ref, uploadBytes } from 'firebase/storage'
import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function CreatePost({ isAuth }) {

    const content = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};

    class EditorConvertToJSON extends Component {
        constructor(props) {
            super(props);
                const contentState = convertFromRaw(content);
                this.state = {
                    contentState,
                }
            }
            onContentStateChange = (contentState) => {
                this.setState({
                    contentState,
                });
            }
        }

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");

    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title, 
            postText, 
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        navigate("/");
    };

    useEffect(() => {
        if(!isAuth) {
            navigate("login");
        }
    }, []);

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
                <br></br>
                <Editor className="editor"
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName" 
                        >
                <div className="inputGp">
                    <label> Post: </label>
                         <input placeholder="Post..." className="textspot"
                        onChange={(event) => {
                            setPostText(event.target.value)
                            }
                        } />
                </div>
                </Editor>
                <button onClick={() => createPost()}> Submit Post</button>
            </div>
        </div>
    );
}

export default CreatePost;
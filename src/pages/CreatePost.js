import React, { useState, useEffect } from "react";
import {addDoc, collection} from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import {useNavigate} from 'react-router-dom';

import { ContentState, Editor } from "react-draft-wysiwyg";
import draftToHtml from 'draftjs-to-html'; 
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { convertFromRaw, convertToRaw, EditorState } from "draft-js";
import { convertFromHTML, convertToHTML } from "draft-convert";

import sanitizeHtml from 'sanitize-html';

function CreatePost({ isAuth }) {

    const [title, setTitle] = useState("");

    //rich text editor state
    const [editorState, setEditorState] = useState(
        {
            message: "Enter your post here!",
            rawMessage: '',
        },
    );

    const [postText, setPostText] = useState(
        {
            convertMessage: '',
            messagePost: ''
        }
    );

    //firebase collection 
    const postsCollectionRef = collection(db, "posts");

    //navigate function to navigate back to root file
    let navigate = useNavigate();

    //sending data to firebase
    const createPost = async () => {

        console.log({
            title, 
            postText: editorState.rawMessage, // Just use editorState.rawMessage because postText won't update
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        await addDoc(postsCollectionRef, {
            title, 
            postText: editorState.rawMessage, // Just use editorState.rawMessage because postText won't update
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        navigate("/");
    };

    //checking if user is logged in
    useEffect(() => {
        if(!isAuth) {
            navigate("login");
        }
    }, []);

    //converting to raw html
    const onEditorStateChange = (editorState) => {
        setEditorState({
            editorState,
            rawMessage: convertToHTML(editorState.getCurrentContent())
        })
    }
    
    //handling the message from rich text editor
    const handleEditorStateMessage = () => {
        // setEditorState({
        //     message: editorState.rawMessage
        // });
        // setPostText({
        //     messagePost: postText.convertMessage
        // });
        console.log("editorstate: ", sanitizeHtml(editorState.rawMessage));

        createPost();
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
                <br></br>
                <Editor 
                    initialEditorState={editorState}
                    onEditorStateChange={onEditorStateChange}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName" 
                />
                <button onClick={() => {handleEditorStateMessage();}}> Submit Post</button>
            </div>
        </div>
    );
}

export default CreatePost;
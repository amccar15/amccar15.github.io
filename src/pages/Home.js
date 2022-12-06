import React, { useState } from "react";
import {collection, getDocs, deleteDoc, doc, query, where} from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import { Link } from 'react-router-dom';

function Home({ isAuth }) {
    const [chapter, setChapter] = useState([]);

    const [openSection, setOpenSection] = useState({
        chapter5: 'false',
        chapter6: 'false',
        chapter7: 'false',
        chapter8: 'false',
        chapter9: 'false',
        chapter10: 'false',
        chapter11: 'false',
        chapter12: 'false',
    });

    const postsCollectionRef = collection(db, "posts");

    const deletePost = async (id) => {
        const postDoc = doc(db, "posts", id);
        await deleteDoc(postDoc);
    }

    const chapterQuery = async (qOption) => {
        const q = query(postsCollectionRef, where("Chapter", '==', qOption));
        const docData = await getDocs(q);
        setChapter(docData.docs.map((doc) => (
                {...doc.data(), id: doc.id}
            )
        ));
    }

    return (
        <div>
            <div className="heroSection">
                
            </div>
                <div className="HomeSections">
                    <div className="HomeSection1">
                        <div className="sectionGroup">
                            <img className="topicImg" src={require("../assets/Importance-of-project-scope-management.jpeg")} alt="Scope management"/>
                            <div className="btnGroup">
                                <h1>Topics in Project Scope Management?</h1>
                                <span className="openBtn" onClick={() => 
                                                    {chapterQuery("5"); 
                                                        setOpenSection(prevState => {return {...prevState, 
                                                            chapter5: true, 
                                                            chapter6: false, 
                                                            chapter7: false,                                                         
                                                            chapter8: false, 
                                                            chapter9: false, 
                                                            chapter10: false, 
                                                            chapter11: false, 
                                                            chatper12: false}}) 
                                                    }}
                                >Open Section</span>
                                <span className="openBtn" onClick={() => setOpenSection(prevState => {return {...prevState, chapter5: false}}) }>Close Section</span>
                            </div>
                        </div>
                        {openSection.chapter5 === true && chapter.map((post) => {
                            return <div className="post"> 
                                        <hr />
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
                                        <div> 
                                            <span className="openBtn" key={post.id}>
                                                <Link className="viewPost" to={{pathname: '/thepost/'+post.id}}> View Post</Link>
                                            </span>
                                        </div>
                                    <div className="postTextContainer"> {post.postText} </div>
                                    <h3>@{post.author.name}</h3>
                            </div>              
                        })}
                    </div>
                    <div className="HomeSection1">
                        <div className="sectionGroup">
                            <img className="topicImg" src={require("../assets/Project-Scheduling-Management.png")} alt="Scope management"/>
                            <div className="btnGroup">
                                <h1>Topics in Project Schedule Management?</h1>
                                <span className="openBtn" onClick={() => 
                                                    {chapterQuery("6"); 
                                                        setOpenSection(prevState => {return {...prevState, 
                                                            chapter5: false, 
                                                            chapter6: true, 
                                                            chapter7: false,                                                         
                                                            chapter8: false, 
                                                            chapter9: false, 
                                                            chapter10: false, 
                                                            chapter11: false, 
                                                            chatper12: false}}) 
                                                    }}
                                >Open Section</span>
                                <span className="openBtn" onClick={() => setOpenSection(prevState => {return {...prevState, chapter6: false}}) }>Close Section</span>
                            </div>
                        </div>
                        {openSection.chapter6 === true && chapter.map((post) => {
                            return <div className="post"> 
                                        <hr />
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
                                        <div> 
                                            <span className="openBtn" key={post.id}>
                                                <Link className="viewPost" to={{pathname: '/thepost/'+post.id}}> View Post</Link>
                                            </span>
                                        </div>
                                    <div className="postTextContainer"> {post.postText} </div>
                                    <h3>@{post.author.name}</h3>
                            </div>              
                        })}
                    </div>
                    <div className="HomeSection1">
                        <div className="sectionGroup">
                            <img className="topicImg" src={require("../assets/Project-Cost-Management-Plan.jpg")} alt="Scope management"/>
                            <div className="btnGroup">
                                <h1>Topics in Project Cost Management?</h1>
                                <span className="openBtn" onClick={() => 
                                                    {chapterQuery("7"); 
                                                        setOpenSection(prevState => {return {...prevState, 
                                                            chapter5: false, 
                                                            chapter6: false, 
                                                            chapter7: true,                                                         
                                                            chapter8: false, 
                                                            chapter9: false, 
                                                            chapter10: false, 
                                                            chapter11: false, 
                                                            chatper12: false}}) 
                                                    }}
                                >Open Section</span>
                                <span className="openBtn" onClick={() => setOpenSection(prevState => {return {...prevState, chapter7: false}}) }>Close Section</span>
                            </div>
                        </div>
                        {openSection.chapter7 === true && chapter.map((post) => {
                            return <div className="post"> 
                                        <hr />
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
                                        <div> 
                                            <span className="openBtn" key={post.id}>
                                                <Link className="viewPost" to={{pathname: '/thepost/'+post.id}}> View Post</Link>
                                            </span>
                                        </div>
                                    <div className="postTextContainer"> {post.postText} </div>
                                    <h3>@{post.author.name}</h3>
                            </div>              
                        })}
                    </div>
                    <div className="HomeSection1">
                        <div className="sectionGroup">
                            <img className="topicImg" src={require("../assets/Project_Quality_Management.avif")} alt="Scope management "/>
                            <div className="btnGroup">
                                <h1>Topics in Project Quality Management?</h1>
                                <span className="openBtn" onClick={() => 
                                                    {chapterQuery("8"); 
                                                        setOpenSection(prevState => {return {...prevState, 
                                                            chapter5: false, 
                                                            chapter6: false, 
                                                            chapter7: false,                                                         
                                                            chapter8: true, 
                                                            chapter9: false, 
                                                            chapter10: false, 
                                                            chapter11: false, 
                                                            chatper12: false}}) 
                                                    }}
                                >Open Section</span>
                                <span className="openBtn" onClick={() => setOpenSection(prevState => {return {...prevState, chapter8: false}}) }>Close Section</span>
                            </div>
                        </div>
                        {openSection.chapter8 === true && chapter.map((post) => {
                            return <div className="post"> 
                                        <hr />
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
                                        <div> 
                                            <span className="openBtn" key={post.id}>
                                                <Link className="viewPost" to={{pathname: '/thepost/'+post.id}}> View Post</Link>
                                            </span>
                                        </div>
                                    <div className="postTextContainer"> {post.postText} </div>
                                    <h3>@{post.author.name}</h3>
                            </div>              
                        })}
                    </div>
                    <div className="HomeSection1">
                        <div className="sectionGroup">
                            <img className="topicImg" src={require("../assets/how-create-present-resource-plan.jpg")} alt="Scope management"/>
                            <div className="btnGroup">
                                <h1>Topics in Project Resource Management?</h1>
                                <span className="openBtn" onClick={() => 
                                                    {chapterQuery("9"); 
                                                        setOpenSection(prevState => {return {...prevState, 
                                                            chapter5: false, 
                                                            chapter6: false, 
                                                            chapter7: false,                                                         
                                                            chapter8: false, 
                                                            chapter9: true, 
                                                            chapter10: false, 
                                                            chapter11: false, 
                                                            chatper12: false}}) 
                                                    }}
                                >Open Section</span>
                                <span className="openBtn" onClick={() => setOpenSection(prevState => {return {...prevState, chapter9: false}}) }>Close Section</span>
                            </div>
                        </div>
                        {openSection.chapter9 === true && chapter.map((post) => {
                            return <div className="post"> 
                                        <hr />
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
                                        <div> 
                                            <span className="openBtn" key={post.id}>
                                                <Link className="viewPost" to={{pathname: '/thepost/'+post.id}}> View Post</Link>
                                            </span>
                                        </div>
                                    <div className="postTextContainer"> {post.postText} </div>
                                    <h3>@{post.author.name}</h3>
                            </div>              
                        })}
                    </div>
                    <div className="HomeSection1">
                        <div className="sectionGroup">
                            <img className="topicImg" src={require("../assets/Project-Communication-Management.jpg")} alt="Scope management"/>
                            <div className="btnGroup">
                                <h1>Topics in Project Communications Management?</h1>
                                <span className="openBtn" onClick={() => 
                                                    {chapterQuery("10"); 
                                                        setOpenSection(prevState => {return {...prevState, 
                                                            chapter5: false, 
                                                            chapter6: false, 
                                                            chapter7: false,                                                         
                                                            chapter8: false, 
                                                            chapter9: false, 
                                                            chapter10: true, 
                                                            chapter11: false, 
                                                            chatper12: false}}) 
                                                    }}
                                >Open Section</span>
                                <span className="openBtn" onClick={() => setOpenSection(prevState => {return {...prevState, chapter10: false}}) }>Close Section</span>
                            </div>
                        </div>
                        {openSection.chapter10 === true && chapter.map((post) => {
                            return <div className="post"> 
                                        <hr />
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
                                        <div> 
                                            <span className="openBtn" key={post.id}>
                                                <Link className="viewPost" to={{pathname: '/thepost/'+post.id}}> View Post</Link>
                                            </span>
                                        </div>
                                    <div className="postTextContainer"> {post.postText} </div>
                                    <h3>@{post.author.name}</h3>
                            </div>              
                        })}
                    </div>
                    <div className="HomeSection1">
                        <div className="sectionGroup">
                            <img className="topicImg" src={require("../assets/project-risk.jpg")} alt="Scope management"/>
                            <div className="btnGroup">
                                <h1>Topics in Project Risk Management?</h1>
                                <span className="openBtn" onClick={() => 
                                                    {chapterQuery("11"); 
                                                        setOpenSection(prevState => {return {...prevState, 
                                                            chapter5: false, 
                                                            chapter6: false, 
                                                            chapter7: false,                                                         
                                                            chapter8: false, 
                                                            chapter9: false, 
                                                            chapter10: false, 
                                                            chapter11: true, 
                                                            chatper12: false}}) 
                                                    }}
                                >Open Section</span>
                                <span className="openBtn" onClick={() => setOpenSection(prevState => {return {...prevState, chapter11: false}}) }>Close Section</span>
                            </div>
                        </div>
                        {openSection.chapter11 === true && chapter.map((post) => {
                            return <div className="post"> 
                                        <hr />
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
                                        <div> 
                                            <span className="openBtn" key={post.id}>
                                                <Link className="viewPost" to={{pathname: '/thepost/'+post.id}}> View Post</Link>
                                            </span>
                                        </div>
                                    <div className="postTextContainer"> {post.postText} </div>
                                    <h3>@{post.author.name}</h3>
                            </div>              
                        })}
                    </div>
                    <div className="HomeSection1">
                        <div className="sectionGroup">
                            <img className="topicImg" src={require("../assets/Its-important-to-stay-abreast-of-new-procurement-technologies.jpg")} alt="Scope management "/>
                            <div className="btnGroup">
                                <h1>Topics in Project Procurement Management?</h1>
                                <span className="openBtn" onClick={() => 
                                                    {chapterQuery("12"); 
                                                        setOpenSection(prevState => {return {...prevState, 
                                                            chapter12: true, 
                                                            chapter6: false, 
                                                            chapter7: false,                                                         
                                                            chapter8: false, 
                                                            chapter9: false, 
                                                            chapter10: false, 
                                                            chapter11: false, 
                                                            chatper5: false,
                                                        }});
                                                    }}
                                >Open Section</span>
                                <span className="openBtn" onClick={() => setOpenSection(prevState => {return {...prevState, chapter12: false}}) }>Close Section</span>
                            </div>
                        </div>
                        {openSection.chapter12 === true && chapter.map((post) => {
                            return <div className="post"> 
                                        <hr />
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
                                        <div> 
                                            <span className="openBtn" key={post.id}>
                                                <Link className="viewPost" to={{pathname: '/thepost/'+post.id}}> View Post</Link>
                                            </span>
                                        </div>
                                    <div className="postTextContainer"> {post.postText} </div>
                                    <h3>@{post.author.name}</h3>
                            </div>              
                        })}
                    </div>
                </div>
        </div>
    );
}

export default Home;
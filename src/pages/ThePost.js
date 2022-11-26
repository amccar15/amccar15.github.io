import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { auth, db } from '../firebase-config';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function ThePost({ isAuth }) {

    const { id } = useParams();

    const postsCollectionRef = collection(db, "posts");

    const [docDetails, setDocDetails] = useState([]);

    const [seeAuthorName, setAuthorName] = useState([]);

    const [seeAuthorID, setAuthorID] = useState([]);

    const [image, setImage] = useState(null);

    const storage = getStorage();

    const onImageChange = (e) => {
        const reader = new FileReader();
        let file = e.target.files[0];

        if (file) {
            reader.onload = () => {
                if(reader.readyState === 2) {
                    console.log(file);
                    setImage(file);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
        else {
            setImage(null);
        }
    }

    const uploadPhoto = () => {
        if(image != null) {
            const storageRef = ref(storage, "image/"+id);

            const uploadTask = uploadBytesResumable(storageRef, image);

            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is: " + progress + "% done");
                switch (snapshot.state) {
                    case 'paused':
                        console.log("Upload is paused");
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                }
            }, (error) => {
                alert("Image upload failed");
                console.log(error);
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log('File link at :', downloadURL);
                    const postDoc = doc(postsCollectionRef, id);
                    updateDoc(postDoc, {
                        imageExist: downloadURL,
                    });
                    getPost(id);
                });
            })
        }
    }

    useEffect(() => {
        getPost(id);
    }, []);

    const getPost = async (postID) => {
        const postDoc = doc(postsCollectionRef, postID);
        const docSnap = await getDoc(postDoc);
        setDocDetails(docSnap.data());

        if(docSnap.exists()) {
            setAuthorName(docSnap.data().author.name);                
            setAuthorID(docSnap.data().author.id);
        } else {
            console.log("Error");
        }        
    };

    return (
        <div className="thePost"> 
            <div className="postHeader">
                {isAuth && seeAuthorID === auth.currentUser.uid && (
                    <div>
                        <input type="file" accept="image/x-png, image/jpeg" onChange={(e) => onImageChange(e)}/>
                        <button onClick={() => uploadPhoto()}>
                            Add Image
                        </button>
                    </div>
                )}
                {docDetails.imageExist !== '' && (
                    <div>
                        <img className="headerImg" src={docDetails.imageExist} />
                        <div className="postHeadContainer">
                            <h1 className="postHeadTitle"> {docDetails.title} </h1>
                        </div>
                    </div>
                )}
                {docDetails.imageExist === '' && (
                    <div>
                        <h1 className="noPhotoTitle">{docDetails.title}</h1>
                    </div>
                )}
            </div>
            <hr />
            <div className="postTextContainer"> {docDetails.postText} </div>
                <h3> 
                    @{seeAuthorName}
                </h3>
            </div>
    );
}

export default ThePost;
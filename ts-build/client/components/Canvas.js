import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useEffect, useState } from 'react';
import Button from './Button';
import { CameraContainer, SnappedPhoto, Video, CanvasComp, PicButtonContainer, CaptionsInput, } from './styles/Camera.style';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
function Canvas() {
    const videoRef = useRef();
    const photoRef = useRef();
    const [hasPhoto, setHasPhoto] = useState(false);
    const [snappedPhoto, setSnappedPhoto] = useState(null);
    const [savedCaption, setSaveCaption] = useState('');
    const [captionInput, setCaptionInput] = useState('');
    const [writeCaption, setWriteCaption] = useState(false);
    const [previewCaption, setPreviewCaption] = useState(false);
    const getVideo = () => {
        navigator.mediaDevices
            .getUserMedia({ video: { width: 1920, height: 1080 } })
            .then((stream) => {
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        })
            .catch((err) => {
            console.error(err);
        });
    };
    const takePhoto = async () => {
        const width = 414;
        const height = width / (16 / 9);
        let video = videoRef.current;
        let photo = photoRef.current;
        photo.width = width;
        photo.height = height;
        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
        setHasPhoto(true);
        setSnappedPhoto(photo.toDataURL());
        console.log(snappedPhoto);
    };
    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');
        ctx.clearRect(0, 0, photo.width, photo.height);
        setHasPhoto(false);
    };
    const uploadPost = () => {
        console.log('file data ====>', snappedPhoto);
        const data = new FormData();
        // temp userID until current user is in React state
        const userID = 1;
        // @ts-ignore
        data.append('image', snappedPhoto); // image key to use in Postman
        data.append('caption', savedCaption);
        const server = 'http://localhost:3000';
        // Send reqest to backend - Single upload
        fetch(`${server}/api/post/${userID}`, {
            method: 'POST',
            body: data,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            },
        })
            .then((result) => {
            console.log('File sent successfully', result);
        })
            .catch((err) => {
            console.log('Something Went Wrong', err);
        });
    };
    const onChangeHandler = (e) => setCaptionInput((p) => e.target.value);
    const test = () => {
        if (savedCaption.length)
            setPreviewCaption(true);
    };
    useEffect(() => {
        getVideo();
    }, [videoRef]);
    return (_jsx(_Fragment, { children: _jsxs(CameraContainer, { children: [_jsx(Video, { ref: videoRef, hasPhoto: hasPhoto }), _jsxs(SnappedPhoto, { hasPhoto: hasPhoto, children: [_jsx(CanvasComp, { ref: photoRef }), previewCaption && (_jsx(_Fragment, { children: _jsx("p", { children: savedCaption }) })), _jsxs(PicButtonContainer, { children: [_jsx("button", { onClick: closePhoto, children: "Retake" }), _jsx("button", { onClick: () => {
                                        setWriteCaption((prev) => !prev);
                                        setCaptionInput('');
                                    }, children: writeCaption ? 'Cancel' : 'Add Caption' }), _jsx("button", { onClick: () => {
                                        uploadPost();
                                    }, children: "Post" })] }), writeCaption && (_jsxs(PicButtonContainer, { children: [_jsx(CaptionsInput, { type: 'text', onChange: (e) => {
                                        onChangeHandler(e);
                                        console.log(captionInput);
                                    } }), _jsx("button", { onClick: () => {
                                        setSaveCaption(captionInput);
                                        // setPreviewCaption((prev) => !prev);
                                        test();
                                    }, children: "Save Caption" }), _jsx("button", { onClick: () => {
                                        setSaveCaption('');
                                    }, children: "Delete Caption" })] }))] }), _jsx(Button, { icon: faCamera, onClickFunc: () => {
                        takePhoto();
                    } })] }) }));
}
export default Canvas;

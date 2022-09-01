import React, { useRef, useEffect, useState } from 'react';
import Button from './Button';
import {
    CameraContainer,
    SnappedPhoto,
    Video,
    CanvasComp,
    PicButtonContainer,
    CaptionsInput,
} from './styles/Camera.style';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function Canvas() {
    const videoRef = useRef<any>();
    const photoRef = useRef<any>();

    const [hasPhoto, setHasPhoto] = useState(false);
    const [snappedPhoto, setSnappedPhoto] = useState<any>(null);
    const [savedCaption, setSaveCaption] = useState('');
    const [captionInput, setCaptionInput] = useState('');
    const [writeCaption, setWriteCaption] = useState<boolean>(false);
    const [previewCaption, setPreviewCaption] = useState<boolean>(false);

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

    const onSubmitHandler = (e: any) => {
        console.log('file data ====>', snappedPhoto);
        e.preventDefault();

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

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
        setCaptionInput((p) => e.target.value);

    const test = () => {
        if (savedCaption.length) setPreviewCaption(true);
    };

    useEffect(() => {
        getVideo();
    }, [videoRef]);

    return (
        <>
            <CameraContainer>
                <Video ref={videoRef} hasPhoto={hasPhoto}></Video>
                <SnappedPhoto hasPhoto={hasPhoto}>
                    <CanvasComp ref={photoRef}></CanvasComp>
                    {previewCaption && (
                        <>
                            <p>{savedCaption}</p>
                        </>
                    )}
                    <PicButtonContainer>
                        <button onClick={closePhoto}>Retake</button>
                        <button
                            onClick={() => {
                                setWriteCaption((prev) => !prev);
                                setCaptionInput('');
                            }}
                        >
                            {writeCaption ? 'Cancel' : 'Add Caption'}
                        </button>

                        <button>Post</button>
                    </PicButtonContainer>
                    {writeCaption && (
                        <PicButtonContainer>
                            <CaptionsInput
                                type={'text'}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    onChangeHandler(e);
                                    console.log(captionInput);
                                }}
                            ></CaptionsInput>
                            <button
                                onClick={() => {
                                    setSaveCaption(captionInput);
                                    // setPreviewCaption((prev) => !prev);
                                    test();
                                }}
                            >
                                Save Caption
                            </button>
                            <button
                                onClick={() => {
                                    setSaveCaption('');
                                }}
                            >
                                Delete Caption
                            </button>
                        </PicButtonContainer>
                    )}
                </SnappedPhoto>
                <Button
                    icon={faCamera}
                    onClickFunc={() => {
                        takePhoto();
                    }}
                ></Button>
            </CameraContainer>
        </>
    );
}

export default Canvas;

import React, { useRef, useEffect, useState } from 'react';
import Button from './Button';
import { CameraContainer, SnappedPhoto, Video } from './styles/Camera.style';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

function Canvas() {
    const videoRef = useRef<any>();
    const photoRef = useRef<any>();

    const [hasPhoto, setHasPhoto] = useState(false);
    const [snappedPhoto, setSnappedPhoto] = useState<any>({ imageDataURL: null });

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

    const takePhoto = () => {
        const width = 414;
        const height = width / (16 / 9);

        let video = videoRef.current;
        let photo = photoRef.current;

        photo.width = width;
        photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0, 0, width, height);
        setHasPhoto(true);
        setSnappedPhoto(() => {
            console.log('PHOTO DATA URL', photo.toDataURL());
            {
                imageDataURL: photo.toDataURL();
            }
        });
    };

    const closePhoto = () => {
        let photo = photoRef.current;
        let ctx = photo.getContext('2d');

        ctx.clearRect(0, 0, photo.width, photo.height);

        setHasPhoto(false);
    };

    useEffect(() => {
        getVideo();
    }, [videoRef]);

    return (
        <>
            <CameraContainer>
                <Video ref={videoRef}></Video>
                <Button
                    icon={faCamera}
                    onClickFunc={() => {
                        takePhoto();
                    }}
                ></Button>
            </CameraContainer>
            <SnappedPhoto>
                <canvas ref={photoRef}></canvas>
                <button>CLOSE</button>
            </SnappedPhoto>
        </>
    );
}

export default Canvas;







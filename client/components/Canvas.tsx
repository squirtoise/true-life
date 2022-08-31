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

//************************************************************************** */

// navigator.mediaDevices.getUserMedia

// async function getMedia(constraints) {
//   let stream = null;

//   try {
//     stream = await navigator.mediaDevices.getUserMedia(constraints);
//     /* use the stream */
//   } catch (err) {
//     /* handle the error */
//   }
// }

// import React from "react";

// class Canvas extends React.Component {
//   constructor() {
//     super();

//     this.cameraNumber = 0;

//     this.state = {
//       imageDataURL: null,
//     };
//   }

//   initializeMedia = async () => {
//     this.setState({ imageDataURL: null });

//     if (!("mediaDevices" in navigator)) {
//       navigator.mediaDevices = {};
//     }

//     if (!("getUserMedia" in navigator.mediaDevices)) {
//       navigator.mediaDevices.getUserMedia = function (constraints) {
//         var getUserMedia =
//           navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

//         if (!getUserMedia) {
//           return Promise.reject(new Error("getUserMedia Not Implemented"));
//         }

//         return new Promise((resolve, reject) => {
//           getUserMedia.call(navigator, constraints, resolve, reject);
//         });
//       };
//     }

//     //Get the details of video inputs of the device
//     const videoInputs = await this.getListOfVideoInputs();

//     //The device has a camera
//     if (videoInputs.length) {
//       navigator.mediaDevices
//         .getUserMedia({
//           video: {
//             deviceId: {
//               exact: videoInputs[this.cameraNumber].deviceId,
//             },
//           },
//         })
//         .then((stream) => {
//           this.player.srcObject = stream;
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } else {
//       alert("The device does not have a camera");
//     }
//   };

//   capturePicture = () => {
//     var canvas = document.createElement("canvas");
//     canvas.width = this.player.videoWidth;
//     canvas.height = this.player.videoHeight;
//     var contex = canvas.getContext("2d");
//     contex.drawImage(this.player, 0, 0, canvas.width, canvas.height);
//     this.player.srcObject.getVideoTracks().forEach((track) => {
//       track.stop();
//     });

//     console.log(canvas.toDataURL());
//     this.setState({ imageDataURL: canvas.toDataURL() });
//   };

//   switchCamera = async () => {
//     const listOfVideoInputs = await this.getListOfVideoInputs();

//     // The device has more than one camera
//     if (listOfVideoInputs.length > 1) {
//       if (this.player.srcObject) {
//         this.player.srcObject.getVideoTracks().forEach((track) => {
//           track.stop();
//         });
//       }

//       // switch to second camera
//       if (this.cameraNumber === 0) {
//         this.cameraNumber = 1;
//       }
//       // switch to first camera
//       else if (this.cameraNumber === 1) {
//         this.cameraNumber = 0;
//       }

//       // Restart based on camera input
//       this.initializeMedia();
//     } else if (listOfVideoInputs.length === 1) {
//       alert("The device has only one camera");
//     } else {
//       alert("The device does not have a camera");
//     }
//   };

//   getListOfVideoInputs = async () => {
//     // Get the details of audio and video output of the device
//     const enumerateDevices = await navigator.mediaDevices.enumerateDevices();

//     //Filter video outputs (for devices with multiple cameras)
//     return enumerateDevices.filter((device) => device.kind === "videoinput");
//   };

//   render() {
//     const playerORImage = Boolean(this.state.imageDataURL) ? (
//       <img src={this.state.imageDataURL} alt="cameraPic" />
//     ) : (
//       <video
//         ref={(refrence) => {
//           this.player = refrence;
//         }}
//         autoPlay
//       ></video>
//     );

//     return (
//       <div className="App">
//         {playerORImage}
//         <button onClick={this.initializeMedia}>Take Photo</button>
//         <button onClick={this.capturePicture}>Capture</button>
//         <button onClick={this.switchCamera}>Switch</button>
//       </div>
//     );
//   }
// }

// export default Canvas;

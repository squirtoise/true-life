import styled from 'styled-components';
import { determinedColor } from './Navbar.style';
export const CameraContainer = styled.div<any>`
    position: relative;
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: black;
`;

export const SnappedPhoto = styled.div<any>`
    position: relative;
    color: white;
    display: ${(props) => (props.hasPhoto ? 'flex' : 'none')};
    top: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
`;

interface VideoProps {
    ref: any;
    hasPhoto?: boolean;
}
export const Video = styled.video<VideoProps>`
    display: ${(props) => (props.hasPhoto ? 'none' : 'block')};
    width: 100%;
    max-width: 414px;
    background-color: black;
    height: auto;
`;
export const CanvasComp = styled.canvas<any>`
    width: 100%;
    max-width: 414px;
    height: auto;
`;

export const PicButtonContainer = styled.div<any>`
    display: ${(props) => (props.hasPhoto ? 'flex' : 'none')};
    width: 100%;
    background-color: black;
    justify-content: space-evenly;
    align-items: center;
`;

export const CaptionsInput = styled.input<any>`
    width: 80%;
    /* margin: 2px; */
    border: 2px solid #e1e5ee;
    color: white;
    outline: none;
    border-radius: 0.5rem;
    padding: 1.25rem;
    background: none;

    :hover {
        /* border-color: #adffff; */
        border-color: ${determinedColor};
    }

    :focus {
        border-color: #18ffff;
    }
`;

export const TakePhotoButton = styled.div<any>`
    position: relative;
    min-width: 25px;
    min-height: 25px;
    width: auto;
    height: auto;
    max-height: 80px;
    max-width: 80px;
    border-color: black;
    color: #d47b7b;
    background-color: #a22d2d;
    border: solid;
    border-radius: 50%;
    margin: 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    :hover {
        border: solid;
        color: #f1baba;
        background-color: #d47b7b;
    }
`;

export const SnapBtnContainer = styled.div`
    background: black;
    width: auto;
    height: 7vh;
    max-height: auto;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PhotoOptionsBtns = styled.button`
    border: 2px solid #e1e5ee;
    color: white;
    outline: none;
    border-radius: 0.5rem;
    padding: 1rem;
    background: none;
    margin: 0.5rem;

    :hover {
        /* border-color: #adffff; */
        border-color: ${determinedColor};
    }

    :focus {
        border-color: #18ffff;
    }
`;

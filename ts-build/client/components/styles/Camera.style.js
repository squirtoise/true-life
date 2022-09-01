import styled from 'styled-components';
export const CameraContainer = styled.div `
    position: relative;
    display: flex;
    /* display: ${(props) => (props.hasPhoto ? 'none' : 'flex')}; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    /* z-index: 1; */
`;
export const SnappedPhoto = styled.div `
    position: relative;
    color: white;
    display: ${(props) => (props.hasPhoto ? 'flex' : 'none')};
    top: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* width: 80vw;
    height: 80vh; */
    background-color: rgba(0, 0, 0, 0.9);
`;
export const Video = styled.video `
    display: ${(props) => (props.hasPhoto ? 'none' : 'block')};
    width: 100%;
    max-width: 100%;
    height: auto;
`;
export const CanvasComp = styled.canvas `
    width: 100%;
    max-width: 100%;
    height: auto;
`;
export const PicButtonContainer = styled.div `
    display: flex;
    width: 100%;

    justify-content: space-evenly;
`;
export const CaptionsInput = styled.input `
    width: 90%;
    margin: 2px;
`;

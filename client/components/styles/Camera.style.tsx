import styled from 'styled-components';

export const CameraContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80vw;
    height: auto;
`;

export const SnappedPhoto = styled.div`
    position: fixed;
    top: 0;
    left: 100%;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
`;

interface VideoProps {
    ref: any;
}
export const Video = styled.video<VideoProps>`
    width: 100%;
    max-width: 100%;
    height: auto;
`;

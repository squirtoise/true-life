import styled from 'styled-components';

export const CameraContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

export const SnappedPhoto = styled.div<any>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 0;
`;

interface VideoProps {
    ref: any;
}
export const Video = styled.video<VideoProps>`
    width: 100%;
    max-width: 100%;
    height: auto;
`;

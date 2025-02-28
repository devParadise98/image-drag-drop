import styled from 'styled-components';

export const ImageWrapper = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  display: flex;
  height: 120px;
  justify-content: center;
  position: relative;
  width: 120px;
  .image-overlay {
    display: none;
  }
  &:hover {
    .image-overlay {
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      display: flex;
      height: 100%;
      justify-content: center;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }
  }
`;

export const Image = styled.img`
  border: 3px solid #ffffff;
  border-radius: 5px;
  height: 100%;
  object-fit: contain;
  width: 100%;
`;

export const DragHandle = styled.div`
  bottom: 0;
  background-color: red;
  border-radius: 3px;
  padding: 0.3rem;
  position: absolute;
  right: 0;
  cursor: grab;
  z-index: 2;
  &:active {
    cursor: grabbing; /* Cambia el cursor a "grabbing" cuando se está arrastrando */
  }
`;
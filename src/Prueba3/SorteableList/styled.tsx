import styled from 'styled-components';

export const ImageWrapper = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.07);
  cursor: pointer;
  display: flex;
  height: 60px;
  justify-content: center;
  position: relative;
  width: 60px;
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
  border: 3px solid #FFFFFF;
  border-radius: 5px;
  height: 100%;
  object-fit: contain;
  width: 100%;
`;

export const ButtonDrag = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: row;
  height: 25px;
  justify-content: center;
  position: absolute;
  right: 0;
  bottom: 0;
  width: 25px;
  z-index: 2;
`;

export const ButtonTrash = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: row;
  height: 25px;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 0;
  width: 25px;
  z-index: 2;
`;

export const IconView = styled.div`
  align-items: center;
`;

export const ContentWrapper = styled.div`
  padding-top: 20px;
  width: 400px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0px 30px 31px;
  button {
    box-shadow: 0px 6px 15px rgba(54, 116, 246, 0.25);
    border-radius: 5px;
    height: 35px;
    width: 150px;
  }
  & .b-button-accept {
    background-color: red;
  }
  & .b-button-cancel {
    background-color:red !important;
  }
`;

export const WrapperFileList = styled.div`
  display: flex;
  flex: 5;
  gap: 10px;
  max-height: 80px;
  overflow-x: auto;
  width: 100%;
`;
import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: #f0f2f5;
  box-sizing: border-box;
  overflow: hidden;
`;

export const ImagesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  overflow-y: auto;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 60px;
  height: 60px;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease;
  line-height: 1;

  &:hover {
    background-color: #0056b3;
  }
`;

export const UploadInput = styled.input`
  display: none;
`;

export const DeleteButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 0;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border: none;
  background-color: #ff4d4f;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d9363e;
  }
`;

export const SelectCircle = styled.div`
  position: absolute;
  top: 10px; /* отступ от верхнего края */
  right: 10px; /* отступ от правого края */
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #007bff;
  background-color: ${(props) => (props.isSelected ? '#007bff' : 'transparent')};
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => (props.isSelected ? '#0056b3' : '#dceaff')};
  }
`;


export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  font-weight: bold;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color:
  }
`;

export const FullImage = styled.img`
  max-width: 90vw;
  max-height: 90vh;
  min-width: 300px;
  min-height: 300px;
  width: auto;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  background-color: #f0f0f0;
`;

export const ListContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  max-height: 80vh;
  overflow-y: auto;
`;


export const ListItem = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: ${(props) => (props.selected ? '#e0f7ff' : '#fff')};
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 10px;
`;

export const ListDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  span {
    font-size: 14px;
  }
  div:first-child {
    font-weight: bold;
  }
  div:last-child {
    width: 30%;
    color: #888;
  }
`;

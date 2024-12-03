import React, { useState, useRef } from 'react';
import {
  GalleryContainer,
  ImagesGrid,
  ImageContainer,
  Image,
  ButtonContainer,
  Button,
  DeleteButton,
  UploadInput,
  SelectCircle,
  Modal,
  ModalContent,
  CloseButton,
  FullImage,
  ListContainer,
  ListItem,
  Thumbnail,
  ListDetails,
} from './StyledComponents';

const ImageGallery = () => {
  const [imageData, setImageData] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [viewMode, setViewMode] = useState('grid');
  const [sortType, setSortType] = useState('name');
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImageData = files.map((file) => ({
      src: URL.createObjectURL(file),
      name: file.name,
      date: new Date().toISOString(),
    }));
    setImageData((prev) => [...prev, ...newImageData]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const toggleImageSelection = (index) => {
    setSelectedImages((prevSelected) =>
      prevSelected.includes(index)
        ? prevSelected.filter((i) => i !== index)
        : [...prevSelected, index]
    );
  };

  const handleDeleteSelected = () => {
    setImageData((prevImages) =>
      prevImages.filter((_, index) => !selectedImages.includes(index))
    );
    setSelectedImages([]);
  };

  const openImage = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const getSortedImages = () => {
    return [...imageData].sort((a, b) => {
      if (sortType === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortType === 'date') {
        return new Date(a.date) - new Date(b.date);
      }
      return 0;
    });
  };

  const sortedImages = getSortedImages();

  return (
    <GalleryContainer>
      <h1>Image Gallery</h1>

      <ButtonContainer>
        <Button onClick={() => setViewMode('grid')}>Grid</Button>
        <Button onClick={() => setViewMode('list')}>List</Button>
        <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
          <option value="name">Sort by Name</option>
          <option value="date">Sort by Date</option>
        </select>
        <Button onClick={handleButtonClick}>Add</Button>
        <UploadInput
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
          ref={fileInputRef}
        />
        {selectedImages.length > 0 && (
          <DeleteButton onClick={handleDeleteSelected}>Удалить</DeleteButton>
        )}
      </ButtonContainer>

      <ImagesGrid style={{ display: viewMode === 'grid' ? 'grid' : 'none' }}>
        {sortedImages.map((image, index) => (
          <ImageContainer key={index} onClick={() => openImage(image.src)}>
            <Image src={image.src} alt={image.name} />
            <SelectCircle
              onClick={(e) => {
                e.stopPropagation();
                toggleImageSelection(index);
              }}
              isSelected={selectedImages.includes(index)}
            />
          </ImageContainer>
        ))}
      </ImagesGrid>

      {viewMode === 'list' && (
        <ListContainer>
          {sortedImages.map((image, index) => (
            <ListItem
              key={index}
              onClick={() => openImage(image.src)}
              selected={selectedImages.includes(index)}
            >
              <Thumbnail src={image.src} alt={image.name} />
              <ListDetails>
                <div>{image.name}</div>
                <div>{new Date(image.date).toLocaleString()}</div>
              </ListDetails>
              <SelectCircle
                onClick={(e) => {
                  e.stopPropagation();
                  toggleImageSelection(index);
                }}
                isSelected={selectedImages.includes(index)}
              />
            </ListItem>
          ))}
        </ListContainer>
      )}

      {/* Modal for full-size image */}
      {selectedImage && (
        <Modal>
          <ModalContent>
            <CloseButton onClick={closeModal}>×</CloseButton>
            <FullImage src={selectedImage} alt="Full size" />
          </ModalContent>
        </Modal>
      )}
    </GalleryContainer>
  );
};

export default ImageGallery;

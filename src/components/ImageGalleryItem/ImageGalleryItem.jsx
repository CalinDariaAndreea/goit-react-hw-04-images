import '../styles.css';

export const ImageGalleryItem = ({ imageUrl, largeImageUrl, onClick }) => {
    return (
      <li className="imageGalleryItem">
        <img
          src={imageUrl}
          alt=""
          data-large={largeImageUrl}
          className="imageGalleryItem-image"
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
      </li>
    );
  };
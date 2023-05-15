// import { ModalCont } from 'components/Modal';
import { GalleryItem } from './Styled';

export function ImageGalleryItem({ id, webformatURL, largeImageURL, onClose }) {
  return (
    <GalleryItem onClick={onClose}>
      <img src={webformatURL} alt={`${id}`} />
    </GalleryItem>
  );
}

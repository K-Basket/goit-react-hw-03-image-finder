import { GalleryItem } from './Styled';

export function ImageGalleryItem({ onClose }) {
  return (
    <GalleryItem onClick={onClose}>
      <img src="" alt="" />
    </GalleryItem>
  );
}

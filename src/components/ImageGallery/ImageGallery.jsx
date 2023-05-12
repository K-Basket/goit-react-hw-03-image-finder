import { Gallery } from './Styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';

export function ImageGallery({ onClose }) {
  return (
    <Gallery>
      <ImageGalleryItem onClose={onClose} />
      <ImageGalleryItem onClose={onClose} />
      <ImageGalleryItem onClose={onClose} />
      <ImageGalleryItem onClose={onClose} />
      <ImageGalleryItem onClose={onClose} />
      <ImageGalleryItem onClose={onClose} />
      <ImageGalleryItem onClose={onClose} />
      <ImageGalleryItem onClose={onClose} />
      <ImageGalleryItem onClose={onClose} />
    </Gallery>
  );
}

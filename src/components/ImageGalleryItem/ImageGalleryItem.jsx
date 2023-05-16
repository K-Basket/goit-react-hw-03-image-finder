// import { ModalCont } from 'components/Modal';
import React, { Component } from 'react';
import { GalleryItem } from './Styled';

export class ImageGalleryItem extends Component {
  state = {
    largeImageURL: '',
  };

  // функция передает largeImageURL в state App.jsx
  handleLargeImageUrl = evt => {
    this.props.onLargeImailURL(evt.currentTarget.dataset.url);
  };

  render() {
    const { id, webformatURL, largeImageURL, onClose } = this.props;

    return (
      <GalleryItem onClick={onClose}>
        <img
          onClick={this.handleLargeImageUrl}
          src={webformatURL}
          alt={id}
          data-url={largeImageURL}
        />
      </GalleryItem>
    );
  }
}

// export function ImageGalleryItem({ id, webformatURL, largeImageURL, onClose }) {
//   return (
//     <GalleryItem onClick={onClose}>
//       <img
//         // onClick={evt => console.log(evt.currentTarget.dataset.url)}
//         src={webformatURL}
//         alt={id}
//         data-url={largeImageURL}
//       />
//     </GalleryItem>
//   );
// }

// export function ImageGalleryItem({ id, webformatURL, largeImageURL, onClose }) {
//   return (
//     <GalleryItem onClick={onClose}>
//       <img
//         // onClick={evt => console.log(evt.currentTarget.dataset.url)}
//         src={webformatURL}
//         alt={id}
//         data-url={largeImageURL}
//       />
//     </GalleryItem>
//   );
// }

// export function ImageGalleryItem({ id, webformatURL, largeImageURL, onClose }) {
//   return (
//     <GalleryItem onClick={onClose}>
//       <img
//         // onClick={evt => console.log(evt.currentTarget.dataset.url)}
//         src={webformatURL}
//         alt={id}
//         data-url={largeImageURL}
//       />
//     </GalleryItem>
//   );
// }

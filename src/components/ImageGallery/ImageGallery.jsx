import React, { Children, Component } from 'react';
import Notiflix from 'notiflix';
import { Gallery, Loading } from './Styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Loader } from '../Loader/Loader';

export class ImageGallery extends Component {
  state = {
    dataGallery: [],
    loader: false,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchData !== this.props.searchData) {
      this.setState({ status: 'pending' });
      this.setState({ dataGallery: [] }); // очищает разметку, если search не совпадает с предыдущим

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?key=7971179-456b552bdb2500af743f56cc5&q=${this.props.searchData}&image_type=photo&per_page=10`
        )
          .then(res => res.json())
          .then(data => {
            if (!data.totalHits) {
              this.setState({ status: 'rejected' });
              Notiflix.Notify.info('Sorry, there are no such images');

              return;
            }

            this.setState({ dataGallery: data.hits, status: 'resolved' });
          })
          .catch(error =>
            this.setState(console.log(error), { satus: 'rejected' })
          );
      }, 1500);
    }
  }

  render() {
    if (this.state.status === 'resolved') {
      return (
        <Gallery>
          <>
            {this.state.dataGallery.map(
              ({ id, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  onClose={this.props.onClose}
                />
              )
            )}
          </>
        </Gallery>
      );
    }

    if (this.state.status === 'idle') {
      return (
        <Loading>
          <p>Введите данные для поиска</p>
        </Loading>
      );
    }

    if (this.state.status === 'pending') {
      return (
        <Loading>
          <Loader />
        </Loading>
      );
    }

    if (this.state.status === 'rejected') {
      return (
        <Loading>
          <p>{`Изображения "${this.props.searchData}" отсутствуют`}</p>
        </Loading>
      );
    }
  }
}

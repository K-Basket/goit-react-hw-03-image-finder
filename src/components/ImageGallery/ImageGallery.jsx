import React, { Component } from 'react';
import Notiflix from 'notiflix';
import { Gallery, Loading } from './Styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';

export class ImageGallery extends Component {
  state = {
    dataGallery: [],
    loader: false,
    page: 1,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchData !== this.props.searchData) {
      this.setState({ status: 'pending', dataGallery: [], page: 1 });

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?key=7971179-456b552bdb2500af743f56cc5&q=${this.props.searchData}&image_type=photo&per_page=12&page=${this.state.page}`
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
      }, 1000);
    }

    if (prevState.page !== this.state.page) {
      // this.setState({ status: 'pending' });
      this.setState({ loader: true });

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?key=7971179-456b552bdb2500af743f56cc5&q=${this.props.searchData}&image_type=photo&per_page=12&page=${this.state.page}`
        )
          .then(res => res.json())
          .then(data => {
            this.setState(prevState => ({
              dataGallery: [...prevState.dataGallery, ...data.hits],
              loader: false,
            }));
          })
          .catch(error =>
            this.setState(console.log(error), { satus: 'rejected' })
          );
      }, 1000);
    }
  }

  addMoreload = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    // console.log('statePage', this.state.page); // ====== temp
    console.log('loader', this.state.loader); // ====== temp

    const { status } = this.state;

    if (status === 'resolved') {
      return (
        <>
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

          {this.state.loader && (
            <Loading>
              <Loader />
            </Loading>
          )}
          <Button onMoreLoad={this.addMoreload} />
        </>
      );
    }

    if (status === 'idle') {
      return (
        <Loading>
          <p>Введите данные для поиска</p>
        </Loading>
      );
    }

    if (status === 'pending') {
      return (
        <Loading>
          <Loader />
        </Loading>
      );
    }

    if (status === 'rejected') {
      return (
        <Loading>
          <p>{`Изображения "${this.props.searchData}" отсутствуют`}</p>
        </Loading>
      );
    }
  }
}

import React, { Children, Component } from 'react';
import { Gallery, Loading } from './Styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Loader } from '../Loader/Loader';

export class ImageGallery extends Component {
  // onClose = this.props.onClose;
  // searchData = this.props.searchData;

  state = {
    dataGallery: [],
    loader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    // prevProps.searchData - предыдущий рендер поисвка, this.props.searchData - текущий рендер поиска
    // если изменения в поиске были, значит снова фетчим
    if (prevProps.searchData !== this.props.searchData) {
      this.setState({ loader: true });
      this.setState({ dataGallery: [] }); // очищает разметку, если search не совпадает с предыдущим

      setTimeout(() => {
        fetch(
          `https://pixabay.com/api/?key=7971179-456b552bdb2500af743f56cc5&q=${this.props.searchData}&image_type=photo&per_page=10`
        )
          .then(res => res.json())
          .then(data => {
            // console.log('data', data.hits);
            this.setState({ dataGallery: data.hits });
            // this.props.onDataGallery(data);
          })
          .finally(() => this.setState({ loader: false }));
      }, 1500);
    }
  }

  render() {
    return (
      <>
        <Gallery>
          {this.state.dataGallery && (
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
          )}
          <div>{this.props.children}</div>
        </Gallery>

        <Loading>
          {this.state.dataGallery.length === 0 && !this.state.loader && (
            <p>введите данные для поиска</p>
          )}
          {this.state.loader && <Loader />}
        </Loading>
      </>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';
import { Gallery, Loading } from './Styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { getImages } from '../Api/api';

export class ImageGallery extends Component {
  state = {
    dataGallery: [],
    loader: false,
    page: 1,
    status: 'idle',
  };

  // static propTypes = {
  //   searchData: PropTypes.string.isRequired,
  //   onLargeImailURL: PropTypes.func.isRequired,
  // };

  // async componentDidUpdate(prevProps, prevState) {
  //   const data = await getImages(this.props.searchData, this.state.page);

  //   console.log('getImages', data);

  //   try {
  //     if (prevProps.searchData !== this.props.searchData) {
  //       this.setState({ status: 'pending', dataGallery: [], page: 1 });

  //       if (!data.totalHits) {
  //         this.setState({ status: 'rejected' });
  //         Notiflix.Notify.info('Sorry, there are no such images');

  //         return;
  //       }

  //       this.setState({ dataGallery: data.hits, status: 'resolved' });
  //     }

  //     if (prevState.page !== this.state.page) {
  //       this.setState({ loader: true });

  //       this.setState(prevState => ({
  //         dataGallery: [...prevState.dataGallery, ...data.hits],
  //         loader: false,
  //       }));
  //     }
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // }

  // addMoreload = () => {
  //   this.setState(prevState => ({ page: prevState.page + 1 }));
  // };

  render() {
    return (
      <>
        <Gallery>
          <>{this.props.children}</>
        </Gallery>
      </>
    );

    // const { status, loader, dataGallery } = this.state;
    // if (status === 'resolved') {
    //   return (
    //     <>
    //       <Gallery>
    //         <>
    //           {this.props.children}
    //           {/* {dataGallery.map(({ id, webformatURL, largeImageURL }) => (
    //             <ImageGalleryItem
    //               key={id}
    //               webformatURL={webformatURL}
    //               largeImageURL={largeImageURL}
    //               onClose={this.props.onClose}
    //               onLargeImailURL={this.props.onLargeImailURL}
    //             />
    //           ))} */}
    //         </>
    //   </Gallery>
    // {loader && (
    //   <Loading>
    //     <Loader />
    //   </Loading>
    // )}
    // <Button onMoreLoad={this.addMoreload} />
    // </>
    //   );
    // }
    // if (status === 'idle') {
    //   return (
    //     <Loading>
    //       <p>Введіть дані для пошуку</p>
    //     </Loading>
    //   );
    // }
    // if (status === 'pending') {
    //   return (
    //     <Loading>
    //       <Loader />
    //     </Loading>
    //   );
    // }
    // if (status === 'rejected') {
    //   return (
    //     <Loading>
    //       <p>{`Зображення "${this.props.searchData}" відсутні`}</p>
    //     </Loading>
    //   );
    // }
  }
}

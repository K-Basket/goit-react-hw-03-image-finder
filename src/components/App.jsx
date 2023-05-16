import React, { Component } from 'react';
import { Main } from './Styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';
// import { Button } from './Button';
// import { ImageGalleryItem } from './ImageGalleryItem';
// import { Loader } from './Loader';

export class App extends Component {
  state = {
    showModal: false,
    searchData: '',
    largeImageURL: '',
  };

  componentDidMount() {
    // this.setState({ loading: true });
    // fetch(
    //   'https://pixabay.com/api/?key=7971179-456b552bdb2500af743f56cc5&q=yellow+flowers&image_type=photo'
    // )
    //   .then(res => res.json())
    //   .then(data => {
    //     return this.setState({ photo: data.hits[0].id });
    //   })
    //   .finally(() => this.setState({ loading: false }));
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));

    // this.setState({ largeImageURL: evt.target.dataset.url });
    // if (!this.state.largeImageURL) {
    //   this.setState({ largeImageURL: evt.target.dataset.url });
    // }

    // console.log(evt.target);
    // console.log(evt.target.src);
    // console.log(evt.target.dataset.url);
  };

  // метод для получения данных state.search из формы
  handleFormSubmit = data => {
    // console.log('data-Search', data);

    this.setState({ searchData: data.search });
    // this.setState({ loading: true });
  };

  handleLargeImageURL = url => {
    // console.log('нужный URL', url);

    this.setState({ largeImageURL: url });
  };

  render() {
    // console.log('urlFromStateApp', this.state.largeImageURL);

    // console.log('dataGallery:', this.state.dataGallery);
    // console.log(this.state.dataGallery.length);
    // console.log('largeImageURL', this.state.showModal);

    return (
      <Main>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery
          onClose={this.toggleModal}
          searchData={this.state.searchData}
          onLargeImailURL={this.handleLargeImageURL}
        ></ImageGallery>

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.largeImageURL} alt={this.state.searchData} />
          </Modal>
        )}
      </Main>
    );
  }
}

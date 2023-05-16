import React, { Component } from 'react';
import { Main } from './Styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    showModal: false,
    searchData: '',
    largeImageURL: '',
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  handleFormSubmit = data => {
    this.setState({ searchData: data.search });
  };

  handleLargeImageURL = url => {
    this.setState({ largeImageURL: url });
  };

  render() {
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

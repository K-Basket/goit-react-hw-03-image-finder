import React, { Component } from 'react';
import { Main } from './Styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';
import { Button } from './Button';
import { ImageGalleryItem } from './ImageGalleryItem';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };

  formSabmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <Main>
        <Searchbar onSabmitData={this.formSabmitHandler} />
        <ImageGallery onClose={this.toggleModal} />
        <Button />
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            {/* <div>Modal window</div> */}
            <ImageGalleryItem />
          </Modal>
        )}
      </Main>
    );
  }
}

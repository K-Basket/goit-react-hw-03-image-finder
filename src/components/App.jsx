import React, { Component } from 'react';
import { Main } from './Styled';
import { Searchbar } from './Searchbar';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';
import { Button } from './Button';
import { ImageGalleryItem } from './ImageGalleryItem';
// import { Loader } from './Loader';

export class App extends Component {
  state = {
    showModal: false,
    searchData: '',
    // loader: false,
    // dataGallery: [],
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
  };

  // метод для получения данных state.search из формы
  handleFormSubmit = data => {
    // console.log('data-Search', data);

    this.setState({ searchData: data.search });
    // this.setState({ loading: true });
  };

  // ==============================================================
  // handleDataGallery = data => {
  //   this.setState({ dataGallery: data.hits });
  // };

  // ==============================================================

  render() {
    // console.log('dataGallery:', this.state.dataGallery);
    // console.log(this.state.dataGallery.length);

    return (
      <Main>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {/* {this.state.loading && <Loader />} */}

        <ImageGallery
          onDataGallery={this.handleDataGallery}
          onClose={this.toggleModal}
          searchData={this.state.searchData}
        >
          {/* {this.state.dataGallery.length === 0 && !this.state.loading && (
            <p>введите данные для поиска</p>
          )} */}
          {/* {!this.state.loading && <p>введите данные для поиска</p>}

          {this.state.loading && <Loader />} */}

          {/* {this.state.loading ? <Loader /> : <p>введите данные для поиска</p>} */}
        </ImageGallery>

        <Button />

        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <div>Modal window</div>
            <ImageGalleryItem />
          </Modal>
        )}
      </Main>
    );
  }
}

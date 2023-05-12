import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalCont } from './Styled';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Backdrop onClick={this.handleBackdropClick}>
        <ModalCont>
          {this.props.children}
          {/* <img src="" alt="" /> */}
        </ModalCont>
      </Backdrop>,
      modalRoot
    );
  }
}

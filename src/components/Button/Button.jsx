// import React, { Component } from 'react';
import { Btn } from './Styled';

export function Button({ onMoreLoad }) {
  return (
    <Btn onClick={onMoreLoad} type="button">
      Load more
    </Btn>
  );
}

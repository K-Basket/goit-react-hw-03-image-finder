import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Header, Form, Button } from './Styled';
import { ReactComponent as SearchIcon } from '../img/search-solid.svg';

export class Searchbar extends Component {
  state = {
    search: '',
  };

  // 2. метод записывает в state значение, которое вводим в поле input
  handleInputChange = evt => {
    console.log('target', evt.currentTarget.value);
    this.setState({ search: evt.currentTarget.value });
  };

  // onSubmit = this.props.onSubmitData;

  // handleChange = evt => {
  //   console.log(c);
  //   // this.setState({ search: evt.currenntTarget.search });
  // };

  handleSubmit = evt => {
    evt.preventDefault();

    console.log(this.state);
    this.props.onSubmitData(this.state);
    // this.setState({search: ''})
  };

  render() {
    console.log('Search', this.state.search);

    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <SearchIcon width="13" height="13" />
          </Button>

          <input
            // className="input"
            type="text"
            name="search"
            // 1. в value записываем данные из state ------------------ temp
            value={this.state.search}
            // 3. onChange при каждом вводе в поле input будет вызывать метод handleInputChange, который будет записывать вводимое в State
            onChange={this.handleInputChange}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}

// export function Searchbar({ onSubmit }) {
//   return (
//     <Header>
//       <Form>
//         <Button type="submit">
//           <SearchIcon width="13" height="13" />
//         </Button>

//         <input
//           className="input"
//           type="text"
//           name="search"
//           // value={}
//           // autocomplete="off"
//           // autofocus
//           placeholder="Search images and photos"
//         />
//       </Form>
//     </Header>
//   );
// }

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Header, Form, Button } from './Styled';
import { ReactComponent as SearchIcon } from '../img/search-solid.svg';

export class Searchbar extends Component {
  state = {
    search: '123',
  };

  // метод записывает значение input в state
  handleInputChange = evt => {
    // console.log('target', evt.currentTarget.value);
    this.setState({ search: evt.currentTarget.value });
  };

  // onSubmit = this.props.onSubmitData;

  // handleChange = evt => {
  //   console.log(c);
  //   // this.setState({ search: evt.currenntTarget.search });
  // };

  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   this.onSubmit(this.state);
  //   // this.setState({search: ''})
  // };

  render() {
    console.log('Search', this.state.search);

    return (
      <Header>
        <Form>
          <Button type="submit">
            <SearchIcon width="13" height="13" />
          </Button>

          <input
            // className="input"
            type="text"
            name="search"
            value={this.state.search}
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

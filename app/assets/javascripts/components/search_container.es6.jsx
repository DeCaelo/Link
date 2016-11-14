class SearchContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { term: '', posts: [], users: [] };
  }

  search(term) {
    this.setState({ term });

    $.ajax({
      url: `/api/autocomplete.json/?term=${term}`,
      method: 'GET',
      success: (data) => { this.setState({
        posts: data.posts,
        users: data.users
      });}
  }

  render () {
    return (
      <div>
        <SearchBar
          term={this.state.term}
          onSearchTermChange={(term) => {this.search(term)}}
        />
        <SearchResultsList
          term={this.state.term}
          posts={this.state.posts}
          users={this.state.users}
        />
      </div>
      );
  }
}


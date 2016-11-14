class SearchContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { term: '', posts: [], users: [] };
  }

  search(term) {
    this.setState({ term });

    $.ajax({
      url: `/autocomplete.json/?term=${term}`,
      method: 'GET',
      success: (data) => { console.log(data) }
    });
  }

  render () {
    return (
      <div>
        <SearchBar
          term={this.state.term}
          onSearchTermChange={(term) => {this.search(term)}}
        />
        <SearchResultsList />
      </div>
      );
  }
}


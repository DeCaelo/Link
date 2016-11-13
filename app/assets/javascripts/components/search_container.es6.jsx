class SearchContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = { term: '', posts: [], users: [] };
  }

  render () {
    return (
      <div>
        <SearchBar term={this.state.term} />
        <SearchResultsList />
      </div>
      );
  }
}


class SearchResultsList extends React.Component {
  render () {
    return (
      <ul className="dropdown-menu" id="autocomplete-items">
       <SearchPostListItem />
       <SearchUserListItem />
      </ul>
    );
  }
}


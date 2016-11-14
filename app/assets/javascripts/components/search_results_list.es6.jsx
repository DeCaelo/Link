class SearchResultsList extends React.Component {
  render () {
    return (
       <div className="dropdown">
        <ul className="dropdown-menu navbar-wagon-dropdown-menu" id="autocomplete-items">
          <li>
            <a href=""><span className="glyphicon glyphicon-search"></span> Search for <strong>{this.props.term}</strong>
            </a>
          </li>
          <li><h4 className="autocomplete-heading">Posts</h4></li>
          {this.renderPosts()}
          <li><h4 className="autocomplete-heading">People</h4></li>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }

 renderPosts() {
   return this.props.posts.slice(0, 3).map((post) => {
      return <SearchPostListItem key={post.id} post={post} />
    });
  }

  renderUsers() {
    return this.props.users.slice(0, 3).map((user) => {
      return <SearchUserListItem key={user.id} user={user} />
    });
  }
}


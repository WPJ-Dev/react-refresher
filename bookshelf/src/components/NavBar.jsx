import SearchBar from "./SearchBar";

function NavBar({ onSearch }) {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          BookShelf
        </a>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
}

export default NavBar;

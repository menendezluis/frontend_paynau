import "./App.css";
import PostList from "./components/PostList";
import ControlFilter from "./components/ControlFilter";
import { fetchFilteredPosts, clearFilters } from "./redux/actions/posts";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  const handleFilterChange = (filters) => {
    dispatch(fetchFilteredPosts(filters));
  };

  const handleResetFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <div className="App">
      <ControlFilter
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
      />
      <PostList />
    </div>
  );
}

export default App;

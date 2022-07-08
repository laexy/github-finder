import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <>
      {/* SEARCH COMPONENT HERE */}
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;

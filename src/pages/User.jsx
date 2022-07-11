import { useEffect, useContext } from "react";
import GitHubContext from "../context/github/GitHubContext";
import { useParams } from "react-router-dom";

function User({}) {
  const { getUser, user, loading } = useContext(GitHubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
    //getUserRepos(params.login);
  }, []);

  return <div>{user.login}</div>;
}

export default User;

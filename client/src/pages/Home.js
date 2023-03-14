import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_MATCHES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHES, {
    fetchPolicy: "no-cache"
  });

  const matchesList = data?.matches || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Our Match!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of matches you can vote on:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {matchesList.map((matches) => {
              return (
                <li key={matches._id}>
                  <Link to={{ pathname: `/matches/${matches._id}` }}>
                    {matches.product1} vs. {matches.product2}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new match?</h2>
        <Link to="/matches">
          <button className="btn btn-lg btn-danger">Create Matches!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

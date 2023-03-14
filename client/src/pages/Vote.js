import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { CREATE_VOTE } from '../utils/mutations';
import { QUERY_MATCHES } from '../utils/queries';

const Vote = () => {
  let { id } = useParams();

  const { loading, data } = useQuery(QUERY_MATCHES, {
    variables: { _id: id },
  });

  const matches = data?.matches || [];

  const [createVote, { error }] = useMutation(CREATE_VOTE);

  const handleVote = async (productNum) => {
    try {
      await createVote({
        variables: { _id: id, productNum: productNum },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Here is the match!</h1>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="card-body text-center mt-3">
          <h2>
            {matches[0].product1} vs. {matches[0].product2}
          </h2>
          <h3>
            {matches[0].product1_votes} : {matches[0].product2_votes}
          </h3>
          <button className="btn btn-info" onClick={() => handleVote(1)}>
            Vote for {matches[0].product1}
          </button>{' '}
          <button className="btn btn-info" onClick={() => handleVote(2)}>
            Vote for {matches[0].product2}
          </button>
          <div className="card-footer text-center m-3">
            <br></br>
            <Link to="/">
              <button className="btn btn-lg btn-danger">
                View all matches
              </button>
            </Link>
          </div>
        </div>
      )}
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Vote;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../utils/queries';
import { CREATE_MATCH } from '../utils/mutations';

const Match = () => {
  const { loading, data } = useQuery(QUERY_PRODUCT);

  const productList = data?.product || [];

  const [formData, setFormData] = useState({
    product1: 'JavaScript',
    product2: 'JavaScript',
  });
  let navigate = useNavigate();

  const [createMatch, { error }] = useMutation(CREATE_MATCH);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createMatch({
        variables: { ...formData },
      });

      navigate(`/match/${data.createMatch._id}`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      product1: 'JavaScript',
      product2: 'JavaScript',
    });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's create a match!</h1>
      </div>
      <div className="card-body m-5">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <form onSubmit={handleFormSubmit}>
            <label>Product 1: </label>
            <select name="product1" onChange={handleInputChange}>
              {productList.map((product) => {
                return (
                  <option key={product._id} value={product.name}>
                    {product.name}
                  </option>
                );
              })}
            </select>
            <label>Product 2: </label>
            <select name="product2" onChange={handleInputChange}>
              {productList.map((product) => {
                return (
                  <option key={product._id} value={product.name}>
                    {product.name}
                  </option>
                );
              })}
            </select>
            <button className="btn btn-danger" type="submit">
              Create Match!
            </button>
          </form>
        )}
      </div>
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Match;

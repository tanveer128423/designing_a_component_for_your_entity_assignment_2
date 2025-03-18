import React from 'react';
import ViewProductButton from '../components/button';

const Productcard = () => {
  const productImage = 'https://via.placeholder.com/150';
  const productName = 'Sample Product';
  const productPrice = '$19.99';

  return (
    <div className="border rounded-lg shadow-md p-4 max-w-sm">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{productName}</h2>
      <p className="text-gray-700">{productPrice}</p>
      <div className="mt-4">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;
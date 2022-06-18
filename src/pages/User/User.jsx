import React from 'react';
import { useParams } from 'react-router-dom';
import { Navigation } from '../../components';

export default function User() {
  let { userId } = useParams();

  return (
    <>
      <Navigation userId={userId} />
      <h1>userId: {userId.slice(1)}</h1>
    </>
  );
}

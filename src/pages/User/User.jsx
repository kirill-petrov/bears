import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  let { userId } = useParams();
  return (
    <>
      <h1>userId: {userId.slice(1)}</h1>
    </>
  );
}

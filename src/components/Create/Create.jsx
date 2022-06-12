import React from 'react';

export default function Create() {
  const createUser = (e) => {
    e.preventDefault();

    const person = {
      userId: Date(),
      name: e.target.name.value,
      role: e.target.role.value,
    };

    console.log(JSON.stringify(person, null, 2));
  };

  return (
    <>
      <h2>create</h2>
      <form onSubmit={createUser}>
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="role" placeholder="role" />
        <button>send</button>
      </form>
    </>
  );
}

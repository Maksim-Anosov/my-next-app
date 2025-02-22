'use client';
import React, { useState, useEffect } from 'react';

interface UserData {
  id: string;
  name: string;
  username: string;
  email: string;
}

export default function Contacts() {
  const [usersData, setUsersData] = useState<UserData[]>([]);
  const [searchText, setSearchText] = useState('');
  const [filteredUser, setFilteredUser] = useState<Pick<UserData, 'name'>>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        console.log('fetched data', data);
        setUsersData(data);
      })
      .catch((error) => {
        console.log('Errror While fetching user data', error.message);
      });
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const filterTimer = setTimeout(() => {
      try {
        fetch(
          `https://jsonplaceholder.typicode.com/users?username=${searchText}`,
          {
            signal: abortController.signal
          }
        )
          .then((response) => response.json())
          .then((data) => {
            console.log('FilteredUser ', data);
            setFilteredUser(data[0]);
          });
      } catch (error: unknown) {
        if (error instanceof Error && error.name === 'AbortError') {
          console.log('Request was aborted');
        } else {
          console.error('Error fetching user data:', error);
        }
      }
    }, 300);

    return () => {
      abortController.abort();
      clearTimeout(filterTimer);
    };
  }, [searchText]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h4>Users Data</h4>
      <input
        type='text'
        placeholder='Search by username'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        autoFocus={true}
      />

      <table
        style={{
          borderCollapse: 'collapse',
          margin: 'auto',
          border: '1px solid rgb(0, 233, 245)'
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {usersData &&
            usersData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <div>
        <h4>Search Result</h4>
        {filteredUser && filteredUser.name}
      </div>
    </div>
  );
}

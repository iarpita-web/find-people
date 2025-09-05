import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchBox from '../components/SearchBox';
import UserCard from '../components/UserCard';
import UserD from '../components/UserD';
import usersData from '../data/users.json';
import './SearchResults.css';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchTerm(query);
      performSearch(query);
    }
  }, [searchParams]);

  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const filteredUsers = usersData.filter(user => {
      const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
      const searchQuery = query.toLowerCase();
      
      return (
        user.first_name.toLowerCase().includes(searchQuery) ||
        user.last_name.toLowerCase().includes(searchQuery) ||
        fullName.includes(searchQuery) ||
        user.city.toLowerCase().includes(searchQuery)
      );
    });

    setSearchResults(filteredUsers);
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
    performSearch(query);
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const handleFetchDetails = (user) => {
    setSelectedUser(user);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="search-results">
      <Navbar />
      
      <div className="search-header">
        <div className="search-header-content">
          <div className="search-logo">
            <img src="/logo192.png" alt="Girman" className="header-logo" />
            <span className="header-title">Girman</span>
          </div>
          <div className="search-box-wrapper">
            <SearchBox 
              onSearch={handleSearch}
              placeholder="Search for users..."
            />
          </div>
        </div>
      </div>

      <main className="search-main">
        <div className="search-container">
          {searchTerm && (
            <div className="search-info">
              <p className="search-query">
                Search results for: <strong>"{searchTerm}"</strong>
              </p>
              <p className="results-count">
                {searchResults.length} result{searchResults.length !== 1 ? 's' : ''} found
              </p>
            </div>
          )}

          {searchResults.length > 0 ? (
            <div className="results-grid">
              {searchResults.map((user, index) => (
                <UserCard
                  key={`${user.first_name}-${user.last_name}-${index}`}
                  user={user}
                  onFetchDetails={handleFetchDetails}
                />
              ))}
            </div>
          ) : searchTerm ? (
            <div className="empty-state">
              <div className="empty-state-content">
                <img src="/logo192.png" alt="No results" className="empty-state-image" />
                <h2 className="empty-state-title">No results found</h2>
                <p className="empty-state-description">
                  We couldn't find any users matching "{searchTerm}". 
                  Try searching with a different name or location.
                </p>
              </div>
            </div>
          ) : (
            <div className="welcome-state">
              <div className="welcome-content">
                <h2 className="welcome-title">Search for Users</h2>
                <p className="welcome-description">
                  Enter a name or location in the search box above to find users.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <UserD
        user={selectedUser}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </div>
  );
};

export default SearchResults;
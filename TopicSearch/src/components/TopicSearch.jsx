
import React, { useState } from 'react';
import topics from '../data/topics';

const TopicSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Topic Search</h2>
      <input
        type="text"
        placeholder="Search topics..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="topics">
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <div className="topic-card" key={topic.id}>
              <h3>{topic.name}</h3>
              <p>{topic.category}</p>
            </div>
          ))
        ) : (
          <p className="no-topics">No topics found</p>
        )}
      </div>
    </div>
  );
};

export default TopicSearch;

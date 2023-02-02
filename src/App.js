import React from 'react';
import { useState } from 'react';

const App = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (index) => {
      setSelectedTab(index);
    };
  
    return (
      <div>
        <div className="tabs">
          <div
            className={`tab ${selectedTab === 0 ? "selected" : ""}`}
            onClick={() => handleTabChange(0)}
          >
            Tab 1
          </div>
          <div
            className={`tab ${selectedTab === 1 ? "selected" : ""}`}
            onClick={() => handleTabChange(1)}
          >
            Tab 2
          </div>
          <div
            className={`tab ${selectedTab === 2 ? "selected" : ""}`}
            onClick={() => handleTabChange(2)}
          >
            Tab 3
          </div>
        </div>
        <div className="tab-content">
          {selectedTab === 0 && <div>Content for Tab 1</div>}
          {selectedTab === 1 && <div>Content for Tab 2</div>}
          {selectedTab === 2 && <div>Content for Tab 3</div>}
        </div>
      </div>
    );
}

export default App



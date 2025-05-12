import { useState } from 'react';
import "./Header.css";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('tab1');

  const tabs = [
    { id: 'tab1', label: 'Tab 1', content: 'Contenido de la pestaña 1' },
    { id: 'tab2', label: 'Tab 2', content: 'Contenido de la pestaña 2' },
    { id: 'tab3', label: 'Tab 3', content: 'Contenido de la pestaña 3' },
  ];

  return (
    <div>
      <header>
        <nav>
          <ul className="tab-buttons">
            {tabs.map(tab => (
              <li key={tab.id}>
                <button
                  className={activeTab === tab.id ? 'active' : ''}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className="tab-content">
        {tabs.map(tab =>
          activeTab === tab.id ? <p key={tab.id}>{tab.content}</p> : null
        )}
      </div>
    </div>
  );
}

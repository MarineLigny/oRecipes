import { Search, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import './FilterBar.scss';

interface FilterBarProps {
  searchTerm: string;
  difficulty: string;
  onSearchChange: (search: string) => void;
  onDifficultyChange: (difficulty: string) => void;
}

export function FilterBar({ searchTerm, difficulty, onSearchChange, onDifficultyChange }: FilterBarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const difficulties = [
    { value: '', label: 'Toutes les difficultés' },
    { value: 'Facile', label: 'Facile' },
    { value: 'Moyen', label: 'Moyen' },
    { value: 'Difficile', label: 'Difficile' }
  ];

  // Fermer le dropdown en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDifficultySelect = (value: string) => {
    onDifficultyChange(value);
    setIsDropdownOpen(false);
  };

  const getCurrentLabel = () => {
    const current = difficulties.find(d => d.value === difficulty);
    return current ? current.label : 'Toutes les difficultés';
  };
  return (
    <div className="filter-bar">
      <div className="search-container">
        <Search className='search-icon' />
        <input
          type="text"
          placeholder="Rechercher par nom (ex: chocolat)..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="difficulty-container" ref={dropdownRef}>
        <div
          className="custom-select"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="select-value">{getCurrentLabel()}</span>
          <ChevronDown
            className={`select-arrow ${isDropdownOpen ? 'open' : ''}`}
            size={20}
          />
        </div>

        {isDropdownOpen && (
          <div className="dropdown-menu">
            {difficulties.map((option) => (
              <div
                key={option.value}
                className={`dropdown-item ${difficulty === option.value ? 'selected' : ''}`}
                onClick={() => handleDifficultySelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

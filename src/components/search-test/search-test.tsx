import styles from './search-test.module.scss';
import classNames from 'classnames';
import React, { useState } from 'react';

export interface SearchTestProps {
  className?: string;
  data: Array<{ id: number; name: string }>;
}

export const SearchTest = ({ className, data }: SearchTestProps) => {
  const [query, setQuery] = useState('');
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className={classNames(styles.root, className)}>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

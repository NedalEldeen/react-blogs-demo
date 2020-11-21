import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { parseURLQuery, addQueryParam } from 'utils/URLQueryBuilder';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { updateSearchTerm, updateSortBy } from 'state/actions';
import style from './BlogFilter.module.scss';

export default function ButtonAppBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [currentSearchTerm, setCurrentSearchTerm] = useState('');
  const { sortBy } = useSelector(({ query }) => query);

  const onSearch = (searchFor) => {
    dispatch(updateSearchTerm(searchFor || currentSearchTerm));
    history.push(addQueryParam('q', searchFor || currentSearchTerm));
  };

  useEffect(() => {
    const q = parseURLQuery('q');
    if (q) {
      setCurrentSearchTerm(q);
      onSearch(q);
    }
  }, []);

  const onSearchInputChanged = (e) => {
    const term = e.target.value;
    setCurrentSearchTerm(term);
    if (!term) onSearch();
  };

  return (
    <div className={style['filter-container']}>
      <div className="search-container">
        <Input
          fullWidth
          placeholder="Search ..."
          value={currentSearchTerm}
          onChange={onSearchInputChanged}
          onKeyDown={(e) => {
            if (e.key === 'Enter') onSearch();
          }}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                size="small"
                onClick={() => onSearch()}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
            )}
          />
      </div>
      <div className="sort-container">
        <FormControl fullWidth>
          <InputLabel id="sort-by-select-label">Sort By</InputLabel>
          <Select
            labelId="sort-by-select-label"
            id="sort-by-select"
            value={sortBy}
            onChange={(e) => dispatch(updateSortBy(e.target.value))}
          >
            <MenuItem value="desc">Newest first</MenuItem>
            <MenuItem value="asc">Oldest first</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}

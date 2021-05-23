import React, {useReducer, useMemo} from 'react';
import PropTypes from 'prop-types';

const initialState = {};

const initialContext = [{...initialState}, () => {}];

export const HomeDetailContext = React.createContext(initialContext);

const updater = (state, update) => {
  return {...update};
};

export function HomeDetailProvider(props) {
  const [homeDetailState, updateHomeDetailState] = useReducer(
    updater,
    initialState,
  );
  const value = useMemo(
    () => [homeDetailState, updateHomeDetailState],
    [homeDetailState],
  );

  return (
    <HomeDetailContext.Provider value={value}>
      {props.children}
    </HomeDetailContext.Provider>
  );
}

HomeDetailProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

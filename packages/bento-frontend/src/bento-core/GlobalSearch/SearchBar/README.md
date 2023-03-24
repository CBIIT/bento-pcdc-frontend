# Overview

This component provides a Bento-oriented implementation of the <https://v4.mui.com/api/autocomplete/> Material-UI autocomplete component. See below for basic usage.

For the component's technical details, please see [DESIGN.md](./DESIGN.md).

# Usage

## Quick Start

<details>
  <summary>Basic Usage</summary>

  ```javascript
  // Import the generator
  import { SearchBarGenerator } from '...'; // Note: update the path

  // Initialize the component with the default options
  // See config.js for the default options
  const { SearchBar } = SearchBarGenerator();

  // Use the component
  const bar = (
    <SearchBar
      clearable={false}
      showLoading={false}
    />
  );
  ```

</details>

## Generator Configuration

See the available `DEFAULT_CONFIG_SEARCHBAR` object to understand the component generator options. You can choose to override `config` and/or `functions`. You DO NOT need to override all of the options if you don't want to. The component generator will only use the options you provide.

```javascript
export const DEFAULT_CONFIG_SEARCHBAR = {
  // A classes object generated by makeStyles
  // NOTE: You must define ALL of the styling if you override this option
  // See styles.js / DEFAULT_STYLES
  classes: null,

  config: {
    // --------
    // **REQUIRED**
    // Only if you are using the default getSuggestions helper function.
    // --------
    query: null,                                       // The GQL query function to call
    searchKeys: [],                                    // ... ^
    searchFields: [],                                  // ... ^
    // --------
    // Optional
    // --------
    placeholder: 'SEARCH BENTO',                       // The placeholder text for the search bar
    expandText: 'Press ENTER for more search results', // The text to display when the search bar is expanded and at maxSuggestions
    searchRoute: '/search',                            // The route to redirect to when the search bar value changes
    minimumInputLength: 3,                             // The minimum number of characters for autocomplete to trigger
    maxSuggestions: 6,                                 // The maximum amount of autocomplete suggestions to show before triggering expandText, 0 = no limit
  },

  functions: {
    /**
     * Perform an action when the search bar value changes
     *
     * NOTE: By default, this will redirect to the search route
     * denoted by the searchRoute config option
     *
     * @param {string} value
     * @param  {...any} args
     */
    onChange: (value, ...args) => {},

    /**
     * Helper function to filter result options
     *
     * @param {object|string} option
     * @returns string|boolean
     */
    filterOptions: (option) => {},

    /**
     * Returns the label for the option. Useful for nested or complex API responses
     *
     * @param {object|string} option
     * @returns string option label
     */
    getOptionLabel: (option) => {},

    /**
     * Perform autocomplete search on the API
     *
     * NOTE: This function does not need to be async if
     * you have the search results already available. It,
     * however, must resolve to an 1-D array of results.
     *
     * @async
     * @param {object} config this configuration object
     * @param {string} search search input typed into the search bar
     * @returns {Promise} Promise object represents the search results
     */
    getSuggestions: async (config, search) => {},
  },
};
```

# Exports

The SearchBar component exports the following components and objects by default. You may use them as necessary.

- `SearchBarGenerator`
- `DEFAULT_CONFIG_SEARCHBAR`

# Props

This SearchBar component, which is generated by the provided generator, accepts the following props directly. The default value is specified, along with the possible values.

```javascript
<SearchBar
  clearable={false}     // boolean: Whether or not to show the "X" clear input icon
  showLoading={false}   // boolean: Whether or not to show a loading icon while fetching results
  value={''}            // string: the default value of the search bar
  style={null}          // object: the inline styling object to apply to the search bar
/>
```
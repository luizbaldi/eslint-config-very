module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    /**
     * Use React recommended rules
     * @see https://github.com/yannickcr/eslint-plugin-react
     */
    "plugin:react/recommended", 
    /**
     * Use React Hooks recommended rules
     * @see https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks
     */
    "plugin:react-hooks/recommended"
  ],
  rules: {
     /**
     * Turn off PropTypes since most of the time, we're using TypeScript
     * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     */
      "react/prop-types": "off",
      /**
       *  Don't require display names used with React.createClass({}) or React.Component
       * since we mostly use function components with hooks, this is not necessary
       * @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
       */
      "react/display-name": "off",
  },
  settings: {
    /**
     * Set the React settings
     * @see https://github.com/yannickcr/eslint-plugin-react#configuration
     */
    react: {
      version: "detect", // Automatically picks the React version installed
    },
  },
};

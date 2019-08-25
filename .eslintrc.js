module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        // Allows for the use of imports
        sourceType: 'module',
        ecmaFeatures: {
            // Allows for the parsing of JSX
            jsx: true,
        },
    },
    extends: [
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'plugin:import/errors',
        'prettier/@typescript-eslint',
        // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:prettier/recommended',
    ],
    plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'import/order': [
            'error',
            {
                groups: ['external', 'internal'],
                'newlines-between': 'always-and-inside-groups',
            },
        ],
        'import/no-unresolved': ['error', { ignore: ['^~/'] }],
        'jsx-a11y/anchor-is-valid': 'off',
        'react/jsx-boolean-value': ['warn', 'never'],
        'react/no-array-index-key': 'error',
        'react/no-did-mount-set-state': 'error',
        'react/no-did-update-set-state': 'error',
        'react/no-multi-comp': 'warn',
        'react/prop-types': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/self-closing-comp': 'warn',
        'react/jsx-wrap-multilines': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    globals: {
        window: 'writable',
        document: 'writable',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
        },
        react: {
            // Tells eslint-plugin-react to automatically detect the version of React to use
            version: 'detect',
        },
    },
}

module.exports = {
    extends: ['airbnb-base', 'plugin:vue/vue3-recommended', 'prettier'],
    plugins: ['vue', 'prettier'],
    rules: {
        'no-console': ["error", { allow: ["warn", "error"] }]
    },
};
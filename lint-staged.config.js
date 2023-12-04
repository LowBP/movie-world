module.exports = {
  'src/**/*.{js,jsx,json,md,tsx}': [
    'npm run lint:write',
    'npm run prettier:write',
    'npm run ec:write',
    'npx scriptlint',
    'npx @ls-lint/ls-lint'
  ]
};

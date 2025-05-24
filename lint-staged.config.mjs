export default {
  '*.{js,cjs,ts,tsx,json,md}': ['eslint --fix'],
  '*.{css,scss,less,html,vue}': ['stylelint --fix', 'eslint --fix'],
};

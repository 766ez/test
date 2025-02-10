import app from 'flarum/forum/app';

export { default as extend } from './extend';

app.initializers.add('766-test', () => {
  console.log('[766/test] Hello, forum!');
});

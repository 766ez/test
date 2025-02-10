import app from 'flarum/common/app';

app.initializers.add('766-test-common', () => {
  console.log('[766/test] Hello, forum and admin!');
});

import app from 'flarum/forum/app';
import TestComponent from './components/TestComponent';

export { default as extend } from './extend';

app.initializers.add('766-test', () => {
  console.log("a")
  app.routes["test"] = {
    path: "/test",
    component: TestComponent,
  }
  console.log('[766/test] Hello, forum!');
});

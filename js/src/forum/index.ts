import app from 'flarum/forum/app';
import {extend} from 'flarum/extend';
import UserControls from 'flarum/utils/UserControls';
import Button from 'flarum/components/Button';

import TestComponent from './components/TestComponent';

export { default as extend } from './extend';

app.initializers.add('766-test', () => {
  extend(UserControls, "test", (items, user) => {
    items.add('test-a', Button.component({
      onclick() {
        console.log("a")
      }
    }))
  })
  console.log("a")
  app.routes.test = {path: '/test', component: TestComponent}

  console.log('[766/test] Hello, forum!');
});

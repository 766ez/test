import app from 'flarum/forum/app';
import {extend} from 'flarum/extend';
import UserControls from 'flarum/utils/UserControls';
import Button from 'flarum/components/Button';

import TestComponent from './components/TestComponent';

app.initializers.add('766-test', () => {
  app.route.test = {path: "/test", component: TestComponent}
  console.log('[766/test] Hello, forum!');
});

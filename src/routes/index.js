import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Students from '../pages/Students';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      {/* <Route path="/register" component={SignUp} /> */}

      <Route path="/students" component={Students} isPrivate />
      {/* <Route path="/profile" component={Profile} isPrivate /> */}
    </Switch>
  );
}

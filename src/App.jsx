import React from 'react';
import ReactDOM from 'react-dom/client';
import ReusableButton from './components/reusability/ReusableButton';
import Avatar from './components/reusability/ReusablaAvatar';

import './App.css';
import WrapperMenu from './components/reusability/compound-components-with-ReactChildren/WrapperMenu';

function App() {
  return (
    <main>
      <ReusableButton>Log in with Google</ReusableButton>
      <ReusableButton size='lg' variant='success'>
        Log in with Google
      </ReusableButton>
      <ReusableButton size='sm' variant='warning'>
        Log in with Google
      </ReusableButton>
      <ReusableButton size='sm' variant='danger'>
        Log in with Google
      </ReusableButton>
      <hr />
      <Avatar src='/images/lighthouse.png' alt='some photo' />
      <br />
      <Avatar>BZ</Avatar>
      <br />
      <Avatar />
      <hr />
      <WrapperMenu />
    </main>
  );
}

export default App;

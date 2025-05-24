import { PlusOutlined } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import { Button } from 'antd';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import './antd.css';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer noopener">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer noopener">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          <Button type="primary" onClick={() => setCount(count => count + 1)}>
            <Icon icon="ant-design:plus-outlined" />
            count is
            {' '}
            {count}
          </Button>
        </p>
        <p>
          <Button type="primary" onClick={() => setCount(count => count + 1)}>
            <PlusOutlined />
            count is
            {' '}
            {count}
          </Button>
        </p>
      </div>
    </>
  );
}

export default App;

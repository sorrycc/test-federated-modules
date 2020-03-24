// import React from 'libs/react';
// import ReactDOM from 'libs/react-dom';

(async () => {
  const { default: React } = await import('libs/react');
  const { default: ReactDOM } = await import('libs/react-dom');
  const { default: { Button } } = await import('libs/antd');

  function App() {
    return (
      <div>
        <h1>Hi</h1>
        <Button>Foo</Button>
      </div>
    );
  }

  ReactDOM.render(<App />, document.getElementById('root'));
})();

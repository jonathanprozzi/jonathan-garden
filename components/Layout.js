export default function Layout({ children }) {
  return (
    <>
      <div className="wrapper">{children}</div>
      <style jsx>{`
        .wrapper {
          display: flex;
          min-height: 100vh;
          min-width: 100vw;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          max-width: 800px;
          margin: 0 auto;
          padding: 1.5rem;
        }
      `}</style>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
        }

        :root {
          --site-color: royalblue;
          --divider-color: rgba(0, 0, 0, 0.4);
        }

        html {
          font: 100%/1.5 system-ui;
          max-height: 100vh;
          height: 100vh;
          overflow-y: hidden;
          overflow-x: hidden;

          background-color: #121212;
        }

        a {
          color: inherit;
          text-decoration-color: var(--divider-color);
          text-decoration-thickness: 2px;
        }

        a:hover {
          color: var(--site-color);
          text-decoration-color: currentcolor;
        }

        h1 {
          background-color: green;

          background-image: linear-gradient(60deg, #81e6d9, #a17fe0);

          background-size: 100%;
          background-repeat: repeat;

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-background-clip: text;
          -moz-text-fill-color: transparent;
        }
        h2 {
          background-color: green;

          background-image: linear-gradient(60deg, #a17fe0, #81e6d9, #a17fe0);

          background-size: 100%;
          background-repeat: repeat;

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -moz-background-clip: text;
          -moz-text-fill-color: transparent;
        }
        h1,
        p {
          margin-bottom: 1.5rem;
        }

        code {
          font-family: 'Menlo';
        }
      `}</style>
    </>
  );
}

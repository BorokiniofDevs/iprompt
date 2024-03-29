import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";

export const metaData = {
  title: "iPrompt",
  description: " The Prompt plug for your GPTs",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;

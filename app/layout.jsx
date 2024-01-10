import Nav from "@components/Nav";
import "@styles/globals.css";

export const metaData = {
  title: "iPrompt",
  description: " The Prompt plug for your GPTs",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;

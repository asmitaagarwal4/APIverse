import { useState, useMemo } from "react";
import "./App.css";
import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";
import DotLoader from "./components/loader";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";
import Background from "./components/Background";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const PORT = import.meta.env.VITE_API_BASE_URL;

  const handleSearch = async () => {
    if (searchQuery.trim()) {
      setSearchLoading(true);
      try {
        const res = await fetch(`${PORT}/api/search`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: searchQuery }),
        });

        if (!res.ok) throw new Error("Search request failed");

        const data = await res.json();
        setSearchResults(data);
        setHasSearched(true);
      } catch (error) {
        setSearchResults([]);
        setHasSearched(true);
      } finally {
        setSearchLoading(false);
      }
    } else {
      setSearchResults([]);
      setHasSearched(true);
    }
  };

  // Memoize the Graph component to avoid unnecessary re-renders
  // const memoizedGraph = useMemo(() => (
  //   <Content
  //     hasSearched={hasSearched}
  //     searchResults={searchResults}
  //     setSearchLoading={setSearchLoading}
  //     setSearchResults={setSearchResults}
  //     setHasSearched={setHasSearched}
  //   />
  // ), [hasSearched, searchResults]);

  return (
    <>
      <main className="relative w-full h-screen flex flex-col overflow-x-hidden">
        {/* Background Gradient  */}
        <Background />

        <div className="relative z-10 w-full flex-1 flex flex-col ">
          <div className="shrink-0">
          <Header />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            handleSearch={handleSearch}
          />
          </div>
           <div className="flex-1 overflow-auto">
          <Content
            hasSearched={hasSearched}
            searchResults={searchResults}
            setSearchLoading={setSearchLoading}
            setSearchResults={setSearchResults}
            setHasSearched={setHasSearched}
          />
          </div>
        </div>
        {searchLoading && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center">
            <div className="text-center space-y-4">
              <DotLoader />
              <p className="text-white font-medium text-lg">
                Searching APIs...
              </p>
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;

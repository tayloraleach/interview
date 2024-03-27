// import Image from "next/image";

import Article from "./Article";

export default function Home() {
  return (
    <main className="max-w-2xl m-auto min-h-screen p-2">
      <Article />
      <div className="gap-2 flex my-4">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
      </div>
    </main>
  );
}

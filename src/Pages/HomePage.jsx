import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">


      <main className="flex flex-col items-center mt-10 space-y-6">
        <h1 className="text-4xl font-bold text-gray-800">
          Benvenuto!
        </h1>
        <p className="text-gray-600 text-lg text-center max-w-md">
          Questa è una semplice homepage creata con React e JavaScript.
        </p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow">
          Scopri di più
        </button>
      </main>

      <footer className="mt-auto w-full text-center p-4 text-gray-500">
        © 2026 - Il tuo sito
      </footer>
    </div>
  );
}
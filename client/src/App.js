import { useState } from "react";
import Header from "./components/Header";
import HealthcareForm from "./components/HealthcareForm";
import ResponseBox from "./components/ResponseBox";
import FAQ from "./components/FAQ";

function App() {
  const [response, setResponse] = useState("");
  const [showFaq, setShowFaq] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-200 via-sky-100 to-emerald-200 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-teal-200 overflow-hidden">
        <Header />

        <div className="p-8 space-y-8">
          <HealthcareForm onResponse={setResponse} />
          <ResponseBox response={response} />
        </div>
      </div>

      <button
        onClick={() => setShowFaq(true)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-5 py-3 rounded-full text-sm font-semibold shadow-xl hover:from-teal-700 hover:to-emerald-700 transition"
      >
        FAQs
      </button>

      {showFaq && <FAQ onClose={() => setShowFaq(false)} />}
    </div>
  );
}

export default App;

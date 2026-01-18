function ResponseBox({ response }) {
  if (!response) return null;

  return (
    <div className="bg-gradient-to-r from-emerald-100 to-teal-100 border-2 border-emerald-400 text-emerald-900 rounded-2xl p-6 shadow">
      <p className="font-semibold mb-2">Automated System Response</p>
      <p>{response}</p>
    </div>
  );
}

export default ResponseBox;

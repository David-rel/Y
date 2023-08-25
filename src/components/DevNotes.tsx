// components/DevNotes.tsx
function DevNotes() {
  return (
    <div className="w-2/5 p-4">
      <h2 className="mb-4 text-2xl font-bold">Developer Notes</h2>
      {/* Sample notes, you can replace or fetch dynamically */}
      <ul>
        <li className="mb-2">- Note 1: Some important note here.</li>
        <li className="mb-2">- Note 2: Another important note.</li>
        <li className="mb-2">- Note 3: Yet another note.</li>
      </ul>
    </div>
  );
}

export default DevNotes;

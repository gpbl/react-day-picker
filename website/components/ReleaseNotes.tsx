import { useEffect, useState } from "react";

export function ReleaseNotes() {
  const [releaseNotes, setReleaseNotes] = useState<string>("");

  useEffect(() => {
    // Fetch the CHANGELOG.md file from react-day-picker GitHub repo.
    fetch("https://raw.githubusercontent.com/gpbl/react-day-picker/releasees")
      .then((response) => response.text())
      .then((data) => {
        // If necessary, here you can parse markdown to HTML
        setReleaseNotes(data);
      })
      .catch((error) => {
        console.error("Error fetching release notes:", error);
        setReleaseNotes("Failed to load release notes.");
      });
  }, []);

  return (
    <div>
      <h1>React Day Picker Release Notes</h1>
      {/* Add a preformatted block to preserve the markdown formatting */}
      <pre>{releaseNotes}</pre>
    </div>
  );
}

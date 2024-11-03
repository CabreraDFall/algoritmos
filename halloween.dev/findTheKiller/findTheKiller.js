function findTheKiller(whisper, suspects) {
  const results = [];
  const isExactMatch = whisper.endsWith("$");
  const pattern = whisper.replace(/\$/g, "").replace(/~/g, ".");

  for (const suspect of suspects) {
    const suspectName = suspect.toLowerCase();
    const regex = new RegExp(`^${pattern}`, "i");

    if (regex.test(suspectName)) {
      if (isExactMatch) {
        if (suspectName.length === pattern.length) {
          results.push(suspect);
        }
      } else {
        results.push(suspect);
      }
    }
  }

  return results.length === 0 ? "" : results.join(",");
}

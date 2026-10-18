if (process.isMainFrame) {
  const { ipcRenderer } = require("electron");
  let current = null;
  const subscribers = new Set();
  ipcRenderer.on("pixel:theme", (_event, theme) => {
    current = theme;
    for (const subscriber of subscribers) {
      try { subscriber(theme); } catch {}
    }
  });
  ipcRenderer.send("pixel:theme-request");
  globalThis.pixel = {
    theme: () => current,
    onTheme(subscriber) {
      subscribers.add(subscriber);
      if (current) { try { subscriber(current); } catch {} }
      return () => subscribers.delete(subscriber);
    },
    quit: () => ipcRenderer.send("pixel:quit"),
  };
}

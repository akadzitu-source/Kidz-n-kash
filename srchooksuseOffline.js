import { useEffect, useState } from "react";
import { openDB } from "idb";

export const useOffline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [db, setDb] = useState(null);

  useEffect(() => {
    const initDB = async () => {
      const database = await openDB("kidz-kash", 1, {
        upgrade(db) {
          if (!db.objectStoreNames.contains("progress")) {
            db.createObjectStore("progress", { keyPath: "id" });
          }
          if (!db.objectStoreNames.contains("lessons")) {
            db.createObjectStore("lessons", { keyPath: "id" });
          }
        },
      });
      setDb(database);
    };
    initDB();

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const saveProgress = async (userId, progress) => {
    if (!db) return;
    const tx = db.transaction("progress", "readwrite");
    await tx.store.put({ id: userId, ...progress });
    await tx.done;
  };

  const getProgress = async (userId) => {
    if (!db) return null;
    const tx = db.transaction("progress", "readonly");
    const progress = await tx.store.get(userId);
    return progress;
  };

  return { isOnline, saveProgress, getProgress };
};
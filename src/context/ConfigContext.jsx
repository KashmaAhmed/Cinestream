import React, { createContext, useState, useEffect } from "react";
import { getConfig } from "../api/tmdb";

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await getConfig();
        setConfig(res.data.images);
      } catch (err) {
        console.error("Error fetching TMDB config:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchConfig();
  }, []);

  if (loading) return <div className="loading">Loading CineStream…</div>;

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
};
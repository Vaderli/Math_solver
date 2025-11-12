import { useLocalStorage } from "./useLocalStorage";

const DEFAULT_SET = {
  difficulty: "easy",
  count: 5,
  time: 60,
};

export function useSettings() 
{
  const [settings, setSettings] = useLocalStorage(
    "quizSettings", DEFAULT_SET
  );

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
  };

  return { settings, updateSettings };
}

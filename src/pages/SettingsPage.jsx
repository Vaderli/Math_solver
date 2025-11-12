import SettingsForm from "../components/SettingsForm";
import { useSettings } from "../hooks/useSettings";

function SettingsPage({ onBack }) 
{
    const {settings, updateSettings} = useSettings();

    const handleSave  = (data) => {
        updateSettings(data);
        alert("Settings saved!");
        onBack();
  };

  return (
    <>
      <h2>Settings</h2>
      <SettingsForm
        defaultValues={settings}
        onSave={handleSave}
        onCancel={onBack}
      />
    </>
  );
}

export default SettingsPage;
import { useNavigate, useParams } from "react-router-dom";
import SettingsForm from "../components/SettingsForm";
import { useSettings } from "../hooks/useSettings";

function SettingsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { settings, updateSettings } = useSettings();

  const handleSave = (data) => {
    updateSettings(data);
    navigate(`/`);
  };

  return (
    <>
      <h2>Settings</h2>

      <SettingsForm 
        defaultValues={settings}
        onSave={handleSave}
        onCancel={handleSave}
      />
    </>
  );
}

export default SettingsPage;

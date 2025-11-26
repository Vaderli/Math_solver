import { useNavigate, useParams } from "react-router-dom";
import SettingsForm from "../../components/SettingsForm";
import { useSettings } from "../../hooks/useSettings";
import "./SettingsPage.css";


function SettingsPage() {
  const navigate = useNavigate();
  const { settings, updateSettings } = useSettings();

  const handleSave = (data) => {
    updateSettings(data);
    navigate(`/start`);
  };

  return (
    <>
      <div className="settingWrapper">
      <h2 className="settingsTitle">Settings</h2>

      <SettingsForm 
        defaultValues={settings}
        onSave={handleSave}
        onCancel={handleSave}
      />
      </div>
    </>
  );
}

export default SettingsPage;

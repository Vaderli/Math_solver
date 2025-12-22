import { useNavigate } from "react-router-dom";
import SettingsForm from "../../components/SettingsForm/SettingsForm";
import styles from "./SettingsPage.module.css";
import { useUserGuard } from "../../hooks/useUserGuard";
import { useDispatch, useSelector } from "react-redux";
import { setSettings } from "../../features/settings/settingsSlice";

function SettingsPage() {
  useUserGuard();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const settings = useSelector(state => state.settings);

  const handleSave = (data) => {
    dispatch(setSettings(data));
    navigate("/start");
  };

  const handleCancel = () => {
    navigate("/start");
  };

  return (
    <div className={styles.settingWrapper}>
      <h2 className={styles.settingsTitle}>Settings</h2>

      <SettingsForm
        defaultValues={settings}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default SettingsPage;

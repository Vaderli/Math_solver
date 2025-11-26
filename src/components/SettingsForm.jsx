import { useForm } from "react-hook-form";
import styles from "../pages/SettingsPage/SettingsPage.module.css";

function SettingsForm({ defaultValues, onSave, onCancel }) 
{
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.settingsForm}>
      <label>Difficulty:</label>
      <select {...register("difficulty")}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <label>Count of questions:</label>
      <input type="number" {...register("count")} min="4" max="20" />

      <div className={styles.settingsButtons}>
        <button type="submit" className={`${styles.settingsBtn} ${styles.btnSave}`}> 
          Save
        </button>
        <button className={`${styles.settingsBtn} ${styles.btnCancel}`} type="button" onClick={onCancel}>
          Back
        </button>
      </div>
    </form>
  );
}

export default SettingsForm;

import { useForm } from "react-hook-form";

function SettingsForm({ defaultValues, onSave, onCancel }) 
{
  const { register, handleSubmit } = useForm({
    defaultValues,
  });

  const onSubmit = (data) => {
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="settings-form">
      <label>Difficulty:</label>
      <select {...register("difficulty")}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>

      <label>Count of questions:</label>
      <input type="number" {...register("count")} min="4" max="12" />

      <div className="buttons">
        <button type="submit" className="btn-save">
          Save
        </button>
        <button type="button" onClick={onCancel}>
          Back
        </button>
      </div>
    </form>
  );
}

export default SettingsForm;

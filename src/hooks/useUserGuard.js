import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";

export function useUserGuard() {
  const { userId } = useParams();
  const [storedId] = useLocalStorage("userId", null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!storedId) 
    {
      navigate("/start");
      return;
    }

    if (userId !== storedId) 
    {
      navigate("/start");
      return;
    }
  }, [userId, storedId, navigate]);

  return userId;
}

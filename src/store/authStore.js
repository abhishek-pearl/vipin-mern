import { instance } from "@/utils/axiosInterceptor";
import axios from "axios";
import { toast } from "sonner";
import { create } from "zustand";
import { devtools, createJSONStorage, persist } from "zustand/middleware";

const initialState = {
  isLoading: true,
  isUserLoggedIn: false,
  user: null,
  error: null,
};

export const userStore = create(
  persist(
    (set) => ({
      ...initialState,
      login: async ({ email, password }) => {
        set({ loading: true, error: null });
        try {
          const response = await instance.post(
            `${process.env.NEXT_PUBLIC_API_URL}/user/signin`,
            { email, password },
            {
              withCredentials: true,
            }
          );
          console.log(response, "loginResponse");

          if (response.status != 200) {
            toast.error("Incorrect Email/Password", { position: "top-center" });
            throw new Error("Login failed");
          }
          toast.success("Logged In", { position: "top-center" });
          set({ user: response.data, isUserLoggedIn: true, loading: false });
        } catch (error) {
          console.log(error?.response?.data);
          toast.error(error?.response?.data?.message);
          set({ error: error?.response?.data?.message, loading: false });
        }
      },
      logout: async () => {
        set({ loading: true, error: null });
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/user/signout`,
            {}, // Empty body if no data is being passed
            {
              headers: {
                // add your necessary headers here
              },
              withCredentials: true,
            }
          );
          console.log(response, "logoutResponse");

          if (response.status != 200) {
            toast.error("Login Failed", { position: "top-center" });
            throw new Error("Logout failed");
          }
          toast.success("Logout Successful", { position: "top-center" });
          set({ user: null, isUserLoggedIn: false, loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
      getUserData: async () => {
        set({ loading: true, error: null });
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/user/userData`,

            {
              withCredentials: true,
            }
          );
          console.log(response, "user Data fetch response");

          if (response.status != 200) {
            toast.error("Fetching User Data  failed !!", {
              position: "top-center",
            });
            throw new Error("Fetching User Data  failed !!");
          }
          toast.success("User Data Refreshed !!", { position: "top-center" });
          set({ user: response.data, isUserLoggedIn: true, loading: false });
        } catch (error) {
          set({ error: error.message, loading: false });
        }
      },
    }),
    {
      name: "VipinGoswami", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

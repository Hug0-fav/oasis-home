import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,

    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account created successfully! Please check your email for verification link."
      );
    },
  });

  return {
    signup,
    isLoading,
  };
}

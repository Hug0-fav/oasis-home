import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    onSuccess: (data) => {
      toast.success(`bookinng #${data.id} succesfully checked out `);
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error("there was a error while checking out"),
  });

  return { checkout, isCheckingOut };
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export function useBookingDelete() {
  const queryClient = useQueryClient();
  const { mutate: handleDelete } = useMutation({
    mutationFn: deleteBooking,

    onSuccess: () => {
      toast.success("Booking deleted successfully");
      queryClient.invalidateQueries(["bookings"]);
    },

    onError: () => toast.error("There was an error while deleting the booking"),
  });
  return { handleDelete };
}

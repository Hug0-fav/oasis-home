import styled from "styled-components";
import BookingDataBox from "../bookings/BookingDataBox";

import Row from "../../ui/Row";
import Heading from "../../ui/Heading";
import ButtonGroup from "../../ui/ButtonGroup";
import Button from "../../ui/Button";
import ButtonText from "../../ui/ButtonText";

import { useMoveBack } from "../../hooks/useMoveBack";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";
import { useState } from "react";
import Checkbox from "../../ui/Checkbox";
import { useEffect } from "react";
import { formatCurrency } from "../../utils/helpers";
import { useCheckin } from "./useCheckin";
import { useSetting } from "../settings/useSetting";

const Box = styled.div`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 4rem;
`;

function CheckinBooking() {
  const [confirmPaid, setConfirmedPaid] = useState(false);
  const [addBreakfast, setAddBreakfast] = useState(false);
  const { settings, isLoading: isLoadingSettings } = useSetting();

  const moveBack = useMoveBack();
  const { chekin, isCheckingIn } = useCheckin();

  useEffect(() => setConfirmedPaid(booking?.isPaid ?? false), [booking]);

  const { booking, isLoading } = useBooking();
  if (isLoading || isLoadingSettings) return <Spinner />;

  const optionalBreakfastPrice =
    settings.breakfastPrice * numNights * numGuests;

  const {
    id: bookingId,
    guests,
    totalPrice,
    numGuests,
    hasBreakfast,          
    numNights,
  } = booking;

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakfast) {
      chekin({
        bookingId,
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: totalPrice + optionalBreakfastPrice,
        },
      });
      chekin({ bookingId, breakfast: {} });
    }
  }

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Check in booking #{bookingId}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      {!hasBreakfast && (
        <Box>
          <Checkbox
            checked={addBreakfast}
            onClick={() => {
              setAddBreakfast((add) => !add);
              setConfirmedPaid(false);
            }}
            id={"breakfast"}
          >
            want to add breakfast for ${formatCurrency(optionalBreakfastPrice)}x
          </Checkbox>
        </Box>
      )}

      <BookingDataBox booking={booking} />
      <Box>
        <Checkbox
          value={confirmPaid}
          onChange={() => setConfirmedPaid((confirm) => !confirm)}
          disabled={confirmPaid || isCheckingIn}
          id="confirm"
        >
          i confirm that {guests.fullName} has paid the total amount of{" "}
          {!addBreakfast
            ? formatCurrency(totalPrice)
            : `${formatCurrency(
                totalPrice + optionalBreakfastPrice
              )} (${formatCurrency(totalPrice)} + ${formatCurrency(
                optionalBreakfastPrice
              )})`}
        </Checkbox>
      </Box>

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid || isCheckingIn}>
          Check in booking #{bookingId}
        </Button>
        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;

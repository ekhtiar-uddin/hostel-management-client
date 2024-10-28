import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useParams } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useFetchGlobal } from "../../../Hooks/useFetchGlobal";
import UseToastify from "../../../Hooks/UseToastify";
import img from "/assets/medal.png";

const CheckOutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { planName } = useParams();
  // console.log("now", planName);

  const [payments, loading, refetch] = useFetchGlobal(`/payments`);
  // console.log(payments);

  let totalPrice = 0;
  if (planName === "Silver") {
    totalPrice = 599;
  } else if (planName === "Gold") {
    totalPrice = 799;
  } else {
    totalPrice = 999;
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    // Create Payment Intent
    let clientSecret;
    try {
      const res = await axiosSecure.post(
        "/create-payment-intent",
        {
          price: totalPrice,
          email: user?.email,
        },
        { skipAuthErrorHandler: true }
      );
      clientSecret = res.data.clientSecret; // Capture clientSecret
    } catch (error) {
      if (error.response?.status === 403) {
        UseToastify(
          "",
          "You have already made a payment within the last 30 days."
        );
      }

      setError("Failed to create payment intent.");
      return; // Stop further execution if there's an error
    }

    // Create payment method
    const { error: paymentError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card,
      });

    if (paymentError) {
      console.log("payment error", paymentError);
      setError(paymentError.message);
      return; // Stop execution on error
    } else {
      setError(""); // Clear error if payment method is created
    }

    // Confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm-error", confirmError);
      setError(confirmError.message);
      return; // Stop execution on confirmation error
    } else {
      console.log("payment intent", paymentIntent);
      setTransactionId(paymentIntent.id); // Capture transaction ID

      // Show appropriate Toastify message based on the plan
      const toastMessage = "You Have Done the Payment!";
      if (planName === "Gold") {
        UseToastify(
          "",
          toastMessage,
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8Rf-P_S17VvgG5fIp1JWKKyX7AgTCbOt3w&usqp=CAU"
        );
      } else if (planName === "Silver") {
        UseToastify("", toastMessage, img);
      } else {
        UseToastify(
          "",
          toastMessage,
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQcfoau_BSAE4OADEZ6HbTrLyLHrKqwN4AQ&usqp=CAU"
        );
      }

      // Save payment info to your database
      const paymentInfo = {
        email: user?.email,
        price: totalPrice,
        plan: planName,
        createdAt: new Date(),
      };
      const res = await axiosSecure.post("/payments", paymentInfo);
      if (res.data?.paymentResult?.insertedId) {
        // Swal.fire({
        //   position: "top-end",
        //   icon: "success",
        //   title: "Your data has been saved",
        //   showConfirmButton: false,
        //   timer: 1500,
        // });
      }
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <CardElement
          className="py-3 px-4 bg-white rounded-lg"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#000000",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <button
          className="mt-5 w-full bg-p1 text-p4 py-2 rounded-lg  
           font-semibold cursor-pointer "
          type="submit"
        >
          {" "}
          Pay
        </button>
        <p className="text-red-400">{error}</p>
        {/* {transactionId && (
          <p className="text-green-500">your transactionId {transactionId}</p>
        )} */}
      </form>
    </div>
  );
};

export default CheckOutForm;

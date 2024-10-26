import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/UseAuth";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import UseToastify from "../../../Hooks/UseToastify";
import img from "/assets/medal.png";

const CheckOutForm = ({ item }) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const totalPrice = item?.price;

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          // console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
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
      console.log("confirm-error");
    } else {
      console.log("payment intent", paymentIntent);

      if (item?.planName === "Gold") {
        UseToastify(
          "",
          "You Have Done the Payment!",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ8Rf-P_S17VvgG5fIp1JWKKyX7AgTCbOt3w&usqp=CAU"
        );
      } else if (item?.planName === "Silver") {
        UseToastify("", "You Have Done the Payment!", img);
      } else {
        UseToastify(
          "",
          "You Have Done the Payment!",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvQcfoau_BSAE4OADEZ6HbTrLyLHrKqwN4AQ&usqp=CAU"
        );
      }

      const paymentInfo = {
        email: user?.email,
        price: totalPrice,
        plan: item?.planName,
      };
      const res = axiosSecure.post("/payments", paymentInfo);
      if (res.data?.paymentResult?.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your data has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
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
        {transactionId && (
          <p className="text-green-500">your transactionId {transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;

import React, { useState } from "react";

const PaymentForm = () => {
    const [amount, setAmount] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        // Add your payment processing logic here
        console.log(`Processing payment of ${amount} for ${phoneNumber}`);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-purple-500">
            <form
                onSubmit={handleSubmit}
                className="bg-purple-300 p-6 rounded-3xl shadow-lg w-full max-w-sm"
            >
                <h2 className="text-2xl mb-4">Airtime & Utilities Payment</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-4 rounded-2xl hover:bg-blue-700"
                >
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default PaymentForm;

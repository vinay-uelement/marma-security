"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type CurrencyContextType = {
  currency: string;
  exchangeRate: number;
  formatPrice: (priceInUsd: number) => string;
  isLoaded: boolean;
};

const CurrencyContext = createContext<CurrencyContextType>({
  currency: "USD",
  exchangeRate: 1,
  formatPrice: (price: number) => `$${price.toFixed(2)}`,
  isLoaded: false,
});

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchCurrencyAndRate() {
      try {
        // 1. Fetch user's country and currency
        let userCurrency = "USD";
        try {
          const ipResponse = await fetch("https://ipapi.co/json/");
          if (ipResponse.ok) {
            const ipData = await ipResponse.json();
            if (ipData.currency) {
              userCurrency = ipData.currency;
            }
          } else {
            // Fallback to ipapi.is if ipapi.co rate limits
            const fallbackResponse = await fetch("https://api.ipapi.is/");
            if (fallbackResponse.ok) {
              const fallbackData = await fallbackResponse.json();
              if (fallbackData.location?.currency) {
                userCurrency = fallbackData.location.currency;
              }
            }
          }
        } catch (e) {
          console.warn("Failed to fetch user currency, falling back to USD", e);
        }

        // 2. Fetch exchange rates
        if (userCurrency !== "USD") {
          const rateResponse = await fetch("https://open.er-api.com/v6/latest/USD");
          if (rateResponse.ok) {
            const rateData = await rateResponse.json();
            if (rateData.rates && rateData.rates[userCurrency]) {
              setExchangeRate(rateData.rates[userCurrency]);
              setCurrency(userCurrency);
            }
          }
        }
      } catch (error) {
        console.error("Error setting up currency:", error);
      } finally {
        setIsLoaded(true);
      }
    }

    fetchCurrencyAndRate();
  }, []);

  const formatPrice = (priceInUsd: number) => {
    const converted = priceInUsd * exchangeRate;
    try {
      return new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: currency,
      }).format(converted);
    } catch (e) {
      // Fallback if Intl fails
      return `${currency} ${converted.toFixed(2)}`;
    }
  };

  return (
    <CurrencyContext.Provider value={{ currency, exchangeRate, formatPrice, isLoaded }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => useContext(CurrencyContext);

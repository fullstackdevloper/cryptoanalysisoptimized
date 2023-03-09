import axios, { AxiosRequestConfig } from "axios";

export const fetchPriceInformation = async (coin: string, interval: string) => {
  let url = "";

  if (interval === "1D") {
    url = `https://min-api.cryptocompare.com/data/v2/histominute?fsym=${coin.toUpperCase()}&tsym=USD&limit=1440`;

  } else if (interval === "7D") {
    url = `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${coin.toUpperCase()}&tsym=USD&limit=168`;

  }  else if (interval === "2W") {
    url = `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${coin.toUpperCase()}&tsym=USD&limit=336`;

  } 
  else if (interval === "1M") {
    url = `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${coin.toUpperCase()}&tsym=USD&limit=720`;

  } else if (interval === "3M") {
    url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin.toUpperCase()}&tsym=USD&limit=90`;

  }
  else if (interval === "6M") {
    url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin.toUpperCase()}&tsym=USD&limit=180`;

  }
   else if (interval === "1Y") {
    url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin.toUpperCase()}&tsym=USD&limit=365
      `;
  }
  else if (interval === "2Y") {
    url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin.toUpperCase()}&tsym=USD&limit=730
      `;
  } 
  else if (interval === "3Y") {
    url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin.toUpperCase()}&tsym=USD&limit=1095
      `;
  } 
  else if (interval === "5Y") {
    url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin.toUpperCase()}&tsym=USD&limit=1825
      `;
  } 
   else if (interval === "ALL") {
    url = `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${coin.toUpperCase()}&tsym=USD&limit=2000
      `;
  }
  

  const axiosOptions: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "get",
    url: url,
  };

  const response = await axios(axiosOptions);
  return response.data.Data.Data;
};

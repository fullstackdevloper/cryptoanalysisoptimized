/* eslint-disable @typescript-eslint/no-unused-expressions */

import * as CSV from "csv-string";

import axios, { AxiosRequestConfig } from "axios";

import { debug } from "console";
import { exit } from "process";
import { keys } from "highcharts";

export const getMarketSentiment = async () => {
  const axiosOptions: AxiosRequestConfig = {
    headers: {
      "Content-Type": "application/json",
    },
    method: "get",
    url: ` https://weuic71x3k.execute-api.us-east-2.amazonaws.com/test`,
  };

  const response = await axios(axiosOptions);

  const csvData = response.data.body;
  const parsedCsvData = CSV.parse(csvData);
  const columnHeaders = parsedCsvData.slice(0, 1);
  const parsedWithHeaders = columnHeaders.concat(
    parsedCsvData.slice(15, parsedCsvData.length)
  );

  var formattedData: any = {};
  const keysArray = parsedWithHeaders[0].map((key) => key);

  keysArray.forEach((key) => {
    const shortenedKey = key.split("_");
    if (key !== "CloseTime") {
      if (formattedData[shortenedKey[0]] === undefined) {
        formattedData[shortenedKey[0]] = [];
      }
    }
  });

  parsedWithHeaders.forEach((day, dayIndex) => {
    let currentKeyPrefix = keysArray[1].split("_")[0];
    let fullObject: any = {};
    let dayDateWasSet = "placeholder date";
    day.forEach((record, recordIndex) => {
      if (dayIndex > 0) {
        // let obj: any = {};
        if (recordIndex === 0) {
          fullObject[keysArray[0]] = record;
          dayDateWasSet = record;
        } else {
          const metricKey = keysArray[recordIndex];
          const splitKey = metricKey.split("_");
          if (splitKey[0] !== currentKeyPrefix) {
            fullObject[keysArray[0]] = dayDateWasSet;
            formattedData[currentKeyPrefix].push(fullObject);
            fullObject = {};
            currentKeyPrefix = splitKey[0];
          } else if (recordIndex === keysArray.length - 1) {
            fullObject[keysArray[0]] = dayDateWasSet;
            formattedData[currentKeyPrefix].push(fullObject);
          } else {
            fullObject[keysArray[recordIndex]] = record;
          }
        }
      }
    });
  });

  return formattedData;
};

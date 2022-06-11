"use strict";

$(function () {
  // Create a jason array with all the data
  const jsonData = [
    {
      id: 1,
      title: "Iron Man",
      year: 2008,
    },
    {
      id: 2,
      title: "Spiderman: Homecoming",
      year: 2017,
    },
    {
      id: 3,
      title: "Avengers: Endgame",
      year: 2019,
    },
  ];

  // Function to return jsonData
  function getData() {
    return jsonData;
  }

  // Function to return a promise with jsonData
  function getDataPromise() {
    return new Promise((resolve) => {
      // Set timeout to simulate a delay
      setTimeout(() => {
        resolve(jsonData);
      }, 3000);
    });
  }

  // Function to return an Async with jsonData
  async function getDataAsync() {
    // Call and wait for the promise to resolve
    const data = await getDataPromise();

    // Show the data
    console.log("B. getDataAsync() resolved:", data);
  }

  // Function to show promise sequence
  function showPromiseSequence() {
    // Show the sequence of the promise
    console.log("1. Calling getDataPromise()");

    getDataPromise().then((data) => {
      console.log("2. getDataPromise() resolved with: ", data);
    });

    console.log("3. Get data: ", getData());
  }

  // Function to show async sequence
  function showAsyncSequence() {
    // Show the sequence of the async
    console.log("A. Calling getDataAsync()");

    getDataAsync();
  }

  // Show promise sequence
  showPromiseSequence();

  // Show async sequence
  showAsyncSequence();
});

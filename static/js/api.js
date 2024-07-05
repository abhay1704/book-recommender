const timer = (ms) =>
  new Promise((_, rej) =>
    setTimeout(
      rej.bind(this, "Response Timeout!! Internet Connection too slow"),
      ms
    )
  );

export const getData = async (url) => {
  try {
    const response = await Promise.race([fetch(url), timer(7000)]);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const postData = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    if (response.status !== 200) return [];

    return response.json();
  } catch (error) {
    throw error;
  }
};

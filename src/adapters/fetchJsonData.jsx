
const fetchJsonData = async (
  data = {},
  service,
  url = import.meta.env.VITE_API
) => {

  if (!service) {
    throw new Error("No service provided");
  }

  const endpoint = `${url}/${service}.php?${data['service']}`;

  const requestInfo = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  try {
    const response = await fetch(endpoint, requestInfo);

    if (!response.ok) {
      throw new Error(`Error fetching data from ${service}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error fetching data from ${service}: ${error.message}`);
  }
};

export default fetchJsonData;

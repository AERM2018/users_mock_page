const baseUrl = "http://localhost:3001/api";
const execApiCall = async (endpoint, body, method) => {
  try {
    console.log({body})
    const rawResponse = await fetch(`${baseUrl}${endpoint}`, {
      body: JSON.stringify(body),
      method,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await rawResponse.json();
    if (!rawResponse.ok) {
      swal.fire("Opps!!", response.error, "warning");
      return null;
    }
    return response;
  } catch (error) {
    console.log({ error });
  }
};

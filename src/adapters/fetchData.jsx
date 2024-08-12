const API_URL = import.meta.env.VITE_API;

const JSON_HEADERS = {
    "Content-Type": "application/json",
    Accept: "application/json",
};

const createFormData = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
    return formData;
};

const constructEndpoint = (url, service, data) => `${url}/${service}.php?${data["service"]}`;

export const fetchData = async ({
    service = "",
    data = {},
    type = "json",
    url = API_URL,
    method = "POST",
}) => {
    if (!service) throw new Error("No se proporcionó el servicio");

    const endpoint = constructEndpoint(url, service, data);

    const requestInfo = {
        method,
        headers: type === "json" ? JSON_HEADERS : { Accept: "application/json" },
        body: type === "json" ? JSON.stringify(data) : createFormData(data),
    };

    try {
        const response = await fetch(endpoint, requestInfo);
        if (!response.ok) throw new Error(`Error al obtener datos de ${service}: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        throw new Error(`Error al obtener datos de ${service}: ${error.message}`);
    }
};
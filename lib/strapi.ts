const STRAPI_API_URL = process.env.STRAPI_API_URL;
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export async function strapiFetch(
  endpoint: string,
  options: RequestInit = {}
) {
  const response = await fetch(`${STRAPI_API_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Strapi API error: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}
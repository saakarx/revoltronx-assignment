const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || '';
if (!BASE_URL)
  throw new Error('Invalid/Missing environment variable: NEXT_PUBLIC_BASE_URL');

export const getURI = (
  endpoint: string,
  params?: { [key: string]: string }
) => {
  const uri = new URL(BASE_URL);
  uri.pathname = endpoint;

  for (const key in params) {
    uri.searchParams.set(key, encodeURIComponent(params[key]));
  }

  return uri.toString();
};

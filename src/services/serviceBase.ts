// get fuction to fetch a url and the return it. T tells which type. This is generic

export const getUrl = async <T> (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return (await response.json()) as T;
}
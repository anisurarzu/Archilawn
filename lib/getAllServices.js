export default async function getAllSliders() {
  const result = await fetch(
    `https://archilawn-server.onrender.com/api/sliders`
  );
  return result.json();
}

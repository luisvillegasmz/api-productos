export default function Inicio() {
  return (
    <main className="mx-auto max-w-xl p-8">
      <h1 className="text-2xl font-bold">API de Productos</h1>
      <p className="mt-2">Servidor en marcha. Rutas útiles:</p>
      <ul className="mt-4 list-disc pl-6">
        <li><code>GET /api/health</code></li>
        <li><code>GET /api/productos</code></li>
        <li><code>GET /api/docs</code></li>
      </ul>
    </main>
  );
}
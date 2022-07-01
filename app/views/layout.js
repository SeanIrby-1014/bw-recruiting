export default function layout(locals, pageRenderer) {
  return `
    <html lang="en">
    <head>
      <title>${locals.title || 'Widget Creator'}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    </head>
    
    <body class="">
      <nav class="container-fluid navbar navbar-expand navbar-light bg-light">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="/new">Create New</a></li>
          <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
        </ul>
      </nav>
      <main class="mt-4 container py-4 position-relative">
        ${pageRenderer(locals)}
      </main>
    </body>
    </html>
  `;
}

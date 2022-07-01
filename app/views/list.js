export default function listPage({ widgets }) {
  if (!widgets.length) {
    return 'No Widgets Found';
  }
  return `
  <table class="table w-auto m-auto">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Purpose</th>
        <th>Active</th>
        <th></th>
      </tr>
    </thead>
   ${widgets.map(widget => `
    <tr>
      <td>${widget.id}</td>
      <td>${widget.name}</td>
      <td>${widget.purpose}</td>
      <td>${widget.active.toString()}</td>
      <td><a class="btn btn-primary" href="/${widget.id}">Edit</a></td>
    </tr>
  `).join('')}
  </table>
  `;
}

export default function form({ widget }) {
  const { id, name, purpose, active } = widget;

  return `
    <h2>${id ? `Edit Widget #${id}` : 'New Widget'}</h2>
    <form method="post" class="has-validation mt-3" action="/${id || ''}">
      <input type="hidden" name="id" value="${id}">
      <div class="mb-3">
        <label for="name" class="form-label">Widget Name</label>
        <input type="text" class="form-control" id="name" name="name" value="${name}">
      </div>
      <div class="mb-3">
        <label for="purpose" class="form-label">Purpose</label>
        <textarea class="form-control" id="purpose" name="purpose">${purpose}</textarea>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="active" name="active" value="true" ${active ? 'checked' : ''}>
        <label class="form-check-label" for="active" >Widget is Active</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;
}

import 'regenerator-runtime/runtime'

export const deleteRecord = async (e) => {
  const item = e.target.getAttribute('id');
  const result = await fetch('/delete', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id: item }) });
  const parsedResult = await result.json();
  return parsedResult;
};

export const updateRecord = async (e) => {
  const item = e.target.getAttribute('id');
  const parentID = e.target.parentNode.id;
  const clientInput = window.prompt('Please update the selected field with a new input.');

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ columnName: item, _id: parentID, text: clientInput })
  };

  const result = await fetch('/update', requestOptions);
  const parsedResult = await result.json();
  return parsedResult;
};
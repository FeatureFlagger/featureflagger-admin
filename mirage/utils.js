
export function paginateModelArray(modelName, allModels) {
  return {
    data: allModels.map((attrs) => (
      { type: modelName, id: attrs.id, attributes: attrs.attrs }
    ))
  };
}

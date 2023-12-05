type Errors = {
  emptyQuery?: string;
  longQuery?: string;
};

export type ValidatedType = {
  query: string;
  errors: Errors;
};

export const validateSearch = (query: string): ValidatedType => {
  let trimmedQuery = query.trim();
  const errors: Errors = {};

  if (trimmedQuery === "") {
    errors.emptyQuery = "Empty query";
  }

  if (trimmedQuery.length > 120) {
    trimmedQuery = trimmedQuery.slice(0, 119);
    // errors.longQuery = "Query cannot exceed 120 characters";
  }

  return {
    query: trimmedQuery,
    errors,
  };
};

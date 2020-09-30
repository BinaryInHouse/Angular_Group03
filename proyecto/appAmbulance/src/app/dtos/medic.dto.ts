export interface MedicDto {
  name: string;
  lastname: string;
}

export const mappingMedic = (result: any | any[]): MedicDto | MedicDto[] => {
  if (!result) {
    return [];
  }

  if (Array.isArray(result)) {
    const valueReturned: MedicDto[] = result.map((it) => {
      return { name: it.name, lastname: it.lastname };
    });

    return valueReturned;
  } else {
    const valueReturned: MedicDto = {
      name: result.name,
      lastname: result.name,
    };

    return valueReturned;
  }
};

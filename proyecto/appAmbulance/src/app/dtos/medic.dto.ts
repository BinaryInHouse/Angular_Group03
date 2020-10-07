export interface MedicDto {
  _id: string;
  name: string;
  surname: string;
  lastname: string;
  cmp: string;
  dni: string;
  email: string;
}

export const mappingMedic = (result: any | any[]): MedicDto | MedicDto[] => {
  if (!result) {
    return [];
  }

  if (Array.isArray(result)) {
    const valueReturned: MedicDto[] = result.map((it) => {
      return {
        _id: it._id,
        name: it.name,
        surname: it.surname,
        lastname: it.lastname,
        cmp: it.cmp,
        dni: it.dni,
        email: it.email,
      };
    });

    return valueReturned;
  } else {
    const valueReturned: MedicDto = {
      _id: result._id,
      name: result.name,
      surname: result.surname,
      lastname: result.lastname,
      cmp: result.cmp,
      dni: result.dni,
      email: result.email,
    };

    return valueReturned;
  }
};

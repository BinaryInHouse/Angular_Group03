export interface IStorage {
  save(propertyName: string, value: string): void;
  get(propertyName: string): string;
}

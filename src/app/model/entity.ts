export abstract class Entity {
  protected static entityType: string;
  protected static entityCategory: string;
  id?: string;

  constructor(jsonEntity?: any) {
    if (jsonEntity) {
      this.id = "00000000-0000-0000-0000-000000000000"; // placeholder to show how we get the id
    }
  }
}

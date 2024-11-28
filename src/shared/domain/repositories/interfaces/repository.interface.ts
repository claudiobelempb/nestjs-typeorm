export interface IRepository<E> {
  create(entity: E): Promise<E>;
  show(id: string): Promise<E>;
  index(): Promise<E[]>;
  update(id: string, entity: E): Promise<E>;
  delete(id: string): Promise<void>;
  active(id: string): Promise<void>;
  deactive(id: string): Promise<void>;
}

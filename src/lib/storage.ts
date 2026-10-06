/** localStorage seguro (modo privado, almacenamiento bloqueado, etc.). */
export const safeStorage = {
  get(key: string): string | null {
    try {
      return window.localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key: string, value: string): void {
    try {
      window.localStorage.setItem(key, value);
    } catch {
      /* ignorado: la preferencia simplemente no se persiste */
    }
  },
};

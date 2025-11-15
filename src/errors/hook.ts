export class HookError extends Error {
  constructor(name: string) {
    const v = name[0].toUpperCase() + name.slice(1);
    const hook = `use${v}`;
    const provider = `${v}Context`;
    super(`${hook} cannot be used outside of its provider ${provider}`);
  }
}

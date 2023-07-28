export function arePropertiesEquals<T extends Record<string, any>>(source: T, target: T): boolean {
    const keys = Object.keys(source);
    return Object.keys(target).length === keys.length && !keys.some(key => source[key] !== target[key]);
  }
  
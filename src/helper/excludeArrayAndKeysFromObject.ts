/* eslint-disable @typescript-eslint/no-explicit-any */

function excludeArrayAndKeysFromObject(obj: any, excludeKeys: string[]) {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (!Array.isArray(value) && !excludeKeys.includes(key)) {
      (acc as any)[key] = value;
    }
    return acc;
  }, {});
}

export { excludeArrayAndKeysFromObject }
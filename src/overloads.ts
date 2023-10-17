function concatenate(strs: string[]): string;
function concatenate(strs: string[], separator: string): string;
function concatenate(strs: any, separator?: any): any {
  if (separator !== undefined) {
    return strs.join(separator);
  } else {
    return strs.join('');
  }
}

let names = ['Alice', 'Bob', 'Charlie'];

console.log(concatenate(names)); // Outputs: AliceBobCharlie
console.log(concatenate(names, ', ')); // Outputs: Alice, Bob, Charlie

export {};

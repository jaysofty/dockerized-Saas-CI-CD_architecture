declare module "yamljs" {
  const YAML: {
    load(path: string): any;
    parse(content: string): any;
    stringify(obj: any, inline?: number, spaces?: number): string;
  };

  export default YAML;
}
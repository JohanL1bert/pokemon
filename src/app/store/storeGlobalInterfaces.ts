export interface INameAndUrl {
  name: string;
  url: string;
}

export interface IIdAndName {
  id: number;
  name: string;
}

export interface INamesIncludesNameAndLanguage {
  name: string;
  language: INameAndUrl;
}

export interface IHeader {
  homepage: string;
  title: string;
}

export interface ISocial {
  linkedin: string;
  github: string;
}

export interface IAbout {
  name: string;
  role: string;
  description: string;
  resume: string;
  social: ISocial;
}

export interface IProject {
  name: string;
  description: string;
  stack: string[];
  sourceCode: string;
  livePreview: string;
}

export interface IContact {
  email: string;
}

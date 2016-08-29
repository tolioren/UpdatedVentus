export interface Curriculum {
  _id?: string;
  complete: boolean;
  extension: string;
  name: string;
  progress: number;
  size: number;
  store: string;
  token: string;
  type: string;
  uploadedAt: Date;
  uploading: boolean;
  url: string;
  userId?: string;
}

export interface Thumb extends Curriculum  {
  originalStore?: string;
  originalId?: string;
}
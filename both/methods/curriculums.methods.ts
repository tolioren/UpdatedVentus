import { UploadFS } from 'meteor/jalik:ufs';
import { CurriculumsStore } from '../collections/curriculums.collection';

export function upload(data: File): Promise<any> {
  return new Promise((resolve, reject) => {
    // pick from an object only: name, type and size
    const file = {
      name: data.name,
      type: data.type,
      size: data.size,
    };

    const upload = new UploadFS.Uploader({
      data,
      file,
      store: CurriculumsStore,
      onError: reject,
      onComplete: resolve
    });
    upload.start();
  });
}

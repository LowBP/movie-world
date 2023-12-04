import { ImageSizes } from 'common/types/images-sizes';
import ApiService from '~/services/apiService';

const API = new ApiService();

export const buildImagePath = (url: string | null | undefined, width: ImageSizes): string => {
  if (url) {
    return `${API.API_IMAGE_PATH}${width}${url}`;
  } else {
    return '';
  }
};

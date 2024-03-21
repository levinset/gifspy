//embed url modal
export interface ModalProps {
  embedUrl: string;
  onClose: () => void;
}
//delet confirmation modal types
export interface DeleteModalProps {
  handleDelete: () => void;
  onClose: () => void;
}

//share modal types
export interface ShareModalProps {
  images: ImagesType;
  onClose: () => void;
}

//image and images types
export type ImageType = {
  height: string;
  width: string;
  size?: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size?: string;
  webp?: string;
  frames?: string;
  hash?: string;
};

export type ImagesType = {
  original: ImageType;
  downsized: ImageType;
  downsized_large: ImageType;
  downsized_medium: ImageType;
  downsized_small: ImageType;
  downsized_still: ImageType;
  fixed_height: ImageType;
  fixed_height_downsampled: ImageType;
  fixed_height_small: ImageType;
  fixed_height_small_still: ImageType;
  fixed_height_still: ImageType;
  fixed_width: ImageType;
  fixed_width_downsampled: ImageType;
  fixed_width_small: ImageType;
  fixed_width_small_still: ImageType;
  fixed_width_still: ImageType;
  looping: ImageType;
  original_still: ImageType;
  original_mp4: ImageType;
  preview: ImageType;
  preview_gif: ImageType;
  preview_webp: ImageType;
  hd: ImageType;
  "480w_still": ImageType;
};

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
// Define the ImageType and ImagesType
interface Image {
  downsized_still?: {
    url: string;
    size?: string;
  };
  downsized_medium?: {
    url: string;
    size?: string;
  };
  original?: {
    url: string;
    size?: string;
  };
  original_mp4?: {
    mp4: string;
    mp4_size?: string;
  };
}

export interface ShareModalProps {
  images: Image;
  onClose: () => void;
}

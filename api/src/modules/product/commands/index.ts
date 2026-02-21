import { CreateProductHandler } from './create-product/create-product.handler';
import { DeleteProductHandler } from './delete-product/delete-product.handler';
import { UploadProductImageHandler } from './upload-product-image/upload-product-image.handler';

export const productCommandHandlers = [CreateProductHandler, UploadProductImageHandler, DeleteProductHandler];

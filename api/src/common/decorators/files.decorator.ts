import { applyDecorators, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { Storage } from '@src/@types/global';
import * as fastify from 'fastify';

export const Files = createParamDecorator(
  async (_data: unknown, ctx: ExecutionContext): Promise<null | Record<string, Storage.MultipartFile[]>> => {
    const req = ctx.switchToHttp().getRequest() as fastify.FastifyRequest;
    return req.storedFiles;
  },
);

export function ApiFile(fieldName = 'file') {
  return applyDecorators(
    ApiConsumes('multipart/form-data'),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          [fieldName]: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    }),
  );
}

export function ApiFiles(fieldName = 'files') {
  return applyDecorators(
    ApiConsumes('multipart/form-data'),
    ApiBody({
      schema: {
        type: 'object',
        properties: {
          [fieldName]: {
            type: 'array',
            items: {
              type: 'string',
              format: 'binary',
            },
          },
        },
      },
    }),
  );
}

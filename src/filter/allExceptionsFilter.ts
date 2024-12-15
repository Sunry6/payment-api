import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception instanceof Error ? 500 : 400;
    response.status(status).json({
      statusCode: status,
      message:
        exception instanceof Error ? exception.message : 'An error occurred',
    });
  }
}

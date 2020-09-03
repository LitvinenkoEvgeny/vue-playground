import { CanActivate, ExecutionContext, HttpException, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { constants } from 'http2';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();

    if (!ctx.headers.authorization) {
      return false;
    } else {
      if (this.validateToken(ctx.headers.authorization)) {
        ctx.user = ctx.headers.authorization;
      } else {
        throw new HttpException('Unauthorized', constants.HTTP_STATUS_UNAUTHORIZED);
      }
    }
  }

  async validateToken(token: string) {
    return false;
  }
}

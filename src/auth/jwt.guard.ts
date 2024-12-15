import { Injectable } from '@nestjs/common';
import { JwtAuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends JwtAuthGuard {}

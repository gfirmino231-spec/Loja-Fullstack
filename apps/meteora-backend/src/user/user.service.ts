import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async register(email: string, password: string) {
    if (!EMAIL_REGEX.test(email)) {
      throw new GraphQLError('Email inválido.', {
        extensions: { code: 'INVALID_EMAIL' },
      });
    }

    const existente = await this.prisma.user.findUnique({ where: { email } });
    if (existente) {
      throw new GraphQLError('Já existe uma conta cadastrada com esse email.', {
        extensions: { code: 'EMAIL_ALREADY_EXISTS' },
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    return this.prisma.user.create({
      data: { email, password: passwordHash },
    });
  }

  async login(email: string, password: string) {
    const usuario = await this.prisma.user.findUnique({ where: { email } });
    if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
      throw new GraphQLError('Email ou senha incorretos.', {
        extensions: { code: 'INVALID_CREDENTIALS' },
      });
    }
    return usuario;
  }
}

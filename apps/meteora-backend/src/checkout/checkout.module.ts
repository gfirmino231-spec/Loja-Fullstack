import { Module } from '@nestjs/common';
import { CheckoutResolver } from './checkout.resolver';
import { CheckoutService } from './checkout.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CheckoutResolver, CheckoutService],
})
export class CheckoutModule {}

import { Injectable } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { PrismaService } from '../prisma/prisma.service';
import { ItemCompraInput } from './dto/item-compra.input';

@Injectable()
export class CheckoutService {
  constructor(private readonly prisma: PrismaService) {}

  async finalizarCompra(itens: ItemCompraInput[]): Promise<boolean> {
    if (itens.length === 0) {
      throw new GraphQLError('A sacola está vazia.', {
        extensions: { code: 'SACOLA_VAZIA' },
      });
    }

    for (const item of itens) {
      if (item.quantidade <= 0) {
        throw new GraphQLError('Quantidade inválida.', {
          extensions: { code: 'QUANTIDADE_INVALIDA' },
        });
      }
    }

    await this.prisma.$transaction(async (tx) => {
      for (const item of itens) {
        const produtoCor = await tx.productColor.findUnique({
          where: {
            productId_colorId: {
              productId: item.productId,
              colorId: item.colorId,
            },
          },
        });

        if (!produtoCor) {
          throw new GraphQLError('Produto ou cor não encontrados.', {
            extensions: { code: 'PRODUTO_NAO_ENCONTRADO' },
          });
        }

        const resultadoCor = await tx.productColor.updateMany({
          where: { id: produtoCor.id, stock: { gte: item.quantidade } },
          data: { stock: { decrement: item.quantidade } },
        });

        if (resultadoCor.count === 0) {
          throw new GraphQLError('Estoque insuficiente para um dos produtos selecionados.', {
            extensions: { code: 'ESTOQUE_INSUFICIENTE' },
          });
        }

        const produtoTamanho = await tx.productSize.findUnique({
          where: {
            productId_sizeId: {
              productId: item.productId,
              sizeId: item.sizeId,
            },
          },
        });

        if (!produtoTamanho) {
          throw new GraphQLError('Produto ou tamanho não encontrados.', {
            extensions: { code: 'PRODUTO_NAO_ENCONTRADO' },
          });
        }

        const resultadoTamanho = await tx.productSize.updateMany({
          where: { id: produtoTamanho.id, stock: { gte: item.quantidade } },
          data: { stock: { decrement: item.quantidade } },
        });

        if (resultadoTamanho.count === 0) {
          throw new GraphQLError('Estoque insuficiente para um dos produtos selecionados.', {
            extensions: { code: 'ESTOQUE_INSUFICIENTE' },
          });
        }
      }
    });

    return true;
  }
}

import { gql } from "@apollo/client";

export const FINALIZAR_COMPRA = gql`
  mutation FinalizarCompra($itens: [ItemCompraInput!]!) {
    finalizarCompra(itens: $itens)
  }
`;

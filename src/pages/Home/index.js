import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/70/HZM-1731-270/HZM-1731-270_zoom1.jpg?ts=1573579328&ims=326x"
          alt="Tenis"
        />
        <strong>
          Tênis Nike Titulo muito grande entao serve para testar a aplicacao do
          margin top ok
        </strong>
        <span>R$ 189.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/70/HZM-1731-270/HZM-1731-270_zoom1.jpg?ts=1573579328&ims=326x"
          alt="Tenis"
        />
        <strong>Tênis Nike</strong>
        <span>R$ 189.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/70/HZM-1731-270/HZM-1731-270_zoom1.jpg?ts=1573579328&ims=326x"
          alt="Tenis"
        />
        <strong>Tênis Nike</strong>
        <span>R$ 189.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/70/HZM-1731-270/HZM-1731-270_zoom1.jpg?ts=1573579328&ims=326x"
          alt="Tenis"
        />
        <strong>Tênis Nike</strong>
        <span>R$ 189.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/70/HZM-1731-270/HZM-1731-270_zoom1.jpg?ts=1573579328&ims=326x"
          alt="Tenis"
        />
        <strong>Tênis Nike</strong>
        <span>R$ 189.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/70/HZM-1731-270/HZM-1731-270_zoom1.jpg?ts=1573579328&ims=326x"
          alt="Tenis"
        />
        <strong>Tênis Nike</strong>
        <span>R$ 189.90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
